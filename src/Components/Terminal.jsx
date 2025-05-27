import React from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";

const blink = keyframes`
  0%, 40% { opacity: 0; }
  50%, 90% { opacity: 1; }
  100% { opacity: 0; }
`;

const type = keyframes`
  to { width: 17em; }
`;

const TerminalLine = ({ text, color, delay, cursorDelay, infiniteCursor }) => (
  <Box
    sx={{
      display: "flex",
      color,
      fontFamily: "monospace",
      fontSize: "1.25em",
      whiteSpace: "nowrap",
      overflow: "hidden",
      width: 0,
      animation: `${type} 0.5s ${delay}s steps(20, end) forwards`,
    }}
  >
    {text}
    <Box
      component="span"
      sx={{
        color: "#fff",
        fontWeight: "bold",
        animation: `${blink} 1s ${cursorDelay}s ${
          infiniteCursor ? "infinite" : 2
        } forwards`,
      }}
    >
      _
    </Box>
  </Box>
);

const Terminal = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#272727",
        py: 2,
        px: 1,
        width: "100%",
        border: "solid 2px white",
        borderRadius: "20px",
      }}
    >
      {/* Menu bar */}
      <Box
        sx={{
          width: "100%",
          height: 25,
          backgroundColor: "#bbb",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
          mx: "auto",
          display: "flex",
          alignItems: "center",
          pl: 1,
        }}
      >
        <Box
          sx={{
            height: 10,
            width: 10,
            borderRadius: "50%",
            backgroundColor: "#ff3b47",
            border: "1px solid #9d252b",
            mr: "5px",
          }}
        />
        <Box
          sx={{
            height: 10,
            width: 10,
            borderRadius: "50%",
            backgroundColor: "#ffc100",
            border: "1px solid #9d802c",
            mr: "5px",
          }}
        />
        <Box
          sx={{
            height: 10,
            width: 10,
            borderRadius: "50%",
            backgroundColor: "#00d742",
            border: "1px solid #049931",
          }}
        />
      </Box>

      {/* Terminal screen */}
      <Box
        sx={{
          backgroundColor: "#151515",
          width: "100%",
          height: 300,
          mx: "auto",
          px: 3,
          py: 2,
          borderBottomLeftRadius: "5px",
          borderBottomRightRadius: "5px",
        }}
      >
        <TerminalLine
          text="$ yo gulp-webapp"
          color="#9CD9F0"
          delay={1}
          cursorDelay={2}
        />
        <TerminalLine
          text="Out of the box I include HTML5 Boilerplate, jQuery, and a gulpfile.js to build your app."
          color="#CDEE69"
          delay={4.25}
          cursorDelay={5.25}
        />
        <TerminalLine
          text="[?] What more would you like? (Press space to select)"
          color="#E09690"
          delay={7.5}
          cursorDelay={8.5}
        />
        <TerminalLine
          text=">"
          color="#fff"
          delay={10.75}
          cursorDelay={11.5}
          infiniteCursor
        />
      </Box>
    </Box>
  );
};

export default Terminal;
