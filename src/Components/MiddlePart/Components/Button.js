import { Box, Typography } from "@mui/material";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function Button() {
  return (
    <Box>
      <Box style={{ display: "flex", alignItems: "center" }}>
        <IoIosArrowForward />
        <Typography>Get Started</Typography>
      </Box>
      <Box style={{ display: "flex", alignItems: "center" }}>
        <IoIosArrowForward />
        <Typography>Team on board</Typography>
      </Box>
      <Typography style={{ marginLeft: "15px" }}>Case Study</Typography>
      <Typography style={{ marginLeft: "15px" }}>Use case</Typography>
      <Typography style={{ marginLeft: "15px" }}>Wow factor</Typography>
    </Box>
  );
}
