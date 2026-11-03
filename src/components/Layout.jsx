// src/components/Layout.jsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, toggleDarkMode, mode }) {
  return (
    <div className="app-shell" data-theme={mode}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar toggleDarkMode={toggleDarkMode} mode={mode} />
      <main id="main-content" className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
