import { Theme, createTheme } from "@mui/material";
import { useMemo } from "react";
import { useLocalStorage } from "usehooks-ts";

const LOCAL_STORAGE_KEY = "theme";
const FANCY_COLOR = "#ff69b4";
type NamedTheme = Theme & { name: string };

export function useMuiThemeSelection() {
  // By default we're using the dark theme cause it's cool
  const [selectedTheme, setSelectedTheme] = useLocalStorage(
    LOCAL_STORAGE_KEY,
    "dark",
  );

  const theme = useMemo<NamedTheme>(() => {
    switch (selectedTheme) {
      case "dark":
        return darkTheme();
      case "fancy":
        return fancyTheme();
      case "light":
      default:
        return lightTheme();
    }
  }, [selectedTheme]);

  return { theme, setSelectedTheme };
}

const lightTheme = (): NamedTheme => {
  const theme = createTheme({
    palette: {
      mode: "light",
    },
  });
  return { ...theme, name: "light" };
};

const darkTheme = (): NamedTheme => {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return { ...theme, name: "dark" };
};

const fancyTheme = (): NamedTheme => {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: FANCY_COLOR,
      },
      secondary: {
        main: FANCY_COLOR,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ":root": {
            "--hotpinkGradient":
              "linear-gradient(135deg, rgb(255, 105, 180) 0%, rgb(246, 165, 254) 50%, rgb(255, 105, 180) 100%)",
            "@keyframes movingBackground": {
              "0%": {
                backgroundPosition: "0% 50%",
              },
              "50%": {
                backgroundPosition: "100% 50%",
              },
              "100%": {
                backgroundPosition: "0% 50%",
              },
            },
          },
          body: {
            background: "var(--hotpinkGradient)",
            backgroundSize: "200%",
            animation: "movingBackground 15s ease infinite",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            background: "var(--hotpinkGradient)",
            backgroundSize: "200%",
            animation: "movingBackground 15s ease infinite",
          },
        },
      },
    },
  });
  return { ...theme, name: "fancy" };
};
