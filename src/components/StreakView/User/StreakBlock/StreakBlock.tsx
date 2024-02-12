import styles from "./StreakBlock.module.less";
import starSvg from "../../../../assets/streak-block-star.svg";
import flameSvg from "../../../../assets/streak-block-flame.svg";

type StreakBlockProps = {
  days: number;
};
export const StreakBlock = (props: StreakBlockProps) => {
  const isActive = props.days > 0;

  return (
    <div className={styles.streakBlock}>
      <div className={`${styles.container} ${!isActive && styles.inactive}`}>
        {isActive && (
          <>
            <Star positionClass={styles.starPositionA} />
            <Star positionClass={styles.starPositionB} />
          </>
        )}
        <Flame positionClass={styles.flamePosition} />
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

const Flame = (props: { positionClass: string }) => {
  return (
    <img className={`${styles.icon} ${props.positionClass}`} src={flameSvg} />
  );
};
