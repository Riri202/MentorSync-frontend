import React from 'react'
import Button from '@mui/material/Button';


function Hero() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col justify-center items-center'>
        <h1>Find a professional mentor that is right for you</h1>
        <p>We have you covered</p>
        <Button variant='contained'>Scroll down to explore </Button>
      </div>
    </div>
  )
}

export default Hero