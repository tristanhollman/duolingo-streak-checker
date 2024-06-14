import NorthWestIcon from "@mui/icons-material/NorthWest";
import { Typography } from "@mui/material";
import { useConfiguration } from "../../hooks/useConfiguration";
import styles from "./StreakView.module.less";
import { User } from "./User/User";

export const StreakView = () => {
  const { config } = useConfiguration();

  const Header = () => {
    return (
      <Typography variant="h2" gutterBottom className={styles.header}>
        Duolingo Streak Checker
      </Typography>
    );
  };

  const StreakGrid = () => {
    return (
      <div className={styles.streakGrid}>
        {config.userNames.map((userName) => (
          <User userName={userName} key={userName} />
        ))}
      </div>
    );
  };

  const EmptyState = () => {
    const ConfigPointer = () => {
      return (
        <div className={styles.pointer}>
          <NorthWestIcon fontSize="large" />
        </div>
      );
    };

    return (
      <>
        <Typography variant="subtitle1" gutterBottom>
          Keep track of your and your friends Duolingo streaks!
        </Typography>
        <ConfigPointer />
      </>
    );
  };

  const SideBar = () => {
    return <div className={styles.sideBar}></div>;
  };

  return (
    <div className={styles.container}>
      <Header />
      {config.userNames.length === 0 && <EmptyState />}
      <StreakGrid />
      <SideBar />
    </div>
  );
};
