// src/theme.js
import { createTheme } from "@mui/material/styles";

const getTheme = (mode = "dark") => {
  const isDark = mode === "dark";
  const text = isDark ? "#f2f6f3" : "#17231b";

  return createTheme({
    palette: {
      mode,
      primary: { main: isDark ? "#8bd3a2" : "#287c48" },
      background: {
        default: isDark ? "#0c110f" : "#f5f8f5",
        paper: isDark ? "#121916" : "#ffffff",
      },
      text: {
        primary: text,
        secondary: isDark ? "#a8b5ac" : "#526158",
      },
    },
    typography: {
      fontFamily: 'Inter, "Segoe UI", Arial, sans-serif',
    },
    shape: {
      borderRadius: 9,
    },
  });
};

export default getTheme;
