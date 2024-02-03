import { useLocalStorage } from "usehooks-ts";
import { Config } from "../entities/models";

export function useConfiguration() {
  const [config, setConfig] = useLocalStorage<Config>("config", {
    userNames: [],
  });
  const hasConfig = config.userNames.length > 0;

  return { hasConfig, config, setConfig };
}
