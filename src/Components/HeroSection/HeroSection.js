import { Box, Container, Grid } from "@mui/material";
import React from "react";
import LeftPart from "./Components/LeftPart";

export default function HeroSection() {
  return (
    <Box style={{marginTop:"150px"}}>
      <Container>
        <Grid container>
          <Grid item lg={6}>
            <LeftPart />
          </Grid>
          <Grid item lg={6}></Grid>
        </Grid>
      </Container>
    </Box>
  );
}
