// src/components/Footer.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "black",         // ✅ Black background
        color: "#39FF14",         // ✅ Radium green text
        py: 2,
        mt: 4,
        textAlign: "center"
      }}
    >
      <Typography>
        © {new Date().getFullYear()} My Portfolio • Built with ❤️ and React
      </Typography>
      <Typography variant="caption">
        Made with React, MUI, Formik & Framer Motion
      </Typography>
    </Box>
  );
}
