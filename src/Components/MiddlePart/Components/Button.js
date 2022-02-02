import { Box, Typography } from "@mui/material";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function Button() {
  return (
    <Box>
      <Box style={{ display: "flex", alignItems: "center",marginBottom: "15px" }}>
        <IoIosArrowForward />
        <Typography>Get Started</Typography>
      </Box>
      <Box style={{ display: "flex", alignItems: "center",marginBottom: "15px" }}>
        <IoIosArrowForward />
        <Typography>Team on board</Typography>
      </Box>
      <Typography style={{ margin: "15px" }}>Case Study</Typography>
      <Typography style={{ margin: "15px" }}>Use case</Typography>
      <Typography style={{ margin: "15px" }}>Wow factor</Typography>
    </Box>
  );
}
