import SettingsIcon from "@mui/icons-material/Settings";
import { IconButton } from "@mui/material";
import styles from "./ConfigButton.module.less";

type ConfigButtonProps = {
  callback: () => void;
};
export const ConfigButton = (props: ConfigButtonProps) => {
  return (
    <div className={styles.configButton}>
      <IconButton size="large" onClick={() => props.callback()}>
        <SettingsIcon />
      </IconButton>
    </div>
  );
};
