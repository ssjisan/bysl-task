import { Box, Typography } from "@mui/material";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function Button() {
  return (
    <Box>
      <Box style={{ display: "flex", alignItems: "center",marginBottom: "15px" }}>
        <IoIosArrowForward />
        <Typography  style={{fontFamily:"Poppins", fontWeight:500, fontSize:"20px"}}>Get Started</Typography>
      </Box>
      <Box style={{ display: "flex", alignItems: "center",marginBottom: "15px" }}>
        <IoIosArrowForward />
        <Typography style={{fontFamily:"Poppins", fontWeight:500, fontSize:"20px"}}>Team on board</Typography>
      </Box>
      <Typography style={{ margin: "15px",fontFamily:"Poppins", fontWeight:500, fontSize:"20px",color:"#E9EBF6"}}>Case Study</Typography>
      <Typography style={{ margin: "15px",fontFamily:"Poppins", fontWeight:500, fontSize:"20px",color:"#E9EBF6"}}>Use case</Typography>
      <Typography style={{ margin: "15px",fontFamily:"Poppins", fontWeight:500, fontSize:"20px",color:"#E9EBF6"}}>Wow factor</Typography>
    </Box>
  );
}
