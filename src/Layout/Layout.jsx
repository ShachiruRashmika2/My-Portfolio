import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../Styles/Layout.css";
import back from "../assets/Images/Ass55et 1.png";
import { useEffect, useState } from "react";

const Layout = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return loaded ? (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        px: 2,
        overflow: "hidden",
        borderRadius: { xs: "10px", sm: "10px", md: "20px" },
        backgroundColor: "rgb(28, 28, 28)",
        backgroundImage: `
      url("data:image/svg+xml,%3Csvg viewBox='0 0 1288 1288' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"),
      linear-gradient(to bottom, rgba(29, 29, 29, 0.8) 0%, rgba(30, 30, 30, 0.6) 20%, rgba(31, 31, 31, 0.03) 40%, hsla(191, 47%, 17%, 0.02) 60%, rgba(20, 20, 20, 0.3) 80%, rgba(10, 10, 10, 0.7) 100%)
    `,
        backgroundBlendMode: "overlay, overlay",
        backgroundSize: "contain, contain",
        backgroundRepeat: "repeat, repeat",

        display: "flex",
        flexDirection: "column",

        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${back})`,
          backgroundSize: "100% 100vh",
          backgroundRepeat: "repeat",
          backgroundPosition: "center top",
          opacity: 0.8,
          zIndex: 1,
          pointerEvents: "none",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.01) 0%, rgba(30, 30, 30, 0.08) 20%, rgba(31, 31, 31, 0.5) 40%, hsla(191, 47%, 17%, 0.8) 60%, rgba(20, 20, 20, 0.6) 80%, rgba(10, 10, 10, 0.01) 100%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.01) 0%, rgba(30, 30, 30, 0.08) 20%, rgba(31, 31, 31, 0.5) 40%, hsla(191, 47%, 17%, 0.8) 60%, rgba(20, 20, 20, 0.6) 80%, rgba(10, 10, 10, 0.01) 100%)",
          WebkitMaskRepeat: "repeat",
          maskRepeat: "repeat",
          WebkitMaskSize: "100% 100vh",
          maskSize: "100% 100vh",
          animation: "hue-rotate-animation  10s linear infinite",
        },

        "& > *": {
          position: "relative",
          zIndex: 2,
        },
      }}
    >
      <Navbar />

      <Outlet />
    </Box>
  ) : (
    <Box className="loader" />
  );
};

export default Layout;
