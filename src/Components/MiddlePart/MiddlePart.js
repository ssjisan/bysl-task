import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Button from "./Components/Button";
import CardContent from "./Components/CardContent";

export default function MiddlePart() {
  return (
    <Box style={{ marginTop: "150px" }}>
      <Container>
        <Grid container>
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
