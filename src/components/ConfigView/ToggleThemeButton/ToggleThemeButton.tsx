import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { IconButton } from "@mui/material";
import { useDarkMode } from "usehooks-ts";

export const ToggleThemeButton = () => {
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <IconButton color="inherit" onClick={toggle}>
      {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};
