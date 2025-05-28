import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import Face from "../assets/Images/Me (2).png";
import Terminal from "./Terminal";
import { lightBlue, purple } from "@mui/material/colors";
import curcuit from "../assets/Images/Asset 1.png";
import DeleteIcon from "@mui/icons-material/Delete";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
const MainGrid_1_1 = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        height: { xs: "auto", md: "80vh" },
        width: "100%",
        px: "2%",
        opacity: 0,
        display: "flex",
        perspective: "1000px",
        alignItems: "center",
        justifyContent: "space-between",

        animation: "flipUp 2.5s ease-in-out forwards 1s",
        "@keyframes flipUp": {
          from: {
            opacity: 0,
            transform: "rotate3d(1, 0, 0, -60deg)",
          },
          to: {
            opacity: 1,
            transform: "rotate3d(1, 0, 0, 0deg)",
          },
        },
      }}
    >
      <Grid
        size={{ xs: 12, sm: 12, md: 3, lg: 3 }}
        order={{ xs: 2, sm: 2, md: 1, lg: 1 }}
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgb(15, 15, 15)",
          backgroundImage:
            "radial-gradient(at 50% 0%, hsla(0,0%,50%,0.49) -72px, transparent 85%)",

          overflow: "hidden",
          transform: {
            xs: "none",
            md: "rotate3d(0, 1, 0, 60deg)",
          },
          border: "solid 2px white",
          borderRadius: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 15, md: 30, lg: 50 },
            fontWeight: "800",
            color: "white",
            textAlign: "Center",

            display: "inline-block",
            overflow: "hidden",
            whiteSpace: "nowrap",

            fontFamily: "monospace",
            width: "0ch",
            animation: `
          typing 2.5s steps(9, end) forwards
        `,
            "@keyframes typing": {
              from: { width: "0ch" },
              to: { width: "9ch", borderColor: "transparent" },
            },
          }}
        >
          SHACHIRU
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 15, md: 30, lg: 50 },
            fontWeight: "800",
            color: "white",
            textAlign: "Center",
            my: 0.5,
            display: "inline-block",
            overflow: "hidden",
            whiteSpace: "nowrap",

            fontFamily: "monospace",
            width: "0ch",
            animation: `
          typing 2.5s steps(9, end) forwards 2.5s
          
        `,
            "@keyframes typing": {
              from: { width: "0ch" },
              to: { width: "9ch", borderColor: "transparent" },
            },
          }}
        >
          RASHMIKA
        </Typography>
        <Typography
          sx={{
            m: 0,

            fontSize: { xs: 15, md: 15, lg: 20 },
            fontWeight: "400",

            color: "white",
            textAlign: "center",
            display: "inline-block",
            overflow: "hidden",
            whiteSpace: "nowrap",

            fontFamily: "monospace",
            width: "0ch",
            animation: `
          typing2 2.5s steps(47, end) forwards 6s
        
        `,
            "@keyframes typing2": {
              from: { width: "0ch" },
              to: { width: "47ch" },
            },
          }}
        >
          Passionate about
          <br />
          crafting code <br />
          and clean designs
          <br />
          Tech Enthusiast
        </Typography>
        <Box
          sx={{
            bgcolor: "purple",
            position: "relative",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* First Typography */}
          <Typography
            sx={{
              position: "absolute",
              zIndex: 2,
              fontSize: { xs: 15, md: 35, lg: 45 },
              fontWeight: 900,
              color: "white",
              textAlign: "center",
              fontFamily: "monospace",
              whiteSpace: "nowrap",
              width: "0ch",
              overflow: "hidden",
              animation: `
        typing4 2.5s steps(9, end) infinite 7.5s
      
      `,
              "@keyframes typing4": {
                "0%": { width: "0ch" },
                "20%": { width: "9ch" },
                "40%": { width: "9ch" },
                "50%": { width: "0ch" },
                "70%": { width: "0ch" },
                "90%": { width: "0ch" },

                "100%": { width: "0ch" },
              },
            }}
          >
            {"<Coder />"}
          </Typography>

          <Typography
            sx={{
              position: "absolute",
              zIndex: 3,
              fontSize: { xs: 15, md: 35, lg: 45 },
              fontWeight: 900,

              textAlign: "center",
              fontFamily: "Montserrat, sans-serif",

              color: "transparent",
              WebkitTextFillColor: "transparent",
              whiteSpace: "nowrap",
              background:
                "linear-gradient(-45deg,rgb(61, 255, 7),rgb(255, 6, 6),rgb(0, 64, 255),rgb(0, 255, 196))",
              backgroundClip: "text",
              overflow: "hidden",
              animation: `
        typing5 2.5s  infinite 7.5s,hue-rotate-animation  2.5s linear infinite

      `,
              "@keyframes typing5": {
                "0%": { opacity: 0 },
                "20%": { opacity: 0 },
                "40%": { opacity: 0 },
                "50%": { opacity: 0 },
                "60%": { opacity: 0.2 },

                "80%": { opacity: 1 },

                "100%": { opacity: 0 },
              },
            }}
          >
            Designer
          </Typography>
        </Box>
      </Grid>

      <Grid
        size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
        order={{ xs: 1, sm: 1, md: 2, lg: 2 }}
        sx={{
          p: 5,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          backgroundColor: "rgb(15, 15, 15)",
          backgroundImage:
            "radial-gradient(at 100% 100%, hsla(0,0%,33%,0.49) 0px, transparent 30%),radial-gradient(at 0% 0%, hsla(0,0%,33%,0.49) 0px, transparent 30%)",
          transform: "rotate3d(1,0 , 0, 6deg)",
          borderRadius: "40px",
          border: "solid 2px white",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            m: 2,
            p: 2,
            width: { md: 180, xs: 100, sm: 100 },
            height: { md: 80, xs: 40, sm: 40 },

            zIndex: 0,
          }}
        >
          <Typography
            variant={"h4"}
            sx={{
              color: "white",
              fontWeight: 900,
              fontSize: { xs: "1.5rem", sm: "1.5rem", md: "2.125rem" },
            }}
          >
            Hello There...
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            m: 2,
            width: { md: 180, xs: 100, sm: 100 },
            height: { md: 80, xs: 40, sm: 40 },
            zIndex: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button variant="contained">Connect</Button>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            m: 2,
            width: { md: 180, xs: 100, sm: 100 },
            height: { md: 80, xs: 40, sm: 40 },

            zIndex: 2,
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
            gap: { xs: 0.6, md: 2 },
          }}
        >
          <IconButton
            aria-label="fb"
            size="Large"
            sx={{
              backgroundColor: "rgb(15, 15, 15)",
              fontSize: { xs: 20, md: 24 },

              backgroundImage:
                "radial-gradient(at 50% 0%, hsla(0,0%,50%,0.49) -72px, transparent 85%)",
              color: "white",
            }}
          >
            <FacebookTwoToneIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            aria-label="fb"
            size="Large"
            sx={{
              backgroundColor: "rgb(15, 15, 15)",
              fontSize: { xs: 20, md: 24 },

              backgroundImage:
                "radial-gradient(at 50% 0%, hsla(0,0%,50%,0.49) -72px, transparent 85%)",
              color: "white",
            }}
          >
            <FacebookTwoToneIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            aria-label="fb"
            size="Large"
            sx={{
              backgroundColor: "rgb(15, 15, 15)",
              fontSize: { xs: 20, md: 24 },

              backgroundImage:
                "radial-gradient(at 50% 0%, hsla(0,0%,50%,0.49) -72px, transparent 85%)",
              color: "white",
            }}
          >
            <FacebookTwoToneIcon fontSize="inherit" />
          </IconButton>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            m: 2,
            width: { md: 180, xs: 100, sm: 100 },
            height: { md: 80, xs: 40, sm: 40 },

            zIndex: 2,
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
            gap: { xs: 0.6, md: 2 },
          }}
        >
          <IconButton
            aria-label="fb"
            size="Large"
            sx={{
              backgroundColor: "rgb(15, 15, 15)",
              fontSize: { xs: 20, md: 24 },

              backgroundImage:
                "radial-gradient(at 50% 0%, hsla(0,0%,50%,0.49) -72px, transparent 85%)",
              color: "white",
            }}
          >
            <FacebookTwoToneIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            aria-label="fb"
            size="Large"
            sx={{
              backgroundColor: "rgb(15, 15, 15)",
              fontSize: { xs: 20, md: 24 },

              backgroundImage:
                "radial-gradient(at 50% 0%, hsla(0,0%,50%,0.49) -72px, transparent 85%)",
              color: "white",
            }}
          >
            <FacebookTwoToneIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            aria-label="fb"
            size="Large"
            sx={{
              backgroundColor: "rgb(15, 15, 15)",
              fontSize: { xs: 20, md: 24 },

              backgroundImage:
                "radial-gradient(at 50% 0%, hsla(0,0%,50%,0.49) -72px, transparent 85%)",
              color: "white",
            }}
          >
            <FacebookTwoToneIcon fontSize="inherit" />
          </IconButton>
        </Box>
        <Box
          component="img"
          src={curcuit}
          alt="Background"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            opacity: 0.1,
            WebkitMaskImage:
              "radial-gradient(circle,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.49) 26%, rgba(255, 255, 255, 0) 100%);",
            maskImage:
              "radial-gradient(circle,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.49) 26%, rgba(255, 255, 255, 0) 100%);",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
          }}
        />
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
          <Box
            sx={{
              position: "absolute",
              width: "90%",
              height: { xs: "80%", sm: "107%", md: "107%" },
              background:
                "linear-gradient(-45deg,rgb(61, 255, 7),rgb(255, 6, 6),rgb(0, 64, 255),rgb(0, 255, 196))",
              clipPath:
                "polygon(37% 22%, 90% 20%, 107% 45%, 78% 100%, 6% 94%, 0% 42%, 17% 22%)",
              zIndex: 1,

              rotate: "-10deg",
              animation: "hue-rotate-animation  10s linear infinite",
            }}
          />

          <Box
            className="mask-box1"
            sx={{
              position: "absolute",
              width: "120%",
              height: "110%",
              borderTopLeftRadius: "50%",
              borderTopRightRadius: "50%",
              backgroundImage:
                "linear-gradient( 75.1deg,  rgba(34,126,34,1) 6%, rgba(99,226,17,1) 84.3% )",
              WebkitMaskImage: "linear-gradient(black, transparent)",
              maskImage: "linear-gradient(black, transparent)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
              zIndex: 0,
              rotate: "-30deg",
              animation: "rotate-animation  2s ease-in-out 4s",
              "@keyframes rotate-animation": {
                "0%": { transform: "rotate(-5deg)", scale: 1.05 },

                "100%": { transform: "rotate(0deg)", scale: 1 },
              },
            }}
          />

          <Box
            className="mask-box2"
            sx={{
              position: "absolute",
              width: "120%",
              height: "110%",
              borderTopLeftRadius: "50%",
              borderTopRightRadius: "50%",
              backgroundImage:
                "linear-gradient( 75.1deg,  rgb(0, 217, 255) 6%, rgb(17, 132, 226) 84.3% )",
              WebkitMaskImage: "linear-gradient(black, transparent)",
              maskImage: "linear-gradient(black, transparent)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
              zIndex: 0,
              rotate: "30deg",
              animation: "rotate-animation2  2s ease-in-out 4s",
              "@keyframes rotate-animation2": {
                "0%": { transform: "rotate(5deg)", scale: 1.05 },

                "100%": { transform: "rotate(0deg)", scale: 1 },
              },
            }}
          />

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
        size={{ xs: 12, sm: 12, md: 3, lg: 3 }}
        order={{ xs: 3, sm: 3, md: 3, lg: 3 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",

          transform: {
            xs: "none",
            md: "rotate3d(0, 1, 0, -60deg)",
          },
        }}
      >
        <Terminal />
      </Grid>
    </Grid>
  );
};

export default MainGrid_1_1;
