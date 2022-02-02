import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Button from "./Components/Button";
import CardContent from "./Components/CardContent.js";

export default function MiddlePart() {
  return (
    <Box style={{ marginTop: "320px" }}>
      <Container>
        <Grid container spacing={1}>
          <Grid item lg={2}>
            <Button />
          </Grid>
          <Grid item lg={10}>
            <CardContent />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
