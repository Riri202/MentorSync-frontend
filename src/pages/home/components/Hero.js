/* eslint-disable max-len */
import React from "react";
import { ArrowForward } from "@mui/icons-material";

import HeroIllustration from '../../../assets/images/hero-2.svg';

function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-center md:items-center p-6 md:p-20 md:mt-6 lg:mt-0 bg-[#edeef1] lg:min-h-screen">
      <div className="mt-6 md:mt-0 flex flex-col space-y-6 md:space-y-10 text-left justify-center w-full lg:w-1/2">
        <h1 className="text-xl md:text-4xl lg:text-6xl font-generalSansSemiBold tracking-wide">
          Unlock
          {' '}
          <span className="bg-gradient-to-l from-blue-800 via-blue-600 to-blue-400 bg-clip-text text-transparent">Your Potential</span>
          {' '}
          with MentorSync
        </h1>
        <h2 className="text-base md:text-lg lg:text-xl font-generalSansLight">
          Connect with our experienced mentors, gain valuable insights, and accelerate your personal and professional growth. All for
          {' '}
          <span className="bg-gradient-to-l from-blue-800 via-blue-600 to-blue-400 bg-clip-text text-transparent font-generalSansSemiBold">free</span>
          !
        </h2>
        <button type="button" className="flex flex-row justify-center items-center space-x-3 bg-[rgb(23,118,209)] w-[100%] md:w-[40%] rounded-sm py-3 px-2 text-white font-generalSansRegular hover:bg-blue-700">
          <span>Find A Mentor</span>
          <ArrowForward />
        </button>
      </div>
      <div className="w-full pt-12 md:pt-0 lg:w-1/2 relative">
        <img
          src={HeroIllustration}
          alt="hero illustration"
        />
        <p className="absolute bottom-1 pl-3 text-[8px] flex justify-center items-center font-light text-gray-500 hover:text-[rgb(23,118,209)] hover:underline">
          <a href="https://www.freepik.com/free-vector/online-tutorials-concept_7915212.htm#query=online%20education&position=12&from_view=keyword&track=ais">Image by pikisuperstar on Freepik</a>
        </p>
      </div>
    </div>
  );
}
export default Hero;
