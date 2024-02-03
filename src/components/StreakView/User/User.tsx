import { useUserData } from "../../../hooks/useUserData";
import { proxyify } from "../../../utilities";
import { FireBorder } from "./FireBorder/FireBorder";
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

  return (
    <FireBorder enabled={user.streak.didALessonToday()}>
      <div className="user">
        <h2>{user.name}</h2>
        <i>({user.currentCourse?.title})</i>
        <img
          className="avatar"
          alt={user.name}
          src={proxyify(user.pictureUrl)}
        />
        <StreakBlock streak={user.streak.days} />
      </div>
    </FireBorder>
  );
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
