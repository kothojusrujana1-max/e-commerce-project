import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

import { useSelector } from "react-redux";

import MenuIcon from "@mui/icons-material/Menu";

function UserNav() {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const cartItems = useSelector((state) => state.cart.cart);

  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(to right, #04090B, #DEC5B1)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
      }}
    >
      <Toolbar>


        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            letterSpacing: "1px",
            color: "#fff"
          }}
        >
          MyStore
        </Typography>


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
            to="/userDashboard"
            sx={{
              color: "#04090B",
              fontWeight: "bold"
            }}
          >
            Home
          </Button>

          <Button
            onClick={() => navigate("/userDashboard/wishlist")}
            sx={{
              color: "#04090B",
              fontWeight: "bold",
            }}
          >
            ❤️ Wishlist
          </Button>

          <Button
            onClick={() => navigate("/userDashboard/cart")}
            sx={{
              color: "#04090B",
              fontWeight: "bold"
            }}
          >
            🛒 Cart ({cartItems.length})
          </Button>
        </Box>


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
              onClick={() => {
                navigate("/userDashboard");
                closeMenu();
              }}
            >
              Home
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/userDashboard/wishlist");
                closeMenu();
              }}
            >
              ❤️ Wishlist
            </MenuItem>

            <MenuItem
              onClick={() => {
                navigate("/userDashboard/cart");
                closeMenu();
              }}
            >
              🛒 Cart ({cartItems.length})
            </MenuItem>

          </Menu>
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default UserNav;