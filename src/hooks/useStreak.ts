import { useQuery } from "@tanstack/react-query";
import { useConfiguration } from "./useConfiguration";

export function useStreak() {
  const { config } = useConfiguration();

  const { isPending, isError, data } = useQuery({
    queryKey: ["streakInfo", config.userName],
    queryFn: () =>
      fetch(
        `https://www.duolingo.com/2017-06-30/users?username=${config.userName}`,
      ).then((res) => res.json()),
    refetchInterval: 1000 * 60 * 5, // 5 minutes
  });

  if (isError) console.error("Error fetching streak info", data);

  const isValid = !isError && data?.users?.length === 1;
  const streak: number = isValid ? data.users[0].streak : 0;

  return { isPending, isValid, streak };
}
