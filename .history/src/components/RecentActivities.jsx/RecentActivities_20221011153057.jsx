import * as React from "react";

import { Card, Box } from "@mui/material";
import use
export default function Recent() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Box className={classes.box}>this is recent</Box>
    </Card>
  );
}