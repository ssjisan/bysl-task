import { Box, Card, Grid, Skeleton, Typography } from "@mui/material";
import Lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
import "./Style/hero-images.css"
export default function RightPart() {
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
    <Box style={{ position: "relative" }}>
      <Box className="firstCard">
        <img src="Images/card01.svg" alt="card01" />
      </Box>
      <Box className="secondCard">
        <img src="Images/card02.svg" alt="secondCard" />
      </Box>
      <Box className="thirdCard">
        <img src="Images/card03.svg" alt="secondCard" />
      </Box>
      <Box className="fourthCard">
        <img src="Images/card04.svg" alt="secondCard" />
      </Box>
      <Box></Box>
    </Box>
  );
}
