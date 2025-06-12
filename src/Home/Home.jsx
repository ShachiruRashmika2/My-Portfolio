import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";

import MainGrid1 from "../Components/MainGrid1";
import MainGrid2 from "../Components/MainGrid2";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <MainGrid1 />
      <MainGrid2 />
    </Box>
  );
};

export default Home;
