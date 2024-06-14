import styles from "./LeagueBadge.module.less";
import { Tier } from "../../../../entities/models";
import { getLeagueBackgroundImage } from "../../../../utilities/league-tier-background/determine-league-background";

export const LeagueBadge = (props: { league: Tier | undefined }) => {
  return (
    <img
      className={`${styles.leagueBadge}`}
      src={getLeagueBackgroundImage(props.league)}
    />
  );
};
