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
          }}
        >
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              mr: 1,
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              flexGrow: 0,
            }}
          >
            <Box component={"img"} alt="logo" sx={{ width: "200px" }} />
          </Box>

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
              "&::before, &::after": {
                content: '""',
                position: "absolute",
                top: 0,
                width: 20,
                display: { xs: "none", md: "block" },
                height: 20,
                bgcolor: "white",
                zIndex: 0,
              },
              "&::before": {
                left: -20,
              },
              "&::after": {
                right: -20,
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
                bgcolor: "white",
                borderBottomLeftRadius: 24,
                borderBottomRightRadius: 24,
                px: 2,
                py: 1,
                height: "100%",
                overflow: "visible",

                "&::before, &::after": {
                  content: '""',
                  position: "absolute",
                  width: 40,
                  height: 40,

                  backgroundColor: "rgb(28, 28, 28)",
                  backgroundImage: `
      url("data:image/svg+xml,%3Csvg viewBox='0 0 1288 1288' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"),
      linear-gradient(to bottom, rgba(29, 29, 29, 0.8) 0%, rgba(10, 10, 10, 0.7) 100%)
    `,
                  backgroundBlendMode: "overlay, overlay",
                  display: { xs: "none", md: "block" },
                  top: 0,
                  zIndex: 1,
                },
                "&::before": {
                  left: -40,
                  borderTopRightRadius: 20,
                  borderBottomLeftRadius: 40,
                },
                "&::after": {
                  right: -40,
                  borderTopLeftRadius: 20,
                  borderBottomRightRadius: 40,
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
                    mx: 1,
                    display: "block",
                    fontSize: { md: 18 },
                    fontWeight: "600",
                    color: "text.primary",
                    textTransform: "none",
                    textAlign: "center",
                    p: 2,
                    borderRadius: 24,
                    width: 150,
                    "&:hover": { backgroundColor: "primary.main" },
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
            }}
          >
            <IconButton aria-label="Mode" size="large">
              <DarkModeIcon fontSize="inherit" />
            </IconButton>

            <IconButton aria-label="profile" size="large">
              <Person2RoundedIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
