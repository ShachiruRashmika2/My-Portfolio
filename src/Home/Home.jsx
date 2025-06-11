import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";

import MainGrid1 from "../Components/MainGrid1";
import useAOS from "../Utils/AOS";

const Home = () => {
  useAOS();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <MainGrid1 />
    </Box>
  );
};

export default Home;
