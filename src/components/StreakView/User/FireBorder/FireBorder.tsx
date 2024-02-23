import styles from "./FireBorder.module.less";

type FireBorderProps = {
  children?: React.ReactNode;
  enabled: boolean;
};

export const FireBorder = (props: FireBorderProps) => {
  return (
    <>
      <div
        className={`${styles.fireBorder} ${props.enabled && styles.enabled}`}
      >
        <div className={styles.content}>{props.children}</div>
        <svg className={styles.filterSvg}>
          <filter id="wavy">
            <feTurbulence
              type="turbulence"
              x="0"
              y="0"
              baseFrequency="0.009"
              numOctaves="5"
              speed="2"
            >
              <animate
                attributeName="baseFrequency"
                dur="60s"
                values="0.02; 0.005; 0.02"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="30" />
          </filter>
        </svg>
      </div>
    </>
  );
};
