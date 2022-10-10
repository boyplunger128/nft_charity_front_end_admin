import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
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
    >
      <Toolbar />
      <Divider />
      <List>
        {
          // ["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          //   <ListItem key={text} disablePadding>
          //     <ListItemButton>
          //       <ListItemIcon>
          //         {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          //       </ListItemIcon>
          //       <ListItemText primary={text} />
          //     </ListItemButton>
          //   </ListItem>
          // ))
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>{/* <DashboardIcon /> */}</ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        }
      </List>
      <Divider />
    </Drawer>
  );
}