import { useStreak } from "../../hooks/useStreak";
import { FireBlock } from "./FireBlock/FireBlock";

type StreakBlockProps = {
  userName: string;
};
export const StreakBlock = (props: StreakBlockProps) => {
  const { isPending, isValid, streak, didLessonToday } = useStreak(
    props.userName,
  );

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (!isValid) {
    return <span>Failed to retrieve streak data...</span>;
  }
  return (
    <FireBlock enabled={didLessonToday}>
      <div className="streak-block">
        <h3>{props.userName}</h3>
        <p>Streak: {streak}</p>
      </div>
    </FireBlock>
  );
};
