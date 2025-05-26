import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";

const Home = () => {
  return (
    <Container sx={{ mt: 8 }}>
      <Box textAlign="center">
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Hi, I'm a passionate developer. Explore my projects and skills below!
        </Typography>
        <Button variant="contained" color="primary" size="large">
          View Projects
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
