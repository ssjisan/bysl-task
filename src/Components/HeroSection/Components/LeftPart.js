import { Box, Typography, Button } from "@mui/material";
import React from "react";
import useStyles from "./Style/LeftPartStyle";
import { BsArrowRightCircle } from "react-icons/bs";

export default function LeftPart() {
  const classes = useStyles();
  return (
    <Box>
      <Typography className={classes.header}>
        Tell a better brand story
      </Typography>
      <Typography style={{ marginTop: "20px" }} variant="h6">
        Automate the way you search through hashtags and suggested profiles to
        find results 100x faster.
      </Typography>
      <Button
        style={{
          marginTop: "40px",
          backgroundColor: "#002855",
          borderRadius: "50px",
          fontSize: "16px",
        }}
        variant="contained"
      >
        {" "}
        Request Demo &nbsp; <BsArrowRightCircle/>
      </Button>
    </Box>
  );
}
