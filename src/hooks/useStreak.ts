import { useQuery } from "@tanstack/react-query";

type StreakInfo = {
  startDate: string;
  length: number;
  endDate: string;
};

type DuolingoResponse = {
  users: {
    streak: number;
    streakData: {
      currentStreak: StreakInfo;
    };
  }[];
};

/**
 * Custom hook to fetch the user's streak information from Duolingo.
 * @param userName - The user's Duolingo username.
 * @returns An object with the streak information.
 */
export function useStreak(userName: string) {
  const { isPending, isError, data } = useQuery({
    queryKey: ["streakInfo", userName],
    queryFn: async () => {
      const userUrl = `https://www.duolingo.com/2017-06-30/users?username=${userName}`;
      const proxiedUrl = `https://corsproxy.io/?${encodeURIComponent(userUrl)}`;
      const response = await fetch(proxiedUrl);
      const result = (await response.json()) as DuolingoResponse;
      return result;
    },
    refetchInterval: 1000 * 60 * 5, // 5 minutes
  });

  if (isError) console.error("Error fetching streak info", data);

  const isValid = !isError && data?.users?.length === 1;
  const streak = isValid ? data.users[0].streak : 0;
  // Check if a lesson was done today
  const didLessonToday = isValid
    ? didALessonToday(data.users[0].streakData.currentStreak)
    : false;

  return { isPending, isValid, streak, didLessonToday };
}

/**
 * Checks if a lesson was done today based on the streak information.
 * @param streakInfo - The streak information object.
 * @returns A boolean indicating whether a lesson was done today.
 */
const didALessonToday = (streakInfo: StreakInfo): boolean => {
  return (
    new Date(streakInfo.endDate).getTime() >= new Date().setHours(0, 0, 0, 0)
  );
};
