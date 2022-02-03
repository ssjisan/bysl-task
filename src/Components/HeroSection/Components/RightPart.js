import { Box, Card, Grid, Skeleton, Typography } from "@mui/material";
import Lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
import useStyles from "./Style/RightPartStyle";

export default function RightPart() {
  const classes = useStyles();
  const container = useRef(null);
  const angryContainer = useRef(null);
  const wowContainer = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoPlay: true,
      animationData: require("../../../Assets/love.json"),
    });
    Lottie.loadAnimation({
      container: angryContainer.current,
      renderer: "svg",
      loop: true,
      autoPlay: true,
      animationData: require("../../../Assets/angry.json"),
    });
    Lottie.loadAnimation({
      container: wowContainer.current,
      renderer: "svg",
      loop: true,
      autoPlay: true,
      animationData: require("../../../Assets/wow.json"),
    });
  }, []);
  return (
    <Box
      style={{ position: "relative" }}
    >
      <Grid container>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <Card className={classes.FirstCard}>
            <Box className={classes.Pic}></Box>
          </Card>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <Card className={classes.SecondCard}></Card>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <Card className={classes.ThirdCard}></Card>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <Card className={classes.FourthCard}>
            <Grid container spacing={5}>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <Box className={classes.FourthCardBox}>
                  <Typography className={classes.Text14k}>14k</Typography>
                </Box>
              </Grid>
              <Grid item xs={8} sm={8} md={8} lg={8}>
                <Typography className={classes.Follower}>
                  Follower Growth
                </Typography>
                <Skeleton
                  animation="wave"
                  height={10}
                  width="100%"
                  style={{ marginBottom: 6 }}
                />
                <Skeleton
                  animation="wave"
                  height={10}
                  width="80%"
                  style={{ marginBottom: 6 }}
                />
              </Grid>
            </Grid>
          </Card>
          <Card className={classes.FifthCard}>
            <Box style={{ marginRight: "15%" }} ref={wowContainer}></Box>
            <Box style={{ marginRight: "15%" }} ref={angryContainer}></Box>
            <Box ref={container}></Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
