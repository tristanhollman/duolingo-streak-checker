import NorthWestIcon from "@mui/icons-material/NorthWest";
import { Typography } from "@mui/material";
import { useConfiguration } from "../../hooks/useConfiguration";
import styles from "./StreakView.module.less";
import { User } from "./User/User";
import { useEffect, useState } from "react";

export const StreakView = () => {
  const { config } = useConfiguration();
  const [numColumns, setNumColumns] = useState(1);

  useEffect(() => {
    const calculateColumns = () => {
      const numUsers = config.userNames.length;
      const columns = Math.ceil(Math.sqrt(numUsers));
      setNumColumns(columns);
    };

    calculateColumns();
    window.addEventListener("resize", calculateColumns);

    return () => {
      window.removeEventListener("resize", calculateColumns);
    };
  }, [config.userNames]);

  const Header = () => {
    return (
      <Typography variant="h2" gutterBottom className={styles.header}>
        Duolingo Streak Checker
      </Typography>
    );
  };

  const StreakGrid = () => {
    return (
      <div
        className={styles.streakGrid}
        style={{ gridTemplateColumns: `repeat(${numColumns}, 1fr)` }}
      >
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
