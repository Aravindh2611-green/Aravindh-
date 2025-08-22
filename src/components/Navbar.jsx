// src/components/Navbar.jsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Switch,
  Divider,
  Box,
  Tooltip // ✅ Added Tooltip
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CodeIcon from "@mui/icons-material/Code";
import DescriptionIcon from "@mui/icons-material/Description";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

export default function Navbar({
  toggleDarkMode,
  mode
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (e) => setAnchorEl(e.currentTarget);
  const closeMenu = () => setAnchorEl(null);

  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ color: "#39FF14", textDecoration: "none", flexGrow: 1 }}
        >
          <strong>Welcome To My Portfolio ✨</strong>
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, mr: 2 }}>
          <Tooltip title="Home">
            <IconButton component={Link} to="/" sx={{ color: "#39FF14" }}>
              <HomeIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="About">
            <IconButton component={Link} to="/about" sx={{ color: "#39FF14" }}>
              <InfoIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Skills">
            <IconButton component={Link} to="/skills" sx={{ color: "#39FF14" }}>
              <CodeIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Resume">
            <IconButton component={Link} to="/resume" sx={{ color: "#39FF14" }}>
              <DescriptionIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Contact">
            <IconButton component={Link} to="/contact" sx={{ color: "#39FF14" }}>
              <EmailIcon />
            </IconButton>
          </Tooltip>
        </Box>

        <IconButton color="inherit" onClick={openMenu}>
          <MenuIcon />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={closeMenu}
          keepMounted
        >
          <MenuItem component={Link} to="/" onClick={closeMenu}>
            Home
          </MenuItem>
          <MenuItem component={Link} to="/about" onClick={closeMenu}>
            About
          </MenuItem>
          <MenuItem component={Link} to="/skills" onClick={closeMenu}>
            Skills
          </MenuItem>
          <MenuItem component={Link} to="/resume" onClick={closeMenu}>
            Resume
          </MenuItem>
          <MenuItem component={Link} to="/contact" onClick={closeMenu}>
            Contact
          </MenuItem>

          <Divider />

          <MenuItem>
            Dark Mode
            <Switch
              checked={mode === "dark"}
              onChange={() => {
                toggleDarkMode();
              }}
            />
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}


