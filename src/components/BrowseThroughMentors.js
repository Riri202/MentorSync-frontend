import React from 'react'
import {Link} from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function BrowseThroughMentors() {
  const navigate = useNavigate();    
  const images = [
      'img1',
      'img2',
      'img3',
  
  ]
  const changeRoute = (path) => {
    navigate(path)
    }
  return (
      <>
      <h3 className='text-5xl mb-3 p-3'>Browse through our mentors</h3>
    <Grid container spacing={1} className='p-5'>
        {images.map((item, key) => {
            return (
                <Grid item xs={12} sm={6} md={4} key={key} >
                <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    // image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item}
                    </Typography>
                    
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button onClick={() => changeRoute(`/mentor`)} variant='contained' color="primary">
                    View profile
                  </Button>
                </CardActions>
              </Card>
              </Grid>
            )
        })}
    </Grid>
    <h3 className='text-5xl mb-3 p-3'>
      <Link to='/Allmentors'>
    <Button variant='contained' style={{padding: '10px', width: '30%', fontSize: '20px'}}>View all mentors</Button>
      </Link>
      </h3>
    </>
  )
}

export default BrowseThroughMentors