import { Box } from "@mui/material";
import Terminal from "./sample/Terminal";
const MainGrid2 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 4,
        my: 2,
        width: "100%",

        backgroundColor: "#000000",
        borderRadius: "20px",
      }}
    >
      <Terminal />
    </Box>
  );
};

export default MainGrid2;
