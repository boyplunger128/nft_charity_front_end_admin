import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import PrimarySearchAppBar from "../../../components/Appbar/appbar";
import { Box, Card, Typography } from "@mui/material";
import BasicCard from "../../../components/Widget/Widget";
import { Grid, CssBaseline } from "@mui/material";
import PermanentDrawerLeft from "../../../components/Sidebar/Sidebar";
import Widget from "../../../components/Widget/Widget";
import TransactionOverview from "../../../components/TransactionOverview/TransactionOverview";
import useStyles from "./styles";

export default function Index() {
  const classes = useStyles();

  return (
    <Grid container className={classes.home}>
      {/* reset css */}
      <CssBaseline />

      {/* sidebar in grid 1.7 */}
      <Grid item md={1.7} className={classes.navbar}>
        <PermanentDrawerLeft />
      </Grid>

      {/* main content in grid 10.3 */}
      <Grid item className={classes.mainContent} md={10.3}>
        {/* appbar */}
        <Grid item md={12}>
          <PrimarySearchAppBar />
        </Grid>

        {/* widget */}
        <Grid item md={12}>
          <Grid container>
            <Grid item xm={12} md={3} className={classes.some}>
              <Widget type="Bitcoin"></Widget>
            </Grid>
            <Grid item xm={12} md={3} className={classes.some}>
              <Widget type="Litecoin"></Widget>
            </Grid>
            <Grid item xm={12} md={3} className={classes.some}>
              <Widget type="Ethereum"></Widget>
            </Grid>
            <Grid item xm={12} md={3} className={classes.some}>
              <Widget type="BinanceCoin"></Widget>
            </Grid>
          </Grid>
        </Grid>

        {/* Overview 9 and  Balance 3 */}
        <Grid item md={12} className={classes.overAndBal}>
          <Grid item md={9} className={classes.over}>
            This is container 9
          </Grid>
          <Grid item md={3}>
            This is container 3
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}