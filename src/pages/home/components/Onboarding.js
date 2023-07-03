import React from 'react';

const labels = [
  {
    title: 'Explore Inspiring Mentors',
    text: 'Discover a diverse community of mentors who are ready to guide you towards your goals. Browse their profiles, stories, and expertise to find the perfect match for your journey',
  },
  {
    title: 'Create Your Account',
    text: 'Join our platform with a simple sign-up process. Unlock a world of possibilities as you connect with like-minded individuals and gain access to exclusive resources.',
  },
  {
    title: 'Schedule Your Sessions ',
    text: 'Take control of your learning adventure by crafting personalized mentorship sessions. Define the topics, goals, and duration to suit your unique needs and schedule.',
  },
  {
    title: 'Thrive with Your Mentor ',
    text: 'Engage in transformative sessions with your chosen mentor. Absorb their wisdom, ask burning questions, and embrace invaluable insights that fuel your personal and professional growth.',
  },
];

function Onboarding() {
  return (
    <div className="flex flex-col space-y-7 md:space-y-20 lg:space-y-40 justify-center items-center p-20 min-h-screen">
      <h2 className="text-xl md:text-4xl lg:text-6xl font-extrabold text-left w-full">
        Unlock Your Journey: How It Works
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 w-full">
        {labels.map((label, index) => (

          <div className="flex flex-col space-y-4 col-span-1 md:col-span-3">
            <div className="flex space-x-1 justify-center items-center">
              <div className="rounded-full p-3 bg-[rgba(23,119,209,0.2)] w-20 h-20 flex items-center justify-center">
                {index + 1}
              </div>
              <div className="border border-1 w-[80%]" />
            </div>
            <p className=" font-extrabold text-gray-500">{label.title}</p>
            <p className=" font-light text-gray-500">{label.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Onboarding;
