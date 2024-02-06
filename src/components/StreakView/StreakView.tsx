import { Typography } from "@mui/material";
import { useConfiguration } from "../../hooks/useConfiguration";
import "./StreakView.less";
import { User } from "./User/User";
import NorthWestIcon from "@mui/icons-material/NorthWest";

export const StreakView = () => {
  const { config } = useConfiguration();

  const Header = () => {
    return (
      <Typography variant="h2" gutterBottom>
        Duolingo Streaks
      </Typography>
    );
  };

  const StreakGrid = () => {
    return (
      <div className="streak-grid">
        {config.userNames.map((userName) => (
          <User userName={userName} key={userName} />
        ))}
      </div>
    );
  };

  const EmptyState = () => {
    const ConfigPointer = () => {
      return (
        <div className="pointer">
          <NorthWestIcon fontSize="large" />
        </div>
      );
    };

    return (
      <>
        <Typography variant="subtitle1" gutterBottom>
          Keep track of your and your friends Duoling streaks!
        </Typography>
        <ConfigPointer />
      </>
    );
  };

  return (
    <div className="container">
      <Header />
      {config.userNames.length === 0 && <EmptyState />}
      <StreakGrid />
    </div>
  );
};
