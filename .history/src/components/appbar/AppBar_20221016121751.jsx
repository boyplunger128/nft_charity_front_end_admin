import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MySearch from "../SearchBar/SearchBar";
import Account from "../Account/Account";
const drawerWidth = 240;

import "./styles.scss";
export default function MyAppBar() {
  return (
    <Box className="box">
      <AppBar 
      "ap"
      position="static" elevation={0}>
        <Box
          sx={{
            height: `100%`,
            display: `flex`,
            flexDirection: `row`,
            justifyContent: `space-between`,
            alignItems: `center`,
            padding: `0px 40px`,
          }}
        >
          <Typography variant="h6">Dashboard</Typography>

          <MySearch />
          {/* the box to contain the right side of appbar */}
          <Box sx={{ display: `flex` }}>
            <Button color="inherit">Connect Wallet</Button>
            <Account />
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
}
