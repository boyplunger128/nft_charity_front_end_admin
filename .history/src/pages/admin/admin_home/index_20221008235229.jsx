import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { Typography, Box, Toolbar } from "@mui/material";
import PrimarySearchAppBar from "../../../components/Appbar/appbar";
const drawerWidth = 240;
export default function index() {
  return (
    <div className="home" style={{ display: "flex" }}>
      <Sidebar />
      <div
        className="container"
        style={{
          background: `#ccc`,
          flex: `5`,
          width: `calc(100% - ${drawerWidth}px)`,
        }}
      >
        <PrimarySearchAppBar />
        fdsfdsfsda;fjdspfjsdljfdslkjf;lsdajdsjsfa;kdllllllllfskldddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
      </div>
    </div>
  );
}