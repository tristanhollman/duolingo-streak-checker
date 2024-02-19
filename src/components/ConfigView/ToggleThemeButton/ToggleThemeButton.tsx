import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import LooksIcon from "@mui/icons-material/Looks";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useMuiThemeSelection } from "../../../hooks/useMuiThemeSelection";

export const ToggleThemeButton = () => {
  const { theme, setSelectedTheme } = useMuiThemeSelection();

  const handleThemeChange = (
    _event: React.MouseEvent<HTMLElement>,
    newTheme: string,
  ) => {
    setSelectedTheme(newTheme);
  };

  return (
    <ToggleButtonGroup
      value={theme.name}
      exclusive
      onChange={handleThemeChange}
      aria-label="theme selection"
    >
      <ToggleButton value="light" aria-label="light theme">
        <Brightness4Icon />
      </ToggleButton>
      <ToggleButton value="dark" aria-label="dark theme">
        <Brightness7Icon />
      </ToggleButton>
      <ToggleButton value="fancy" aria-label="fancy theme">
        <LooksIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
