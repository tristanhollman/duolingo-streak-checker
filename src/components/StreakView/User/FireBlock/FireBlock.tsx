import "./FireBlock.less";

type FireBlockProps = {
  children?: React.ReactNode;
  enabled: boolean;
};

export const FireBlock = (props: FireBlockProps) => {
  return (
    <>
      <div className={`fire-block ${props.enabled ? "enabled" : ""}`}>
        <div className="content">{props.children}</div>
      </div>
      <svg>
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
    </>
  );
};
