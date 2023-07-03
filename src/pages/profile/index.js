import React from 'react';
import Info from './components/Info';
import Reviews from './components/Reviews';

function Profile() {
  return (
    <div className="px-60 flex flex-col space-y-4 relative py-20 mt-11 bg-[#F3F2EE] min-h-screen">
      <Info />
      <Reviews />
      <p className="absolute bottom-10 pl-3 text-xs flex justify-center items-center font-light text-gray-500">
        <a href="https://www.freepik.com/free-vector/school-children-attending-distance-class-monitors-desks-classroom-screen-view_13146643.htm#page=2&query=online%20mentorship&position=27&from_view=search&track=ais">Banner image by pch.vector on Freepik</a>
      </p>
    </div>
  );
}

export default Profile;
