import * as React from 'react';
import { Box, CssBaseline } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';

import logo from '../../assets/weshare.svg';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CampaignIcon from '@mui/icons-material/Campaign';
import CreateIcon from '@mui/icons-material/Create';
import SettingsIcon from '@mui/icons-material/Settings';
import bottomSideBar from '../../assets/bottomSidebarImage.svg';
import { useHistory, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { lightGreen } from '@mui/material/colors';
import { RiAuctionFill } from 'react-icons/ri';
import { BsFillImageFill } from 'react-icons/bs';

import MyBalance from '../Balance/Balance';
const drawerWidth = 240;

export default function MySidebar() {
  const history = useHistory();
  const location = useLocation();
  const pathname = location.pathname.split('/')[2];
  console.log(pathname);

  const backLink = {
    backgroundColor: 'rgb(0, 221, 162)',
    color: 'white',
    '&:hover': {
      backgroundColor: 'rgb(7, 177, 77, 0.42)',
    },
  };
  return (
    <Box className="sidebar" sx={{ display: `flex` }}>
      <Drawer
        className="drawer"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            backgroundColor: 'transparent',
            width: drawerWidth,
            boxSizing: 'border-box',
            border: 'none',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* this is a full box to contain any thing in sidebar */}

        {/* start phan header */}
        <Box className="drawer__header" sx={{ display: 'flex', height: '300px', margin: `0 auto` }}>
          <Box
            className="drawer__header__logo"
            sx={{
              display: `flex`,
              justifyContent: `center`,
              alignItems: `center`,
            }}
          >
            <Box className="logo_img">
              <img src={logo} alt="logo" style={{ width: 40, height: 40 }} />
            </Box>
            <Box className="logo_title">
              <Typography
                variant="h5"
                ml={1}
                sx={{
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: 5,
                }}
              >
                WESHARE
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider />
        {/* end phan header */}
        <Box className="body">
          {/* start phan option */}
          <List className="listOptions">
            {
              <React.Fragment>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => {
                      history.push('/admin');
                    }}
                    sx={pathname == undefined ? backLink : {}}
                  >
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => {
                      history.push('/admin/list_nft');
                    }}
                    sx={pathname == 'list_nft' ? backLink : {}}
                  >
                    <ListItemIcon>
                      <BsFillImageFill />
                    </ListItemIcon>
                    <ListItemText primary="List NFT" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => {
                      history.push('/admin/campaign');
                    }}
                    sx={pathname == 'campaign' ? backLink : {}}
                  >
                    <ListItemIcon>
                      <CampaignIcon />
                    </ListItemIcon>
                    <ListItemText primary="Campaign" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => {
                      history.push('/admin/list_auction');
                    }}
                    sx={pathname == 'list_auction' ? backLink : {}}
                  >
                    <ListItemIcon>
                      <RiAuctionFill size={20} />
                    </ListItemIcon>
                    <ListItemText primary="List Auction" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => {
                      history.push('/admin/auction');
                    }}
                    sx={pathname == 'auction' ? backLink : {}}
                  >
                    <ListItemIcon>
                      <CreateIcon />
                    </ListItemIcon>
                    <ListItemText primary="Create Auction" />
                  </ListItemButton>
                </ListItem>

                {/* <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                  </ListItemButton>
                </ListItem> */}
              </React.Fragment>
            }
          </List>
          {/* end phan option */}
          <Divider />
        </Box>

        {/* start phan footer */}
        <Box
          className="footer"
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <MyBalance />
        </Box>
      </Drawer>
    </Box>
  );
}
