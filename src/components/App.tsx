import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { useConfiguration } from "../hooks/useConfiguration";
import "./App.less";
import { useStreak } from "../hooks/useStreak";

const queryClient = new QueryClient();

const App = () => {
  const { hasConfig } = useConfiguration();

  return (
    <QueryClientProvider client={queryClient}>
      {hasConfig ? <StreakView /> : <ConfigView />}
      <ResetConfigButton />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const ConfigView = () => {
  const { config, setConfig } = useConfiguration();
  const [userName, setUserName] = useState(config.userName);

  return (
    <div className="card">
      <input value={userName} onChange={(e) => setUserName(e.target.value)} />
      <button
        onClick={() => {
          setConfig({ userName: userName });
        }}
      >
        Save
      </button>
    </div>
  );
};

const StreakView = () => {
  const { isPending, isValid, streak } = useStreak();

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (!isValid) {
    return <span>Failed to retrieve streak data...</span>;
  }

  return <div className="card">{<h1>{streak}</h1>}</div>;
};

const ResetConfigButton = () => {
  const { setConfig } = useConfiguration();

  return (
    <div className="card">
      <button onClick={() => setConfig({ userName: "" })}>Reset Config</button>
    </div>
  );
};

export default App;
