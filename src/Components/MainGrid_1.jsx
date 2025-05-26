import { Grid } from "@mui/material";
import React from "react";

const MainGrid_1 = () => {
  return (
    <Grid container spacing={2} sx={{ padding: 2, bgcolor: "#e0f7fa" }}>
      <Grid item xs={12} sm={6} md={4}>
        <div style={{ backgroundColor: "#f0f0f0", padding: "20px" }}>
          Item 1
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <div style={{ backgroundColor: "#f0f0f0", padding: "20px" }}>
          Item 2
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <div style={{ backgroundColor: "#f0f0f0", padding: "20px" }}>
          Item 3
        </div>
      </Grid>
    </Grid>
  );
};

export default MainGrid_1;
