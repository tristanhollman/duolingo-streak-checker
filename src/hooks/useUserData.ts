import { useQuery } from "@tanstack/react-query";
import { fetchWithProxy } from "../utilities";
import { DuolingoUserResponse, UserDto } from "../entities/responses";
import { LeaderBoardInfo, User } from "../entities/models";
import { DuolingoLeaderboardResponse } from "../entities/responses/duolingo-leaderboard-response";

/**
 * Custom hook to fetch the user's information from Duolingo.
 * @param userName - The user's Duolingo username.
 * @returns An object with user information.
 */
export function useUserData(userName: string) {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["streakInfo", userName],
    queryFn: async () => {
      const user = await fetchUser(userName);
      const leaderboardTier = await fetchLeaderboardTier(user.id);
      return { user, leaderboardTier };
    },
    refetchInterval: 1000 * 60 * 5, // 5 minutes
    refetchIntervalInBackground: true, // continue to refetch while tab/window is in the background
  });

  if (isError) console.error("Error fetching streak info", error);

  const isValid = !isError && data?.user;
  const user = isValid
    ? User.fromResponse(data.user, data.leaderboardTier)
    : null;

  return { isPending, isValid, user };
}

const fetchUser = async (userName: string): Promise<UserDto> => {
  const rawUserResponse = await fetchWithProxy(
    // The `v` query parameter is to prevent caching in the proxy that's being used.
    `https://www.duolingo.com/2017-06-30/users?username=${userName}&v=${new Date().getTime()}`,
  );
  const typedUserResponse =
    (await rawUserResponse.json()) as DuolingoUserResponse;
  const user = typedUserResponse.users[0];
  return user;
};

const fetchLeaderboardTier = async (
  userId: number,
): Promise<LeaderBoardInfo | undefined> => {
  try {
    const rawUserResponse = await fetchWithProxy(
      `https://duolingo-leaderboards-prod.duolingo.com/leaderboards/7d9f5dd1-8423-491a-91f2-2532052038ce/users/${userId}`,
    );
    const typedUserResponse =
      (await rawUserResponse.json()) as DuolingoLeaderboardResponse;

    return {
      tier: typedUserResponse.tier,
      numWins: typedUserResponse.stats.num_wins,
    };
  } catch (error) {
    console.error("Error fetching leaderboard tier", error);
    return undefined;
  }
};
