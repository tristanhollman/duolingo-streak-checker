import styles from "./StreakBlock.module.less";
import starSvg from "../../../../assets/streak-block-star.svg";
import flameSvg from "../../../../assets/streak-block-flame.svg";

type StreakBlockProps = {
  days: number;
  didALessonToday: boolean;
};
export const StreakBlock = (props: StreakBlockProps) => {
  const hasStreak = props.days > 0;
  const didALessonToday = hasStreak && props.didALessonToday;

  return (
    <div className={styles.streakBlock}>
      <div
        className={`${styles.container} ${!hasStreak && styles.inactive} ${didALessonToday && styles.fireAnimation}`}
      >
        {didALessonToday && (
          <>
            <Star positionClass={styles.starPositionA} />
            <Star positionClass={styles.starPositionB} />
          </>
        )}
        <Flame positionClass={styles.flamePosition} active={didALessonToday} />
        <div className={styles.streakNumberWrapper}>
          <h1>{props.days}</h1>
          <span>Day streak</span>
        </div>
      </div>
    </div>
  );
};

const Star = (props: { positionClass: string }) => {
  return (
    <img className={`${styles.icon} ${props.positionClass}`} src={starSvg} />
  );
};

const Flame = (props: { positionClass: string; active: boolean }) => {
  return (
    <img
      className={`${styles.icon} ${props.positionClass} ${!props.active && styles.inactive}`}
      src={flameSvg}
    />
  );
};
