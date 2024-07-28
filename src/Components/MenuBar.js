import { Box, List, ListItem,ListItemIcon, ListItemButton,ListItemText } from '@mui/material'
import React from 'react'
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ExploreIcon from '@mui/icons-material/Explore';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import InfoIcon from '@mui/icons-material/Info';

function MenuBar() {
  return (

    <Box flex={0.75} padding={2} >
<Box position='fixed'>
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AirplanemodeActiveIcon />
              </ListItemIcon>
              <ListItemText primary="Plan your Trip" />
            </ListItemButton>
        </ListItem>
      </List>
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FormatListBulletedIcon />
              </ListItemIcon>
              <ListItemText primary="Things to do" />
            </ListItemButton>
        </ListItem>
      </List>
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ExploreIcon />
              </ListItemIcon>
              <ListItemText primary="Explore" />
            </ListItemButton>
        </ListItem>
      </List>
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccessibilityIcon />
              </ListItemIcon>
              <ListItemText primary="Facts" />
            </ListItemButton>
        </ListItem>
      </List>
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary="places" />
            </ListItemButton>
        </ListItem>
      </List>
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocalActivityIcon />
              </ListItemIcon>
              <ListItemText primary="Tickets" />
            </ListItemButton>
        </ListItem>
      </List>
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="Help" />
            </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Box>
  )
}

export default MenuBar
