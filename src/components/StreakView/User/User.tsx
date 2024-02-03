import { useUserData } from "../../../hooks/useUserData";
import { proxyify } from "../../../utilities";
import { FireBorder } from "./FireBorder/FireBorder";
import { StreakBlock } from "./StreakBlock/StreakBlock";
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
        <StreakBlock days={user.streak.days} />
      </div>
    </FireBorder>
  );
};
