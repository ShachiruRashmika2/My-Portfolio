import { Box, Button, Grid, Typography } from "@mui/material";
import Navbar from "./sample/Navbar";
import Middle from "../assets/Images/ChatGPT Image Jun 11, 2025, 10_27_03 AM.png";
import Left from "../assets/Images/generate this one fu.png";
import Right from "../assets/Images/replace human with a1.png";

const MainGrid1 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 0,
        m: 0,
        width: "100%",
        height: "98vh",
        backgroundColor: "#000000",
        borderRadius: "20px",
      }}
    >
      <Navbar />
      <Grid
        container
        spacing={3}
        sx={{
          height: { xs: "auto", sm: "auto", md: "85vh" },
          width: { xs: "auto", sm: "auto", md: "98%" },

          px: "2%",

          mt: 2,

          opacity: 1,
          display: "flex",

          perspective: "1000px",
          alignItems: "flex-start",
          justifyContent: "space-between",
          position: "relative",
          transform: "translate3d(0,0,-200px)",

          "@keyframes blink2": {
            "0%": {
              bgcolor: "black",
              boxShadow: "none",
            },
            "78%": {
              bgcolor: "inherit",
              boxShadow: " 0 0 15px 2px rgba(255, 211, 0, 0.5)",
            },
            "79%": {
              bgcolor: "primary.main",
            },
            "80%": {
              boxShadow: "none",
            },
            "81%": {
              bgcolor: "inherit",
              boxShadow: " 0 0 15px 2px rgba(255, 211, 0, 0.5)",
            },
            "82%": {
              bgcolor: "primary.main",

              boxShadow: "none",
            },
            "83%": {
              bgcolor: "inherit",
              boxShadow: " 0 0 15px 2px rgba(255, 211, 0, 0.5)",
            },
            " 92%": {
              bgcolor: "primary.main",
              boxShadow: "none",
            },
            "92.5% ": {
              bgcolor: "inherit",

              boxShadow: "inherit",
            },
            "93%": {
              bgcolor: "primary.main",
              boxShadow: " 0 0 15px 2px rgba(255, 211, 0, 0.5)",
            },
            "100%": {
              bgcolor: "primary.main",
              boxShadow: " 0 0 15px 2px rgba(255, 211, 0, 0.5)",
            },
          },

          "@keyframes blink3": {
            "0%": {
              bgcolor: "black",
            },
            "78%": {
              bgcolor: "inherit",
            },
            "79%": {
              bgcolor: "rgba(255, 213, 0, 0.4)",
            },
            "80%": {
              boxShadow: "none",
            },
            "81%": {
              bgcolor: "inherit",
            },
            "82%": {
              bgcolor: "rgba(255, 213, 0, 0.4)",
            },
            "83%": {
              bgcolor: "inherit",
            },
            " 92%": {
              bgcolor: "rgba(255, 213, 0, 0.4)",
              boxShadow: "none",
            },
            "92.5% ": {
              bgcolor: "inherit",
            },
            "93%": {
              bgcolor: "rgba(255, 213, 0, 0.4)",
            },
            "100%": {
              bgcolor: "rgba(255, 213, 0, 0.4)",
            },
          },
          "@keyframes blinkImg": {
            "0%": {
              opacity: 0,
            },
            "78%": {
              opacity: 0,
            },
            "79%": {
              opacity: 0.4,
            },
            "80%": {
              opacity: 0,
            },
            "81%": {
              opacity: 0,
            },
            "82%": {
              opacity: 0.4,
            },
            "83%": {
              opacity: 0,
            },
            " 92%": {
              opacity: 0.8,
            },
            "92.5% ": {
              opacity: 0,
            },
            "93%": {
              opacity: 0.8,
            },
            "100%": {
              opacity: 1,
            },
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            width: "2%",
            height: "100%",
            alignItems: "center",

            left: 0,
            zIndex: 6,

            overflow: "hidden",
          }}
        >
          <Typography
            sx={{
              writingMode: "vertical-lr",
              textOrientation: "sideways",
              opacity: 0,
              transform: "rotate(180deg)",
              fontSize: "1rem",
              fontWeight: "bold",
              wordSpacing: "0.5rem",
              letterSpacing: "0.2rem",
              textTransform: "uppercase",
              color: "primary.main",
              animation: "blinkImg 3s linear forwards 5.2s",
            }}
          >
            Coder | Developer | Designer
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "2%",
            height: "100%",

            right: 0,
            zIndex: 6,
            flexDirection: "column",
            animation: "blinkImg 3s linear forwards 5.2s",
            opacity: 0,

            overflow: "hidden",
          }}
        >
          <Typography
            sx={{
              writingMode: "vertical-lr",
              textOrientation: "upright",

              transform: "rotate(0deg)",
              fontSize: "1rem",
              fontWeight: "bold",
              wordSpacing: "0.5rem",
              letterSpacing: "1rem",
              textTransform: "uppercase",
              color: "primary.main",
            }}
          >
            Find Out
          </Typography>
          <Button
            variant="contained"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "transparent",

              p: 2,
              fontSize: "1.5rem",
              color: "primary.main",
              animation: "bounce 2s ease-in-out infinite",
              borderRadius: "100%",
            }}
          >
            ↓
          </Button>
        </Box>
        <Grid
          size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
          sx={{
            position: "absolute",
            top: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            left: 0,
            width: "100%",
            height: "10%",

            zIndex: -1,
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              zIndex: 2,
              bottom: -20,
              opacity: 0,
              fontSize: { xs: "2rem", sm: "2rem", md: "2rem" },
              fontWeight: "bold",
              color: "primary.main",
              textAlign: "center",
              textTransform: "uppercase",

              animation: "fadein 2s ease forwards 3.2s",
              "@keyframes fadein": {
                "0%": {
                  opacity: 0,
                  bottom: -200,
                },

                "100%": {
                  opacity: 1,
                  bottom: 0,
                },
              },
            }}
          >
            Hello &nbsp; i'm
          </Typography>
        </Grid>
        <Grid
          size={4}
          sx={{
            p: 2,
            mt: 4,
            display: "flex",
            flexDirection: "column",
            height: "80%",
            alignItems: "center",
            transform: "translate3d(0,0,-340px) rotate3d(0, 1, 0, -10deg)",
            justifyContent: "center",

            animation: "blink2 3s linear forwards",

            position: "relative",

            transformStyle: "preserve-3d",
            backgroundColor: "black",
            "&:before": {
              position: "absolute",
              content: '""',
              width: "118%",
              height: "80%",
              filter: "blur(20px)",
              animation: "blink3 3s linear forwards",

              maskImage:
                "linear-gradient(90deg,rgba(255, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 45%, rgba(0, 0, 0, 0.75) 55%, rgba(99, 255, 15, 0) 100%)",

              transform:
                "rotate3d(1, 0, 0, 90deg) translate3d(-170px, -60px, -336px)",
            },
          }}
        >
          <Box
            component="img"
            src={Left}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              width: "100%",
              filter: "drop-shadow(32px 0px 12px  rgba(0, 0, 0, 0.5))",
              overflow: "visible",
              position: "relative",
              animation: "blinkImg 3s linear forwards",
              zIndex: 4,
              transform: "translate3d(-53px, 40px, 0px) ",
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: "2rem", sm: "3rem", md: "20rem" },
              fontWeight: "bold",
              color: "primary.Text",
              position: "absolute",
              zIndex: 2,
              textAlign: "center",
              textTransform: "uppercase",
              textShadow: "0 0 10px rgba(255, 213, 0, 0.81)",
              animation: "blink 3s linear forwards 4.2s",

              opacity: 0,
            }}
          >
            SH&nbsp;&nbsp;&nbsp;&nbsp;
          </Typography>
        </Grid>
        <Grid
          size={4}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
            display: "flex",
            animation: "blink2 3s linear forwards",

            backgroundColor: "black",
            transform: "translate3d(0,0,-290px)",

            height: "80%",

            position: "relative",

            transformStyle: "preserve-3d",
            cursor: "pointer",
            "&:before": {
              position: "absolute",
              content: '""',
              width: "118%",
              height: "100%",
              filter: "blur(20px)",
              animation: "blink3 3s linear forwards",
              maskImage:
                "linear-gradient(90deg,rgba(255, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 45%,rgba(0, 0, 0, 0.75) 55%, rgba(99, 255, 15, 0) 100%)",
              transform: "rotate3d(1, 0, 0, 90deg) translate3d(0,0,-320px)",
            },
          }}
        >
          <Box
            component="img"
            src={Middle}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              width: "90%",
              filter: "drop-shadow(32px 0px 12px  rgba(0, 0, 0, 0.5))",
              overflow: "visible",
              position: "relative",
              animation: "blinkImg 3s linear forwards",
              zIndex: 4,
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              zIndex: 2,
              fontSize: { xs: "2rem", sm: "3rem", md: "20rem" },
              fontWeight: "bold",
              color: "primary.Text",
              textAlign: "center",
              textTransform: "uppercase",
              animation: "blink 3s linear forwards 4.2s",

              opacity: 0,
              textShadow: "0 0 10px rgba(255, 213, 0, 0.81)",
            }}
          >
            ACH&nbsp;&nbsp;
          </Typography>
        </Grid>
        <Grid
          size={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            mt: 4,
            transform: "translate3d(0,0,-340px) rotate3d(0, 1, 0, 10deg)",
            height: "80%",
            bgcolor: "black",
            animation: "blink2 3s linear forwards",

            position: "relative",

            transformStyle: "preserve-3d",
            p: 2,
            "&:before": {
              position: "absolute",
              content: '""',
              width: "118%",
              height: "100%",
              filter: "blur(20px)",

              animation: "blink3 3s linear forwards",
              maskImage:
                "linear-gradient(90deg,rgba(255, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 45%, rgba(0, 0, 0, 0.75) 55%, rgba(99, 255, 15, 0) 100%)",

              transform: {
                md: "rotate3d(1,0 , 0, 90deg) translate3d(150px,-145px,-340px) rotateZ(0deg) rotateY(0deg)",
                xs: "rotate3d(1,0 , 0, 90deg) translate3d(150px,-45px,-340px) rotateZ(0deg) rotateY(0deg)",
              },
            },
          }}
        >
          <Box
            component="img"
            src={Right}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              width: "105%",
              filter: "drop-shadow(32px 0px 12px  rgba(0, 0, 0, 0.5))",
              overflow: "visible",
              position: "relative",
              animation: "blinkImg 3s linear forwards",
              zIndex: 4,
              transform: "translate3d(45px, -71px, 0px)",
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              zIndex: 2,
              fontSize: { xs: "2rem", sm: "3rem", md: "20rem" },
              fontWeight: "bold",
              color: "primary.Text",
              textAlign: "center",
              opacity: 0,
              animation: "blink 3s linear forwards 4.2s",

              textTransform: "uppercase",
              textShadow: "0 0 10px rgba(255, 213, 0, 0.81)",
            }}
          >
            IRU&nbsp;&nbsp;
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainGrid1;
