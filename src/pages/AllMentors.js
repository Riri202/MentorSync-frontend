import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';



export default function AllMentors() {
const navigate = useNavigate();    
const mentors = [
    {
        id: 0,
        name: 'Brenda Gold',
        occupation: 'Software Engineer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elit libero, aliquam a nunc ut,tincidunt sodales nisl. Pellentesque feugiat ex augue, a hendrerit tortor auctor sit amet.Suspendisse ut erat massa.',
        expertise: 'Expert'
    },
    {
        id: 1,
        name: 'Rita-Maria',
        occupation: 'Software Engineer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elit libero, aliquam a nunc ut,tincidunt sodales nisl. Pellentesque feugiat ex augue, a hendrerit tortor auctor sit amet.Suspendisse ut erat massa.',
        expertise: 'Expert'
    },
    {
        id: 2,
        name: 'Ojo Mohammed',
        occupation: 'DevOps Engineer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elit libero, aliquam a nunc ut,tincidunt sodales nisl. Pellentesque feugiat ex augue, a hendrerit tortor auctor sit amet.Suspendisse ut erat massa.',
        expertise: 'Expert'
    },
    {
        id: 3,
        name: 'Florence Nightingale',
        occupation: 'Nurse',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elit libero, aliquam a nunc ut,tincidunt sodales nisl. Pellentesque feugiat ex augue, a hendrerit tortor auctor sit amet.Suspendisse ut erat massa.',
        expertise: 'Expert'
    },
]
const changeRoute = (path) => {
    navigate(path)
    }

    return (
        <div className='p-5'>
            {mentors.map((mentor, key) => {
                return (
                    <div className='hover:scale-105 transition-all ease-out'>
                    <Card style={{display: 'flex', flexDirection: 'row', justifyContent:'space-evenly', margin: '10px', padding: '15px'}}>
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
                        {mentor.name}, <span>{mentor.occupation}</span>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {mentor.bio}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button onClick={() => changeRoute(`/mentor`)} variant='contained'>Learn More</Button>
                    </CardActions>
                    </div>
                  </Card>
                    </div>
                )
            })}
        </div>

    )
};

