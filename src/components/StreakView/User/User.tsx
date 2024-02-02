import { StreakData, useUserData } from "../../../hooks/useUserData";
import { proxyify } from "../../../utilities";
import { FireBlock } from "./FireBlock/FireBlock";
import "./User.less";

type UserProps = {
  userName: string;
};
export const User = (props: UserProps) => {
  const { isPending, isValid, user } = useUserData(props.userName);

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (!isValid || !user) {
    return <span>Failed to retrieve streak data...</span>;
  }

  const didLessonToday = didALessonToday(user.streakData);

  return (
    <FireBlock enabled={didLessonToday}>
      <div className="user">
        <h2>{user.name}</h2>
        <i>({user.courses[0]?.title})</i>
        <img
          className="avatar"
          alt={user.name}
          src={proxyify(user.picture.replace("//", "https://") + "/xxlarge")}
        />
        <StreakBlock streak={user.streak} />
      </div>
    </FireBlock>
  );
};

/**
 * Checks if a lesson was done today based on the streak information.
 * @param streakInfo - The streak information object.
 * @returns A boolean indicating whether a lesson was done today.
 */
const didALessonToday = (streakData: StreakData): boolean => {
  const streakInfo = streakData.currentStreak;
  if (streakInfo) {
    return (
      new Date(streakInfo.endDate).getTime() >= new Date().setHours(0, 0, 0, 0)
    );
  }
  return false;
};

type StreakBlockProps = {
  streak: number;
};
const StreakBlock = (props: StreakBlockProps) => {
  return (
    <div className="streak-block">
      <div className="container">
        {props.streak > 0 && (
          <>
            <Star positionClass="star-position-a" />
            <Star positionClass="star-position-b" />
          </>
        )}
        {props.streak > 0 ? (
          <Flame positionClass="flame-position" />
        ) : (
          <DisabledFlame positionClass="flame-position" />
        )}
        <div className="streak-number-wrapper">
          <h1>{props.streak}</h1>
          <span>Day streak</span>
        </div>
      </div>
    </div>
  );
};

const Star = (props: { positionClass: string }) => {
  return (
    <img
      className={`icon ${props.positionClass}`}
      src="https://d35aaqx5ub95lt.cloudfront.net/images/profile/f68d647fdc1536870945a5c84f3b3b82.svg"
    />
  );
};

const Flame = (props: { positionClass: string }) => {
  return (
    <img
      className={`icon ${props.positionClass}`}
      src="https://d35aaqx5ub95lt.cloudfront.net/images/profile/8a6dca76019d059a81c4c7c1145aa7a4.svg"
    />
  );
};

const DisabledFlame = (props: { positionClass: string }) => {
  return (
    <img
      className={`icon ${props.positionClass}`}
      src="https://d35aaqx5ub95lt.cloudfront.net/images/icons/ba95e6081679d9d7e8c132da5cfce1ec.svg"
    />
  );
};
