import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import MenuIcon from "@mui/icons-material/Menu";



function Navbar() {
  const location = useLocation();

  const isHome = location.pathname === "/";

  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  

  return (
    <AppBar
      position="static"
      sx={{
        background: isHome
          ? "linear-gradient(135deg, #092C44, #DEC5B1)"
          : "linear-gradient(135deg, #092C44, #DEC5B1)"
      }}
    >
      <Toolbar>

        {/* LOGO */}
        <Typography
          variant="h5"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            color: "#fff"
          }}
        >
          E-Commerce
        </Typography>

        {/* DESKTOP MENU */}
        <Box
          sx={{
            display: {
              xs: "none",
              md: "flex"
            }
          }}
        >
          <Button
            component={Link}
            to="/"
            sx={{ color: "#fff", fontWeight: "bold" }}
          >
            Home
          </Button>

          <Button
            component={Link}
            to="/login"
            sx={{ color: "#fff", fontWeight: "bold" }}
          >
            Login
          </Button>

          <Button
            component={Link}
            to="/register"
            sx={{ color: "#fff", fontWeight: "bold" }}
          >
            Register
          </Button>
        </Box>

        {/* MOBILE MENU */}
        <Box
          sx={{
            display: {
              xs: "block",
              md: "none"
            }
          }}
        >
          <IconButton onClick={openMenu}>
            <MenuIcon sx={{ color: "#fff" }} />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={closeMenu}
          >
            <MenuItem
              component={Link}
              to="/"
              onClick={closeMenu}
            >
              Home
            </MenuItem>

            <MenuItem
              component={Link}
              to="/login"
              onClick={closeMenu}
            >
              Login
            </MenuItem>

            <MenuItem
              component={Link}
              to="/register"
              onClick={closeMenu}
            >
              Register
            </MenuItem>
          </Menu>
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;