import { useConfiguration } from "../../hooks/useConfiguration";
import { User } from "./User/User";
import "./StreakView.less";

export const StreakView = () => {
  const { config } = useConfiguration();

  return (
    <div className="container">
      <div className="streak-grid">
        {config?.userNames.map((userName) => (
          <User userName={userName} key={userName} />
        ))}
      </div>
      <ResetConfigButton />
    </div>
  );
};

const ResetConfigButton = () => {
  const { setConfig } = useConfiguration();

  return (
    <div className="card">
      <button onClick={() => setConfig({ userNames: [] })}>Reset Config</button>
    </div>
  );
};
