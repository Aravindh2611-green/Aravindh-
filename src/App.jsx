// src/App.jsx
import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import getTheme from "./theme";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function App() {
  const [mode, setMode] = useState("light");
  const [primaryColor, setPrimaryColor] = useState("#1976d2");
  const theme = useMemo(() => getTheme(mode, primaryColor), [mode, primaryColor]);

  const toggleDarkMode = () => setMode((p) => (p === "light" ? "dark" : "light"));
  const changeNavbarColor = (hex) => setPrimaryColor(hex);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout toggleDarkMode={toggleDarkMode} changeNavbarColor={changeNavbarColor} mode={mode} navbarColor={primaryColor}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

