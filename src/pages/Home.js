import React from 'react'
import BrowseThroughMentors from '../components/BrowseThroughMentors'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Testimonials from '../components/Testimonials'

function Home() {
  return (
    <div className='h-screen snap-y snap-mandatory overflow-scroll'>
      <div className='snap-start w-screen h-screen'>
        <Hero/>
      </div>
      <div className='snap-start w-screen h-screen bg-amber-400'>
        <Intro/>
      </div>
      <div className='snap-start w-screen h-screen bg-teal-400'>
        <BrowseThroughMentors/>
      </div>
      <div className='snap-start w-screen h-screen'>
        <Testimonials/>
      </div>
      
    </div>
  )
}

export default Home