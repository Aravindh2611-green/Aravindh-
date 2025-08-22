// src/components/Layout.jsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Container from "@mui/material/Container";

export default function Layout({ children, toggleDarkMode, changeNavbarColor, mode, navbarColor }) {
  return (
    <>
      <Navbar toggleDarkMode={toggleDarkMode} changeNavbarColor={changeNavbarColor} mode={mode} navbarColor={navbarColor} />
      <Container maxWidth="lg" sx={{ minHeight: "78vh", py: 4 }}>
        {children}
      </Container>
      <Footer />
    </>
  );
}


