import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import LeftPart from "./Components/LeftPart";
import RightPart from "./Components/RightPart";

export default function HeroSection() {
  const forBelow600 = useMediaQuery("(max-width:600px)");
  return (
    <Box style={{ marginTop: "150px" }}>
      <Container>
        <Grid
          container
          spacing={1}
          justifyContent={forBelow600 && "center"}
          align={forBelow600 && "center"}
          style={{ display: "flex", flexDirection:forBelow600&&"column-reverse" }}
        >
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <LeftPart />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            {/* <RightPart /> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
