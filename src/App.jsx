// src/App.jsx
import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import getTheme from "./theme";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import AICreativeStudio from "./pages/AICreativeStudio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const pageMetadata = {
  "/": ["Home", "Computer Science graduate with internship experience in full-stack development and artificial intelligence."],
  "/about": ["About", "Learn about Aravindh R.'s education, interests, and approach to software and AI."],
  "/skills": ["Skills", "A truthful overview of Aravindh R.'s programming fundamentals, AI exposure, and professional strengths."],
  "/experience": ["Experience", "Internship experience in full-stack development and artificial intelligence."],
  "/projects": ["Projects", "Selected software and AI projects, with local work and unverified details clearly identified."],
  "/ai-creative-studio": ["AI Creative Studio", "AI-generated visuals and storytelling videos created through creative AI workflows."],
  "/resume": ["Resume", "View or download Aravindh R.'s resume."],
  "/contact": ["Contact", "Contact Aravindh R. by email or send a message through the portfolio contact form."],
};

function PageMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const page = pageMetadata[pathname] || ["Page not found", "The page you requested could not be found."];
    document.title = `${page[0]} | Aravindh R.`;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", page[1]);
  }, [pathname]);

  return null;
}

export default function App() {
  const [mode, setMode] = useState("dark");
  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleDarkMode = () => setMode((p) => (p === "light" ? "dark" : "light"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <PageMetadata />
        <ScrollToTop />
        <Layout toggleDarkMode={toggleDarkMode} mode={mode}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/ai-creative-studio" element={<AICreativeStudio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

function NotFound() {
  return (
    <section className="not-found">
      <p className="eyebrow">404 · Page not found</p>
      <h1 className="page-title">That page isn't here.</h1>
      <p className="page-description" style={{ marginInline: "auto" }}>
        The link may be outdated, or the page may have moved.
      </p>
      <Link className="action-link primary" to="/">
        Back to home
      </Link>
    </section>
  );
}
