import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
export default function Navbar() {
  const [show, setShow] = useState(true);
  const controlAppbar = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlAppbar);
  }, []);
  return (
    <Box>
      <AppBar
        elevation={show ? 0 : 4}
        style={{
          backgroundColor: show ? "transparent" : "white",
          color: "#444",
          transition: ".5s ease",
        }}
      >
        <Container style={{ padding: "1.5%" }}>
          <Grid container>
            <Grid
              item
              sm={4}
              md={4}
              lg={4}
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <Typography
                style={{ fontFamily: "Lekton", fontWeight: "bold" }}
                variant="h6"
              >
                Intelli.
              </Typography>
            </Grid>
            <Grid item sm={4} md={4} lg={4}>
              <Box style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                <Typography style={{ marginRight: "20px" }}>
                  Soluations
                </Typography>{" "}
                <Typography style={{ marginRight: "20px" }}>Plan</Typography>
                <Typography style={{ marginRight: "20px" }}>
                  Resources
                </Typography>{" "}
                <Typography style={{ marginRight: "20px" }}>Blog</Typography>
              </Box>
            </Grid>
            <Grid
              item
              sm={4}
              md={4}
              lg={4}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="contained"
                style={{ backgroundColor: "#002855", borderRadius: "50px" }}
              >
                Request Demon
              </Button>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </Box>
  );
}
