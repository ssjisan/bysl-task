import { Box, Container, Grid } from "@mui/material";
import React from "react";
import LeftPart from "./Components/LeftPart";
import RightPart from "./Components/RightPart";

export default function HeroSection() {
  return (
    <Box style={{marginTop:"150px"}}>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <LeftPart />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <RightPart/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
