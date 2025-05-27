import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Layout = () => {
  return (
    <Box
      sx={{
        alignItems: "center",
        px: 2,
        bgcolor: "white",
        width: "100%",
        borderRadius: { xs: "10px", sm: "10px", md: "20px" },
      }}
    >
      <Navbar />

      <Outlet />
    </Box>
  );
};

export default Layout;
