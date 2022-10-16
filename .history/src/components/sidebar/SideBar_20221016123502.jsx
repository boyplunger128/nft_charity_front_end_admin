import * as React from "react";
import { Box, CssBaseline } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";

import logo from "../../assets/litecoin.svg";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CampaignIcon from "@mui/icons-material/Campaign";
import CreateIcon from "@mui/icons-material/Create";
import SettingsIcon from "@mui/icons-material/Settings";
import bottomSideBar from "../../assets/bottomSidebarImage.svg";

import useStyles from "./styles";

const drawerWidth = 240;

export default function MySidebar() {
  const classes = useStyles();
  return (
    <Box sx={{ display: `flex` }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
        elevation={4}
      >
        {/* this is a full box to contain any thing in sidebar */}

        {/* start phan header */}
        <Box sx={{ display: `flex`, height: `100px`, margin: `0 auto` }}>
          <Box
            sx={{
              display: `flex`,
              justifyContent: `center`,
              alignItems: `center`,
            }}
          >
            <Box>
              <img src={logo} />
            </Box>
            <Box>
              <Typography ml={1}>NFT CHARITY</Typography>
            </Box>
          </Box>
        </Box>
        {/* end phan header */}
        <Divider />
        {/* start phan option */}
        <List>
          {
            <React.Fragment>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <FormatListBulletedIcon />
                  </ListItemIcon>
                  <ListItemText primary="List NFT" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <CampaignIcon />
                  </ListItemIcon>
                  <ListItemText primary="Campaign" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <CreateIcon />
                  </ListItemIcon>
                  <ListItemText primary="Create Auction" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItemButton>
              </ListItem>
            </React.Fragment>
          }
        </List>
        {/* end phan option */}
        <Divider />

        {/* start phan footer */}
        <Box
          sx={{
            display: `flex`,
            flex: `1`,
            alignItems: `flex-end`,
            justifyContent: `center`,
            paddingBottom: `10px`,
          }}
        >
          <img src={bottomSideBar}{  style={}}/>
        </Box>
      </Drawer>
    </Box>
  );
}
