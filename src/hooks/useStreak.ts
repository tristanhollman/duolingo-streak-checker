import { useQuery } from "@tanstack/react-query";
import { useConfiguration } from "./useConfiguration";

type DuolingoResponse = {
  users: {
    streak: number;
  }[];
};

export function useStreak() {
  const { config } = useConfiguration();

  const { isPending, isError, data } = useQuery({
    queryKey: ["streakInfo", config.userName],
    queryFn: async () => {
      const userUrl = `https://www.duolingo.com/2017-06-30/users?username=${config.userName}`;
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

  return { isPending, isValid, streak };
}
