import { useLocalStorage } from "usehooks-ts";
import { Config, ConfigDto } from "../entities/models";

export function useConfiguration() {
  const [dto, persistConfigDto] = useLocalStorage<ConfigDto>("config", {
    userNames: [],
  });

  const persistConfig = (config: Config) => {
    persistConfigDto({ userNames: config.userNames });
  };

  const config = new Config(dto);

  return { config, persistConfig };
}
