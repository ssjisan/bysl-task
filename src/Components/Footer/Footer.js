import { Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Container style={{ padding: "1%" }}>
      <Grid container justifyContent="center">
        <Grid item lg={6}>
          <Typography
            style={{ fontSize: "24px", fontWeight: 700, fontFamily: "Lekton" }}
          >
            Intelli.
          </Typography>
        </Grid>
        <Grid
          item
          lg={6}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Typography
            style={{ fontSize: "16px", fontWeight: 500, fontFamily: "Lekton" }}
          >
            © 2021 POWEREDBYKX
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
