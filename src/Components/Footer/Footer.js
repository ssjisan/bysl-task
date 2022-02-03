import { Container, Grid, Typography,useMediaQuery } from "@mui/material";
import React from "react";

export default function Footer() {
  const forBelow600 = useMediaQuery("(max-width:600px)");

  return (
    <Container style={{ padding: "1%" }}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={6} lg={6} style={{ display: "flex", justifyContent:forBelow600 ? "center" : "flex-start" }}>
          <Typography
            style={{ fontSize: "24px", fontWeight: 700, fontFamily: "Lekton" }}
          >
            Intelli.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          style={{ display: "flex", justifyContent:forBelow600 ? "center" : "flex-end" }}
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
