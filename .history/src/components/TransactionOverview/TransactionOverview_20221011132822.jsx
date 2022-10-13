import * as React from "react";
import { Card, Box, Grid, Typography } from "@mui/material";
import { useStyles } from "./styles";
export default function Overview() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Grid container md={12}>
        <Grid item classe md={7}>
          <Typography variant="h6">Transaction Overview</Typography>
          <Typography>7.2141,997.5 (25%)</Typography>
        </Grid>
        <Grid item md={5}></Grid>
      </Grid>
    </Card>
  );
}