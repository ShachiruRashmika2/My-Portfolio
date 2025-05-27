import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../Styles/Layout.css";
const Layout = () => {
  return (
    <Box
      className="layout"
      sx={{
        alignItems: "center",
        px: 2,

        width: "100%",
        borderRadius: { xs: "10px", sm: "10px", md: "20px" },
        backgroundColor: "rgb(28, 28, 28)",
        backgroundImage: `
      url("data:image/svg+xml,%3Csvg viewBox='0 0 1288 1288' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"),
      linear-gradient(to bottom, rgba(29, 29, 29, 0.8) 0%, rgba(30, 30, 30, 0.8) 20%, rgba(31, 31, 31, 0.03) 40%, hsla(191, 47%, 17%, 0.02) 60%, rgba(20, 20, 20, 0.3) 80%, rgba(10, 10, 10, 0.7) 100%)
    `,
        backgroundBlendMode: "overlay, overlay",
        backgroundSize: "contain",
        backgroundRepeat: "repeat",
      }}
    >
      <Navbar />

      <Outlet />
    </Box>
  );
};

export default Layout;
