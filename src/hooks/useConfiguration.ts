import { useLocalStorage } from "usehooks-ts";
import { Config, ConfigDto } from "../entities/models";

export function useConfiguration() {
  const legacyConfig = localStorage.getItem("config");
  const [dto, persistConfigDto] = useLocalStorage<ConfigDto>(
    "duoling-streak-checker-config",
    legacyConfig
      ? JSON.parse(legacyConfig)
      : {
          userNames: [],
        },
  );

  const persistConfig = (config: Config) => {
    persistConfigDto({ userNames: config.userNames });
  };

  const config = new Config(dto);

  return { config, persistConfig };
}
