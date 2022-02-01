import { Box, Typography } from "@mui/material";
import React from "react";
import useStyles from "./Style/LeftPartStyle"

export default function LeftPart() {
    const classes = useStyles();
  return (
    <Box>
      <Typography className={classes.header}>
        Tell a better brand story
      </Typography>
    </Box>
  );
}
