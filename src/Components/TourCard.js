import { Card, CardActions, CardContent, CardHeader, CardMedia, Rating, Typography } from '@mui/material'
import React from 'react'
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';


function TourCard() {
  return (
    <Card sx={{ maxWidth: 600 , marginBottom:'20px'}}>
    <CardHeader
      
      
      title="Shrimp and Chorizo Paella"
      
    />
    <CardMedia
      component="img"
      height="194"
      image={require('../assets/banner1.jpg')}
      alt="Paella dish"
    />
    <CardContent >
      <Typography variant="body2" color="text.secondary" >
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon   sx={{color:'red'}}/>
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      
      <Rating
  name="simple-controlled"
  value={4}/>
    </CardActions>

  </Card>
  )
}

export default TourCard