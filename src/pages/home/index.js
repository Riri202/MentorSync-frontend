import React from 'react';
import Mentors from './components/Mentors';
import Hero from './components/Hero';
import Onboarding from './components/Onboarding';
import Testimonials from './components/Testimonials';

function Home() {
  return (
    <div className="">
      <div className="min-h-screen w-screen pt-8">
        <Hero />
      </div>
      <div className="min-h-screen w-screen">
        <Onboarding />
      </div>
      <div className="min-h-screen w-screen ">
        <Mentors />
      </div>
      <div className="min-h-screen w-screen ">
        <Testimonials />
      </div>

    </div>
  );
}

export default Home;
