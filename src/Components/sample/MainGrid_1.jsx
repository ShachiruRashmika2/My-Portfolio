import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Face from "../assets/Images/Me (2).png";
const MainGrid_1 = () => {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        px: "2%",
        width: "100%",
        height: { xs: "auto", sm: "80vh", md: "80vh" },
        display: "flex",

        alignItems: "center",
        justifyContent: "space-between",
      }}
      data-aos="fade-up"
    >
      <Grid
        size={6}
        sx={{
          p: 5,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            width: { xs: 100, sm: 250, md: 320 },
            height: { xs: 120, sm: 280, md: 400 },
            overflow: "visible",
            position: "relative",
          }}
        >
          {/* Colored box that clips to image shape */}
          <Box
            sx={{
              position: "absolute",
              width: "90%",
              height: { xs: "80%", sm: "107%", md: "107%" },
              background:
                "linear-gradient(-45deg,rgb(61, 255, 7),rgb(255, 6, 102),rgb(0, 64, 255),rgb(0, 255, 196))",
              clipPath:
                "polygon(37% 22%, 90% 20%, 107% 45%, 78% 100%, 6% 94%, 0% 42%, 17% 22%)",
              zIndex: 1,

              rotate: "-10deg",
              animation: "hue-rotate-animation  10s linear infinite",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              width: "120%",
              height: "110%",
              borderTopLeftRadius: "50%",
              borderTopRightRadius: "20%",
              bgcolor: "#242424",
              WebkitMaskImage: "linear-gradient(black, transparent)",
              maskImage: "linear-gradient(black, transparent)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
              zIndex: 0,
            }}
          />

          {/* Image over the colored box */}
          <Box
            component={"img"}
            src={Face}
            alt="Face"
            sx={{
              position: "absolute",
              width: "110%",
              height: "auto",
              objectFit: "cover",
              zIndex: 3,
              filter: `
      drop-shadow(0px 50px 100px rgba(50, 50, 93, 0.25)) 
      drop-shadow(0px 30px 60px rgba(0, 0, 0, 0.3))
    `,
            }}
          />
        </Box>
      </Grid>
      <Grid
        size={6}
        sx={{
          p: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 15, md: 30, lg: 50 },
            fontWeight: "800",
            color: "text.primary",
            textAlign: "left",
            my: 0.5,
            display: "inline-block",
            overflow: "hidden",
            whiteSpace: "nowrap",
            borderRight: "2px solid black",
            fontFamily: "monospace",
            width: "0ch",
            animation: `
          typing 2.5s steps(18, end) forwards,
          blink 0.75s step-end infinite
        `,
            "@keyframes typing": {
              from: { width: "0ch" },
              to: { width: "18ch", borderColor: "transparent" },
            },
            "@keyframes blink": {
              "50%": { borderColor: "transparent" },
            },
          }}
        >
          Shachiru Rashmika
        </Typography>
        <Typography
          sx={{
            m: 0,

            fontSize: { xs: 15, md: 15, lg: 20 },
            fontWeight: "400",

            color: "text.primary",
            textAlign: "left",
            display: "inline-block",
            overflow: "hidden",
            whiteSpace: "nowrap",

            fontFamily: "monospace",
            width: "0ch",
            animation: `
          typing2 2.5s steps(47, end) forwards 3s,
          blink1 0.75s step-end 
        `,
            "@keyframes typing2": {
              from: { width: "0ch" },
              to: { width: "47ch" },
            },
          }}
        >
          Passionate about crafting code and clean designs
        </Typography>
        <Typography
          sx={{
            m: 0,

            fontSize: { xs: 15, md: 15, lg: 20 },
            fontWeight: "400",

            color: "text.primary",
            textAlign: "left",
            display: "inline-block",
            overflow: "hidden",
            whiteSpace: "nowrap",

            fontFamily: "monospace",
            width: "0ch",
            animation: `
          typing3 2.5s steps(47, end) forwards 6s,
          blink1 0.75s step-end 
        `,
            "@keyframes typing3": {
              from: { width: "0ch" },
              to: { width: "47ch" },
            },
          }}
        >
          Tech Enthusiast
        </Typography>

        <Typography
          sx={{
            m: 0,
            my: 1,

            fontSize: { xs: 15, md: 35, lg: 45 },
            fontWeight: "900",

            color: "text.primary",
            textAlign: "left",
            display: "inline-block",
            overflow: "hidden",
            whiteSpace: "nowrap",

            fontFamily: "monospace",
            width: "0ch",
            animation: `
          typing4 2.5s steps(9, end) forwards 8.5s,
          blink1 0.75s step-end 
        `,
            "@keyframes typing4": {
              "0%": { width: "0ch" },
              "20%": { width: "9ch" },
              "40%": { width: "9ch" },
              "50%": { width: "0ch", display: "none" },
              "100%": { width: "0ch" },
            },
          }}
        >
          {"<Coder />"}
        </Typography>
        <Typography
          sx={{
            m: 0,
            my: 1,

            fontSize: { xs: 15, md: 35, lg: 45 },
            fontWeight: "900",

            color: "text.primary",
            textAlign: "left",
            display: "inline-block",
            overflow: "hidden",
            whiteSpace: "nowrap",

            fontFamily: "monospace",
            width: "0ch",
            animation: `
          typing5 2.5s steps(9, end) infinite 11.5s,
          blink1 0.75s step-end 
        `,
            "@keyframes typing5": {
              "0%": { width: "0ch" },
              "50%": { width: "9ch" },
              "100%": { width: "0ch", display: "none" },
            },
          }}
        >
          Designer
        </Typography>
      </Grid>
    </Grid>
  );
};

export default MainGrid_1;
