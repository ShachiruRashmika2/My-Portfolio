import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
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
      fontSize: "1.2em",
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
  const [command, setCommand] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResponse, setShowResponse] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (command.trim()) {
        console.log("Submitted command:", command);
        setCommand("");
        setTimeout(() => {
          setLoading(false);
          setShowResponse(true);
        }, 2000);
      }
    }
  };

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
        {/* Circles */}
        {["#ff3b47", "#ffc100", "#00d742"].map((bg, i) => (
          <Box
            key={i}
            sx={{
              height: 10,
              width: 10,
              borderRadius: "50%",
              backgroundColor: bg,
              border: "1px solid rgba(0,0,0,0.3)",
              mr: "5px",
            }}
          />
        ))}
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
          text="S C:\projects\portfolio> type about-me.txt"
          color="#9CD9F0"
          delay={1}
          cursorDelay={2}
        />
        <TerminalLine
          text="Hi, I'm a Full Stack Developer 👋"
          color="#CDEE69"
          delay={4.25}
          cursorDelay={5.25}
        />
        <TerminalLine
          text="🚀 Specializing in React "
          color="#CDEE69"
          delay={5.25}
          cursorDelay={5.25}
        />
        <TerminalLine
          text="    , Node.js, MongoDB"
          color="#CDEE69"
          delay={5.25}
          cursorDelay={6.25}
        />
        <TerminalLine
          text="🧠 Passionate about AI, ML,"
          color="#CDEE69"
          delay={7.25}
          cursorDelay={5.25}
        />
        <TerminalLine
          text="    and clean design"
          color="#CDEE69"
          delay={8.25}
          cursorDelay={5.25}
        />
        <TerminalLine
          text="🎯 Building fast, modern,"
          color="#CDEE69"
          delay={9.25}
          cursorDelay={5.25}
        />
        <TerminalLine
          text="   and user-friendly web apps"
          color="#CDEE69"
          delay={10.25}
          cursorDelay={5.25}
        />
        <TerminalLine
          text="To connect with me, enter 'SR run dev'"
          color="#E09690"
          delay={12.5}
          cursorDelay={8.5}
        />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0,
            mt: 1,
          }}
        >
          <TerminalLine
            text=">"
            color="#fff"
            delay={13.5}
            cursorDelay={11.5}
            infiniteCursor
          />
          <TextField
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            variant="standard"
            InputProps={{
              disableUnderline: true,
              style: {
                color: "#fff",
                backgroundColor: "transparent",
                fontFamily: "monospace",
                whiteSpace: "normal",
              },
            }}
            sx={{
              border: "none",
              backgroundColor: "transparent",
              whiteSpace: "normal",
              width: "100%",
              minWidth: "250px",
            }}
            autoFocus
          />
        </Box>
        {showResponse && !loading && (
          <Box sx={{ color: "#00d742", fontFamily: "monospace", mt: 2 }}>
            ✅ Opening contact tools...
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Terminal;
