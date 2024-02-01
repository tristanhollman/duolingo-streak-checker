import { useLocalStorage } from "usehooks-ts";
import { Config } from "../entities/config";

export function useConfiguration() {
  const [config, setConfig] = useLocalStorage<Config>("config", {
    userName: "",
  });
  const hasConfig = config.userName !== "";

  return { hasConfig, config, setConfig };
}
