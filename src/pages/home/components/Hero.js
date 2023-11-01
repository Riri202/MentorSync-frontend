/* eslint-disable max-len */
import React from "react";

import HeroIllustration from '../../../assets/images/hero-2.svg';
import Button from "../../../components/Button";

function Hero() {
  return (
    <div className="flex flex-col-reverse justify-evenly lg:flex-row lg:justify-center lg:items-center p-6 md:p-20 md:mt-6 lg:mt-0 bg-[#edeef1] min-h-screen">
      <div className="mt-[-50px] md:mt-[40px] lg:mt-0 flex flex-col space-y-6 md:space-y-10 text-left justify-center w-full lg:w-1/2">
        <h1 className="text-[2.8rem] lg:text-6xl font-generalSansSemiBold tracking-wide text-center lg:text-left">
          Unlock
          {' '}
          <span className="bg-gradient-to-l from-blue-800 via-blue-600 to-blue-400 bg-clip-text text-transparent">Your Potential</span>
          {' '}
          with MentorSync
        </h1>
        <p className="text-base md:text-lg lg:text-xl font-generalSansLight text-center lg:text-left">
          Connect with our experienced mentors, gain valuable insights, and accelerate your personal and professional growth. All for
          {' '}
          <span className="bg-gradient-to-l from-blue-800 via-blue-600 to-blue-400 bg-clip-text text-transparent font-generalSansSemiBold">free!</span>
        </p>
        <Button
          btnText="Get Started"
          icon={(
            <svg
              className="h-5 w-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          )}
        />
      </div>
      <div className="w-full md:pt-0 lg:w-1/2 relative">
        <img
          src={HeroIllustration}
          alt="hero illustration"
        />
        <p className="absolute bottom-1 pl-3 text-[8px] flex justify-center items-center font-generalSansLight text-gray-500 hover:text-blue-600 hover:underline">
          <a
            href="https://www.freepik.com/free-vector/online-tutorials-concept_7915212.htm#query=online%20education&position=12&from_view=keyword&track=ais"
            rel="noreferrer"
            target="_blank"
          >
            Image by pikisuperstar on Freepik

          </a>
        </p>
      </div>
    </div>
  );
}
export default Hero;
