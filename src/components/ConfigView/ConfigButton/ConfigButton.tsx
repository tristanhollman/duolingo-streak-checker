import SettingsIcon from "@mui/icons-material/Settings";
import { IconButton } from "@mui/material";
import "./ConfigButton.less";

type ConfigButtonProps = {
  callback: () => void;
};
export const ConfigButton = (props: ConfigButtonProps) => {
  return (
    <div className="config-button">
      <IconButton size="large" onClick={() => props.callback()}>
        <SettingsIcon />
      </IconButton>
    </div>
  );
};
