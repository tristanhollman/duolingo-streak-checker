import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  FANCY_COLORS_RGB,
  useMuiThemeSelection,
} from "../hooks/useMuiThemeSelection";
import { BackgroundBeams, BackgroundGradientAnimation } from "./AceternityUi";
import { ConfigView } from "./ConfigView/ConfigView";
import { StreakView } from "./StreakView/StreakView";
import { BackgroundBoxes } from "./AceternityUi/BackgroundBoxes/BackgroundBoxes";

const queryClient = new QueryClient();

export const App = () => {
  const { theme } = useMuiThemeSelection();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ThemedBackground />
      <QueryClientProvider client={queryClient}>
        <ConfigView />
        <StreakView />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

const ThemedBackground = () => {
  const { theme } = useMuiThemeSelection();

  switch (theme.name) {
    case "dark":
      return <BackgroundBeams />;
    case "fancy":
      return (
        <>
          <BackgroundGradientAnimation
            gradientBackgroundStart={`rgb(${FANCY_COLORS_RGB[0]})`}
            gradientBackgroundEnd={`rgb(${FANCY_COLORS_RGB[1]})`}
            firstColor={FANCY_COLORS_RGB[0]}
            secondColor={FANCY_COLORS_RGB[1]}
            thirdColor={FANCY_COLORS_RGB[2]}
            fourthColor={FANCY_COLORS_RGB[3]}
            fifthColor={FANCY_COLORS_RGB[4]}
          />
          <BackgroundBeams />
        </>
      );
    case "light":
    default:
      return (
        <>
          <BackgroundBeams />
          <BackgroundBoxes />
        </>
      );
  }
};
