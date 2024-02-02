import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useConfiguration } from "../hooks/useConfiguration";
import "./App.less";
import { ConfigView } from "./ConfigView/ConfigView";
import { StreakView } from "./StreakView/StreakView";

const queryClient = new QueryClient();

export const App = () => {
  const { hasConfig } = useConfiguration();

  return (
    <QueryClientProvider client={queryClient}>
      {hasConfig ? <StreakView /> : <ConfigView />}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
