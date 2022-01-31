import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

export default function Navbar() {
  return (
    <Box>
      <AppBar
        position="fixed"
        elevation={0}
        style={{ backgroundColor: "transparent", color: "#444" }}
      >
        <Container style={{ padding: "1.5%" }}>
          <Grid container>
            <Grid
              item
              lg={4}
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <Typography>Intelli.</Typography>
            </Grid>
            <Grid item lg={4}>
              <Box style={{ display: "flex", flexDirection: "row" }}>
                <Typography style={{ marginRight: "20px" }}>
                  Soluations
                </Typography>{" "}
                <Typography style={{ marginRight: "20px" }}>Plan</Typography>{" "}
                <Typography style={{ marginRight: "20px" }}>
                  Resources
                </Typography>{" "}
                <Typography style={{ marginRight: "20px" }}>Blog</Typography>
              </Box>
            </Grid>
            <Grid
              item
              lg={4}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Button variant="contained">Plan</Button>
            </Grid>
          </Grid>
        </Container>
        {/* <ProgressBar bgcolor="#00756A" /> */}
      </AppBar>
    </Box>
  );
}
