import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useMemo } from "react";
import { useDarkMode } from "usehooks-ts";
import { ConfigView } from "./ConfigView/ConfigView";
import { StreakView } from "./StreakView/StreakView";

const queryClient = new QueryClient();

export const App = () => {
  const { isDarkMode } = useDarkMode();

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode: isDarkMode ? "dark" : "light",
      },
    });
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <ConfigView />
        <StreakView />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};
