import { useUserData } from "../../../hooks/useUserData";
import { proxyify } from "../../../utilities";
import { CountryFlag } from "./CountryFlag/CountryFlag";
import { StreakBlock } from "./StreakBlock/StreakBlock";
import styles from "./User.module.less";

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
    <div className={styles.container}>
      <h2>{user.name}</h2>
      <i>{user.currentCourse?.title}</i>
      <CountryFlag countryCode={user.currentCourse?.languageCode} />
      <Avatar url={user.pictureUrl} name={user.name} />
      <StreakBlock
        days={user.streak.days}
        didALessonToday={user.streak.didALessonToday()}
      />
    </div>
  );
};

const Avatar = (props: { url: string; name: string }) => {
  return (
    <img className={styles.avatar} alt={props.name} src={proxyify(props.url)} />
  );
};
