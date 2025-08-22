// src/pages/Skills.jsx
import React from "react";
import { Grid, Card, CardContent, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const skills = [
  { name: <strong>React</strong>, emoji: "⚛️" },
  { name: <strong>JavaScript</strong>, emoji: "🟨" },
  { name: <strong>HTML</strong>, emoji: "📄" },
  { name: <strong>Python</strong>, emoji: "🐍" },
];

export default function Skills() {
  const theme = useTheme();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Typography variant="h4" mb={2}>
        <strong>SKILLS</strong>
      </Typography>
      <Grid container spacing={2}>
        {skills.map((s) => (
          <Grid item xs={12} sm={6} md={3} key={s.name}>
            <Card
              sx={{
                height: "100%",
                backgroundColor:
                  theme.palette.mode === "dark" ? "#000" : "#f9f9f9", // Off-white in light mode
                color:
                  theme.palette.mode === "dark" ? "#39FF14" : "inherit",
                border:
                  theme.palette.mode === "dark"
                    ? "1px solid #39FF14"
                    : "1px solid #ddd",
                boxShadow:
                  theme.palette.mode === "dark"
                    ? "0 0 10px #39FF14, 0 0 20px #39FF14"
                    : "0px 4px 8px rgba(0,0,0,0.1)", // Soft shadow in light mode
                transition: "all 0.3s ease-in-out",
                padding: 2,
                margin: 2,
                borderRadius: 3,
              }}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {s.emoji} {s.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color:
                      theme.palette.mode === "dark"
                        ? "#39FF14"
                        : "text.secondary",
                  }}
                >
                  Comfortable building SPAs, components, and small libs.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
}
