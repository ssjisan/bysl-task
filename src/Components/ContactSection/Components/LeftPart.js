import { Box, Typography } from "@mui/material";
import React from "react";

export default function LeftPart() {
  return (
    <Box>
      <Typography
        style={{
          fontSize: "42px",
          fontWeight: 700,
          color: "white",
          marginTop: "80px",
        }}
      >
        Get in touch
      </Typography>
      <Typography
        style={{
          fontSize: "16px",
          fontWeight: 400,
          color: "white",
          marginTop: "30px",
        }}
      >
        We appreciate each customer and we are proud that 60% of clients come
        back to work with us again.
      </Typography>
      <Typography
        style={{
          fontSize: "18px",
          fontWeight: 500,
          color: "white",
          marginTop: "35px",
        }}
      >
        +1 555 505 5050
      </Typography>
      <Typography
        style={{
          fontSize: "18px",
          fontWeight: 500,
          color: "white",
          marginTop: "35px",
          marginBottom: "80px",
        }}
      >
        info@designmodo.com
      </Typography>
    </Box>
  );
}
