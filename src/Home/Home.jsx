import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import MainGrid_1 from "../Components/MainGrid_1";
import MainGrid_1_1 from "../Components/MainGrid_1-1";
import useAOS from "../Utils/AOS";

const Home = () => {
  useAOS();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
      }}
    >
      <MainGrid_1_1 />
    </Box>
  );
};

export default Home;
