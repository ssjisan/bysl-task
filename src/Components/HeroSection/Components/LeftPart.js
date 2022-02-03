import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import React from "react";
import useStyles from "./Style/LeftPartStyle";
import { BsArrowRightCircle } from "react-icons/bs";

export default function LeftPart() {
  const forBelow600 = useMediaQuery("(max-width:600px)");

  const classes = useStyles();
  return (
    <Box>
      <Typography className={classes.header}>
        Tell a better brand story
      </Typography>
      <Typography className={classes.subHeader}>
        Automate the way you search through hashtags and suggested profiles to
        find results 100x faster.
      </Typography>
      {forBelow600 ? (
        <Button variant="contained" className={classes.Button} size="small">
          {" "}
          Request Demo &nbsp; <BsArrowRightCircle />
        </Button>
      ) : (
        <Button variant="contained" className={classes.Button}>
          {" "}
          Request Demo &nbsp; <BsArrowRightCircle />
        </Button>
      )}
    </Box>
  );
}
