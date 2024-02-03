import { useConfiguration } from "../../hooks/useConfiguration";
import "./StreakView.less";
import { User } from "./User/User";

export const StreakView = () => {
  const { config } = useConfiguration();

  return (
    <div className="container">
      <div className="streak-grid">
        {config.userNames.map((userName) => (
          <User userName={userName} key={userName} />
        ))}
      </div>
    </div>
  );
};
