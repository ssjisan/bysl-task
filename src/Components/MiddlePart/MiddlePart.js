import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import Button from "./Components/Button";
import CardContent from "./Components/CardContent.js";
import CardForMobile from "./Components/CardForMobile";

export default function MiddlePart() {
  const forBelow600 = useMediaQuery("(max-width:600px)");

  return (
    <Box style={{ marginTop: forBelow600 ? "50px" : "320px" }}>
      <Container>
        {forBelow600 ? (
          <CardForMobile />
        ) : (
          <Grid
            container
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item sm={12} md={2} lg={2}>
              <Button />
            </Grid>
            <Grid item sm={12} md={10} lg={10}>
              <CardContent />
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
}
