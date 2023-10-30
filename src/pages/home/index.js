import React from 'react';
import Mentors from './components/Mentors';
import Hero from './components/Hero';
import Onboarding from './components/Onboarding';
// import Testimonials from './components/Testimonials';

function Home() {
  return (
    <div className="">
      <div className=" pt-8">
        <Hero />
      </div>
      <div className="">
        <Onboarding />
      </div>
      <div className=" ">
        <Mentors />
      </div>
      {/* <div className="min-h-screen w-screen ">
        <Testimonials />
      </div> */}

    </div>
  );
}

export default Home;
