import { AppBar, Avatar, Badge, Box, Toolbar, Typography, styled } from '@mui/material'
import React from 'react'
import MailIcon from '@mui/icons-material/Mail';
import { NotificationsActive } from '@mui/icons-material';

const ToolbarStyled = styled(Toolbar)({
display:'flex',
justifyContent:"space-between"
})


function NavBar() {
  return (

    <AppBar position="sticky" sx={{backgroundColor:'#411000'}}>
      <ToolbarStyled>
        <Typography variant="h4">Car Booking</Typography>
        <Box sx={{
          display:'flex',
          alignItems:'center',
          gap:'20px'
        }}>

        <Badge badgeContent={4} color="secondary">
          <MailIcon color="action"   sx={{color:'#f2e8cf'}}/>
        </Badge>

        <Badge badgeContent={4} color="error">
          <NotificationsActive  color="action"  sx={{color:'#f2e8cf'}}/>
        </Badge>

        <Avatar alt='img_girl' src='https://i.pravatar.cc/150?img=1'></Avatar>
        </Box>
        
        </ToolbarStyled>
    </AppBar>
  )
}

export default NavBar