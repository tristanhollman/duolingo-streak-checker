import { useQuery } from "@tanstack/react-query";
import { fetchWithProxy } from "../utilities";
import { DuolingoResponse } from "../entities/responses";
import { User } from "../entities/models";

/**
 * Custom hook to fetch the user's information from Duolingo.
 * @param userName - The user's Duolingo username.
 * @returns An object with user information.
 */
export function useUserData(userName: string) {
  const { isPending, isError, data } = useQuery({
    queryKey: ["streakInfo", userName],
    queryFn: async () => {
      const response = await fetchWithProxy(
        // The `v` query parameter is to prevent caching in the proxy that's being used.
        `https://www.duolingo.com/2017-06-30/users?username=${userName}&v=${new Date().getTime()}`,
      );
      const result = (await response.json()) as DuolingoResponse;
      return result;
    },
    refetchInterval: 1000 * 60 * 5, // 5 minutes
  });

  if (isError) console.error("Error fetching streak info", data);

  const isValid = !isError && data?.users?.length === 1;
  const user = isValid ? User.fromResponse(data.users[0]) : null;

  return { isPending, isValid, user };
}
