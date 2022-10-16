import React from "react";
import { Box, CssBaseline } from "@mui/material";
import Grid from "@mui/material/Grid";
import MySidebar from "../../../components/sidebar/SideBar";
import MyAppBar from "../../../components/appbar/AppBar";
import "./styles.scss";
export default function Index() {
  return (
    <Box className="container">
      <CssBaseline />
      <MySidebar />

      <Box className="page">
        <MyAppBar />
      </Box>
    </Box>
  );
}
