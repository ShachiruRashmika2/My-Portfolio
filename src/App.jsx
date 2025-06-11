import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//importing components

import Home from "./Home/Home";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ffd300",
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
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
