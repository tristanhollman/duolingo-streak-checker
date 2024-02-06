import styles from "./StreakBlock.module.less";

type StreakBlockProps = {
  days: number;
};
export const StreakBlock = (props: StreakBlockProps) => {
  const isActive = props.days > 0;

  return (
    <div className={styles.streakBlock}>
      <div className={styles.container}>
        {isActive && (
          <>
            <Star positionClass={styles.starPositionA} />
            <Star positionClass={styles.starPositionB} />
          </>
        )}
        {isActive ? (
          <Flame positionClass={styles.flamePosition} />
        ) : (
          <DisabledFlame positionClass={styles.flamePosition} />
        )}
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
    <img
      className={`${styles.icon} ${props.positionClass}`}
      src="https://d35aaqx5ub95lt.cloudfront.net/images/profile/f68d647fdc1536870945a5c84f3b3b82.svg"
    />
  );
};

const Flame = (props: { positionClass: string }) => {
  return (
    <img
      className={`${styles.icon} ${props.positionClass}`}
      src="https://d35aaqx5ub95lt.cloudfront.net/images/profile/8a6dca76019d059a81c4c7c1145aa7a4.svg"
    />
  );
};

const DisabledFlame = (props: { positionClass: string }) => {
  return (
    <img
      className={`${styles.icon} ${props.positionClass}`}
      src="https://d35aaqx5ub95lt.cloudfront.net/images/icons/ba95e6081679d9d7e8c132da5cfce1ec.svg"
    />
  );
};
