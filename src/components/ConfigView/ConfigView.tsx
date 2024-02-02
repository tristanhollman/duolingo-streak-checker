import { useState } from "react";
import { useConfiguration } from "../../hooks/useConfiguration";

export const ConfigView = () => {
  const { config, setConfig } = useConfiguration();
  const [newUserName, setUserName] = useState("");

  return (
    <div className="card">
      <ul>
        {config?.userNames.map((userName) => (
          <li key={userName}>{userName}</li>
        ))}
      </ul>
      <input
        value={newUserName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button
        onClick={() => {
          config.userNames.push(newUserName);
          console.log(config);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          setConfig(config);
        }}
      >
        Save
      </button>
    </div>
  );
};
