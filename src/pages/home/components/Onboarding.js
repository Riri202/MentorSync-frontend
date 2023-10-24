import { CalendarMonth, PersonAddAlt, Search } from '@mui/icons-material';
// import OnboardingBG from '../../../assets/images/onboarding-bg.jpg';

const labels = [
  {
    title: 'Explore Inspiring Mentors',
    text: 'Discover a diverse community of mentors who are ready to guide you towards your goals. Browse their profiles, stories, and expertise to find the perfect match for your journey',
    icon: <Search fontSize="inherit" />,
  },
  {
    title: 'Create Your Account',
    text: 'Join our platform with a simple sign-up process. Unlock a world of possibilities as you connect with like-minded individuals and gain access to exclusive resources.',
    icon: <PersonAddAlt fontSize="inherit" />,
  },
  {
    title: 'Schedule Your Sessions ',
    text: 'Take control of your learning by crafting personalized mentorship sessions. Define the topics, goals, and duration to suit your unique needs and schedule.',
    icon: <CalendarMonth fontSize="inherit" />,
  },
  // {
  //   title: 'Thrive with Your Mentor ',
  //   text: 'Engage in transformative sessions with your chosen mentor. Absorb their wisdom, ask burning questions, and embrace invaluable insights that fuel your personal and professional growth.',
  // },
];
// style={{ backgroundImage: `url(${OnboardingBG})` }}
function Onboarding() {
  return (
    <div className="flex flex-col space-y-7 md:space-y-20 justify-center items-center  p-6 md:p-20">
      <h2 className="text-3xl md:text-4xl lg:text-6xl font-generalSansMedium text-center w-full tracking-wide bg-gradient-to-l from-blue-900 via-blue-600 to-blue-400 bg-clip-text text-transparent">
        How It Works
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
        {labels.map((label, index) => (
          <div key={label.title} className="flex flex-col justify-center items-center space-y-4 col-span-1 md:col-span-4 text-center text-gray-500">
            <div className="w-1/2 h-1/2 lg:py-6 text-6xl flex flex-row justify-center items-center rounded-md ">
              {label.icon}
            </div>
            {/* <img
              src={HeroIllustration}
              alt="hero illustration"
              className="w-1/2 h-1/2"
            /> */}
            <p className="font-generalSansLight">
              Step
              {' '}
              {index + 1}
            </p>
            <p className="font-generalSansSemiBold tracking-wide">{label.title}</p>
            <p className="font-generalSansRegular">{label.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Onboarding;
