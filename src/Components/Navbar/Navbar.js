import { AppBar, Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function Navbar() {
  return (
    <Box>
      <AppBar
        position="fixed"
        elevation={0}
        style={{ backgroundColor: "transparent", color: "#444" }}
      >
        <Grid contanier>
          <Grid item>
            <Typography>Intelli.</Typography>
          </Grid>
          <Grid item>
            <Typography>Soluations</Typography>
          </Grid>
          <Grid item>
            <Typography>Plan</Typography>
          </Grid>
          <Grid item>
            <Typography>Resources</Typography>
          </Grid>
          <Grid item>
            <Typography>Blog</Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" style={{backgroundColor:"#002855",borderRadius:"50px"}}>Request Demo</Button>
          </Grid>
        </Grid>
        {/* <ProgressBar bgcolor="#00756A" /> */}
      </AppBar>
    </Box>
  );
}
