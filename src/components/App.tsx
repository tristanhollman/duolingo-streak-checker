import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useMuiThemeSelection } from "../hooks/useMuiThemeSelection";
import { BackgroundBeams } from "./AceternityUi";
import styles from "./App.module.less";
import { ConfigView } from "./ConfigView/ConfigView";
import { StreakView } from "./StreakView/StreakView";

const queryClient = new QueryClient();

export const App = () => {
  const { theme } = useMuiThemeSelection();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <ConfigView />
        <StreakView />
        <BackgroundBeams className={styles.backgroundBeams} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};
