/* eslint-disable max-len */
import React from "react";
import Button from "@mui/material/Button";
import { ArrowForward } from "@mui/icons-material";
import HeroIllustration from '../../../assets/images/hero.jpg';

function Hero() {
  return (

    <div className="">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col space-y-5 text-left justify-center w-full md:w-1/2 p-20 bg-[rgb(23,118,209)] min-h-screen">
          <h1 className="text-xl md:text-4xl lg:text-6xl font-extrabold">Unlock Your Potential with MentorSync</h1>
          <h2 className="text-base md:text-lg font-light text-white ">Connect with experienced mentors, gain valuable insights, and accelerate your personal and professional growth. All for free!</h2>
          <Button style={{ width: '30%' }} variant="contained" endIcon={<ArrowForward />}>Find a mentor </Button>
        </div>
        <div className="w-full md:w-1/2 min-h-screen relative">
          <img
            src={HeroIllustration}
            alt="chatting people"
          />
          <p className="absolute bottom-10 pl-3 text-xs flex justify-center items-center font-light text-gray-500">
            <a href="https://www.freepik.com/free-vector/chatting-people-isometric-composition-with-woman-sitting-table-chatting-laptop_17232927.htm#page=2&query=online%20mentorship&position=10&from_view=search&track=ais">Image by macrovector on Freepik</a>
          </p>
        </div>
      </div>

    </div>

  );
}

export default Hero;
