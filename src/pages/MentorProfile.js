import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MentorProfile() {
    return (
        <div className='p-5'>
            <Card style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', margin: '10px', padding: '15px' }}>
                {/* <CardMedia
                      component="img"
                      height="140"
                      image="/static/images/cards/contemplative-reptile.jpg"
                      alt="green iguana"
                    /> */}
                <div className='w-[250px] h-[250px] rounded-full bg-slate-500 flex justify-center items-center'>Img</div>
                <div className='flex flex-col space-y-5 w-1/2'>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Name and Occupation
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Bio
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant='contained'>Request</Button>
                    </CardActions>
                </div>
            </Card>
        </div>
    )
}