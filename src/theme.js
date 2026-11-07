// src/theme.js
import { createTheme } from "@mui/material/styles";

const getTheme = (mode = "dark") => {
  const isDark = mode === "dark";
  const text = isDark ? "#f2f6f3" : "#1f2933";

  return createTheme({
    palette: {
      mode,
      primary: { main: isDark ? "#8bd3a2" : "#176b48" },
      background: {
        default: isDark ? "#0c110f" : "#f7f9f6",
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
