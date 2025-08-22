// src/theme.js
import { createTheme } from "@mui/material/styles";

const getTheme = (mode = "light", primaryColor = "#1976d2") =>
  createTheme({
    palette: {
      mode,
      primary: { main: primaryColor },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    },
  });

export default getTheme;
