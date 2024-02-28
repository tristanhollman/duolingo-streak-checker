import { motion } from "framer-motion";
import styles from "./BackgroundBoxes.module.less";

/**
 * BackgroundBoxes component from AceternityUi (modified).
 * @see https://ui.aceternity.com/components/background-boxes
 */
export const BackgroundBoxes = ({
  className,
  ...rest
}: {
  className?: string;
}) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  const colors = [
    "#93C5FD",
    "#FBB6CE",
    "#9AE6B4",
    "#FDE047",
    "#F87171",
    "#A78BFA",
    "#60A5FA",
    "#93C5FD",
    "#C084FC",
  ];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={`${styles.backgroundBoxes} ${className}`}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div key={`row` + i} className={styles.row}>
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `${getRandomColor()}`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className={styles.column}
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={styles.svg}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};
