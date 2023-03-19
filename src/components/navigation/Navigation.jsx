import React from "react";
import { AppBar, Badge, Box, Button, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BedOutlinedIcon from "@mui/icons-material/BedOutlined"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import PropTypes from 'prop-types';

import styles from "./Navigation.module.scss";
import { useState } from "react";
import User from "../user/User";

export default function Navigation({}) {

  // const [state, setState] = useState({
  //   top: false,
  //   left: false,
  //   bottom: false,
  //   right: false,
  // });

  // const toggleDrawer = (anchor, open) => (event) => {
  //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //     return;
  //   }

  //   setState({ ...state, [anchor]: open });
  // };

  // const list = (anchor) => (
  //   <Box
  //     sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
  //     role="presentation"
  //     onClick={toggleDrawer(anchor, false)}
  //     onKeyDown={toggleDrawer(anchor, false)}
  //   >
  //     <List>
  //       {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
  //         <ListItem key={text} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
  //               {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //     {/* <Divider /> */}
  //     <List>
  //       {['All mail', 'Trash', 'Spam'].map((text, index) => (
  //         <ListItem key={text} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
  //               {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );

  // return (
  //   <div>
  //     {['left', 'right', 'top', 'bottom'].map((anchor) => (
  //       <React.Fragment key={anchor}>
  //         <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
  //         <Drawer
  //           anchor={anchor}
  //           open={state[anchor]}
  //           onClose={toggleDrawer(anchor, false)}
  //         >
  //           {list(anchor)}
  //         </Drawer>
  //       </React.Fragment>
  //     ))}
  //   </div>
  // );

  return(
    <div className={styles.navigation}>
      {/* <Button onClick={toggleDrawer(anchor, true)}>Menu</Button> */}
      <Menu open={true}>
        <Drawer
          // anchor="Menu"
          open={true}
          // onClose={toggleDrawer(anchor, false)}
        >
          <MenuItem>
            <Grid container spacing={2}>
              <Grid item xs={9}>
                <User size="40px" headingSize="h3" />     
              </Grid>
              <Grid item xs={1}>
                <a className={styles.logout} href="#" title="Log out"><MoreVertIcon /></a>
              </Grid>
            </Grid>
          </MenuItem>
          <MenuItem>
            <List>
              <ListItem key="Apartament" disablePadding>
                  <ListItemButton>
                      <ListItemIcon>
                        <HomeOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Apartament" />
                      <Badge className={styles.badge} badgeContent={5} color="secondary" overlap="rectangular"/>
                  </ListItemButton>
              </ListItem>
              <ListItem key="Living Room" disablePadding>
                  <ListItemButton>
                      <ListItemIcon>
                        <BedOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Living Room" />
                  </ListItemButton>
              </ListItem>
              <ListItem key="Bedroom" disablePadding>
                  <ListItemButton>
                      <ListItemIcon>
                        <BedOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Bedroom" />
                      <Badge className={styles.badge} badgeContent={5} color="secondary" overlap="rectangular"/>
                  </ListItemButton>
              </ListItem>
              <ListItem key="Bathroom" disablePadding>
                  <ListItemButton>
                      <ListItemIcon>
                        <BedOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Bathroom" />
                  </ListItemButton>
              </ListItem>
              <ListItem key="Toilet" disablePadding>
                  <ListItemButton>
                      <ListItemIcon>
                        <BedOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Toilet" />
                  </ListItemButton>
              </ListItem>
              <ListItem key="Patio" disablePadding>
                  <ListItemButton>
                      <ListItemIcon>
                        <BedOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Patio" />
                  </ListItemButton>
              </ListItem>
            </List>
          </MenuItem>
          <MenuItem>
            <List>
              <ListItem key="House" disablePadding>
                  <ListItemButton>
                      <ListItemIcon>
                        <HomeOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="House" />
                      <Badge className={styles.badge} badgeContent={5} color="secondary" overlap="rectangular"/>
                  </ListItemButton>
              </ListItem>
              <ListItem key="Living Room" disablePadding>
                  <ListItemButton>
                      <ListItemIcon>
                        <BedOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Living Room" />
                  </ListItemButton>
              </ListItem>
              <ListItem key="Bedroom" disablePadding>
                  <ListItemButton>
                      <ListItemIcon>
                        <BedOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Bedroom" />
                  </ListItemButton>
              </ListItem>
              <ListItem key="Bathroom" disablePadding>
                  <ListItemButton>
                      <ListItemIcon>
                        <BedOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Bathroom" />
                  </ListItemButton>
              </ListItem>
              <ListItem key="Toilet" disablePadding>
                  <ListItemButton>
                      <ListItemIcon>
                        <BedOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Toilet" />
                  </ListItemButton>
              </ListItem>
              <ListItem key="Patio" disablePadding>
                  <ListItemButton>
                      <ListItemIcon>
                        <BedOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Patio" />
                  </ListItemButton>
              </ListItem>
            </List>
          </MenuItem>
        </Drawer>
      </Menu>
    </div>
  );
}