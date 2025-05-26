import { useState } from "react";
import { createTheme, ThemeProvider, Typography } from "@mui/material";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//importing components
import Layout from "./Layout/Layout";
import Home from "./Home/Home";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#dc004e",
      },
    },
    typography: {
      fontFamily: "Josefin Sans, sans-serif",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
