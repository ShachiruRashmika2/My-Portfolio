import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import { Link as RouterLink } from "react-router-dom";

const pages = [
  { name: "ME", path: "/" },
  { name: "Builds", path: "/builds" },
  { name: "Accolades", path: "#" },
  { name: "Tech-Deck", path: "/sep/map" },
  { name: "Connect", path: "/sep/map" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        height: {
          xs: 50,
          sm: 60,
          md: 70,
          lg: 80,
        },
        mx: 2,
        zIndex: 4,
        background: "transparent",
      }}
    >
      <Container maxWidth="xl" sx={{ height: "100%" }}>
        <Toolbar
          disableGutters
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 0,
          }}
        >
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
              PaperProps={{
                sx: {
                  background: " rgba(255, 196, 0, 0.248)",
                  backdropFilter: "blur(5.1px)",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography
                    component={RouterLink}
                    to={page.path}
                    sx={{
                      textAlign: "center",
                      textDecoration: "none",
                      color: "inherit",
                      "&:hover": {
                        color: "inherit",
                      },
                    }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
              justifyContent: "center",
              alignItems: "center",
              mr: 1,
              position: "absolute",
              left: 0,
              bgcolor: "lightblue",
            }}
          >
            <Box component="img" alt="logo" sx={{ width: "200px" }} />
          </Box>
          <Box
            className="main-bar-wrapper"
            sx={{
              position: "relative",
              zIndex: 1,

              height: "100%",
              display: { xs: "none", md: "flex" },
              "&::before, &::after": {},
              "&::before": {
                left: -20,
                content: '""',
                position: "absolute",
                top: 0,

                width: 20,
                display: { xs: "none", md: "block" },
                height: 20,
                bgcolor: "primary.main",

                zIndex: 0,
              },
              "&::after": {
                right: -143,
                content: '""',
                position: "absolute",
                top: 0,

                width: 143,
                display: { xs: "none", md: "block" },
                height: "80%",
                bgcolor: "primary.main",

                zIndex: 0,
              },
            }}
          >
            <Box
              className="main-bar"
              sx={{
                position: "relative",
                zIndex: 2,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                bgcolor: "primary.main",
                //boxShadow: " 0 0 15px rgba(255, 211, 0, 0.5)",
                borderBottomLeftRadius: 24,
                borderBottomRightRadius: "30px",
                px: 0,
                py: 0,

                height: "100%",
                overflow: "visible",

                "&::before": {
                  left: -24,
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,

                  content: '""',
                  position: "absolute",
                  width: 24,
                  height: 40,

                  backgroundColor: "rgb(0, 0, 0)",

                  backgroundBlendMode: "overlay, overlay",
                  display: { xs: "none", md: "block" },
                  top: 0,
                  zIndex: 1,
                },
                "&::after": {
                  right: -143,
                  borderTopLeftRadius: "100%",
                  borderBottomRightRadius: 0,
                  content: '""',
                  position: "absolute",
                  width: 144,
                  height: "80%",

                  backgroundColor: "rgb(0, 0, 0)",

                  backgroundBlendMode: "overlay, overlay",
                  display: { xs: "none", md: "block" },
                  top: 0,
                  zIndex: 1,
                },
              }}
            >
              {pages.map((page) => (
                <Button
                  variant="text"
                  component={RouterLink}
                  to={page.path}
                  color="primary"
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{
                    mx: 0,

                    fontSize: { md: 18 },
                    fontWeight: "600",
                    color: "black",

                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textTransform: "none",
                    textAlign: "center",
                    p: 2,
                    borderRadius: 0,
                    width: 150,
                    backgroundColor: "primary.main",

                    "&:first-child": {
                      borderRadius: "0 0 0 24px",
                    },
                    "&:last-child": {
                      borderRadius: "0 0 30px 0",
                    },

                    "&:hover": {
                      backgroundColor: "black",
                      color: "primary.main",
                      borderRadius: "0 0 30px 30px",
                      borderBottom: "1px solid",
                      borderLeft: "1px solid",
                      borderRight: "1px solid",
                      borderColor: "primary.main",
                      animation: "fade 0.6s ease",

                      backgroundImage:
                        "radial-gradient(at 50% 0%, hsla(59, 97.50%, 46.90%, 0.49) -72px, transparent 85%)",
                    },
                    "@keyframes fade": {
                      "0%": {
                        borderRadius: "30px 30px 0 0",
                      },
                      "100%": {
                        borderRadius: "0 0 30px 30px",
                      },
                    },
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", sm: "none", md: "none", lg: "flex" },
              justifyContent: "flex-end",
              position: "absolute",
              color: "primary.main",
              right: 0,
            }}
          >
            <IconButton aria-label="Mode" size="large" color="inherit">
              <DarkModeIcon fontSize="inherit" />
            </IconButton>

            <IconButton aria-label="profile" size="large" color="inherit">
              <Person2RoundedIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
