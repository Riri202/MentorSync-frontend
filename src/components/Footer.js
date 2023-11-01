/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="p-10 bg-gray-900 flex flex-col items-center">
    <div className="flex mb-4 flex-col lg:w-[60%] w-[95%] items-center gap-4 font-generalSansMedium rounded-lg bg-gradient-to-l from-blue-800 via-blue-600 to-blue-400 p-6 shadow-lg sm:flex-row sm:justify-between">
      <strong className="text-xl text-white sm:text-3xl tracking-wide text-center md:text-left">
        Make Your Next Career Move!
      </strong>

      <Link
        className="flex items-center gap-4 lg:gap-2 rounded-full border border-white bg-white px-8 py-3 text-blue-800 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
        to="/mentors/all"
      >
        <span className="text-sm whitespace-nowrap"> Let&apos;s Get Started </span>

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
      </Link>
    </div>
    <div className=" flex flex-col justify-center items-center space-y-3 text-gray-400 text-xs sm:text-sm md:text-base">
      <nav className="grid grid-flow-col gap-4 font-generalSansRegular">
        <Link to="/about">
          About us
        </Link>
        <Link to="/about">
          Contact
        </Link>
        <Link to="/about">
          Jobs
        </Link>
        <Link to="/about">
          Press kit
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://twitter.com/greatbigriri" target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              color="#2464EB"
              fill="currentColor"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="https://www.youtube.com/channel/UCzkrQU6VvxAti16TwmXrLwQ" target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              color="#2464EB"
              fill="currentColor"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </a>
          <a href="https://twitter.com/greatbigriri" target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              color="#2464EB"
              fill="currentColor"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
        </div>
      </nav>
      <aside className="flex flex-col space-y-6 font-generalSansLight text-center">
        <p>
          Copyright ©
          {' '}
          {new Date().getFullYear()}
          {' '}
          - All right reserved by MentorSync
        </p>
        <p>
          Built by
          {' '}
          <a href="https://www.linkedin.com/in/rita-maria-oladokun-346784194" target="_blank" className="text-[#2464EB] hover:underline" rel="noreferrer">
            Rita-Maria Oladokun
          </a>
        </p>
      </aside>
    </div>
  </footer>
);

export default Footer;
