/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';
import { Alert, CardMedia, CircularProgress } from '@mui/material';
import { getMentors } from '../api';
import FillerImage from '../assets/images/signup-sync.jpg';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';

const filterData = (query, mentors) => {
  const terms = query.split(' ');
  return mentors.filter((mentor) => {
    const searchableFields = {
      firstname: mentor.firstname,
      lastname: mentor.lastname,
      occupation: mentor.occupation,
    };
    return terms.every((term) =>
      Object.values(searchableFields).some((value) =>
        String(value).toLowerCase().includes(term.toLowerCase())));
  });
};

const MentorCard = ({ mentor }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const textClass = isExpanded ? '' : 'multiline-ellipsis';
  const maxLines = isMobile ? 3 : 5;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 418);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div
      className="hover:scale-105 transition-all ease-out duration-500 h-full"
    >
      <Card
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column-reverse',
            sm: 'row',
            padding: 10,
          },
          justifyContent: 'space-between',
          maxHeight: { xs: '100%', sm: 345 },
          border: '1px solid #E0DFDB',
          borderRadius: 2,
        }}
        elevation={0}
      >
        <div className="flex flex-col justify-between space-y-3 w-full md:w-1/2 p-4 md:p-8">
          <div className="flex flex-col space-y-2 overflow-hidden">
            <p className="text-lg md:text-xl row-span-1 font-generalSansMedium">
              {`${mentor.firstname} ${mentor.lastname} | ${mentor.occupation}`}
            </p>
            <div className="overflow-y-scroll">
              <p className={`font-light text-gray-500 font-generalSansRegular overflow-hidden ${textClass}`}>
                {mentor.bio}
              </p>
            </div>
            <div className="flex justify-end">
              {mentor.bio.split(' ').length > maxLines * 5 && (
                <button
                  className="text-blue-500 cursor-pointer text-sm"
                  onClick={toggleExpansion}
                  type="button"
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                </button>
              )}

            </div>
          </div>
          <Button
            onClick={() => navigate(`/users/${mentor._id}`)}
            btnText="View Profile"
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
        <CardMedia
          component="img"
          sx={{ width: { xs: '100%', sm: '40%' }, borderRadius: 1 }}
          image={mentor.img || FillerImage}
          alt="mentor picture"
        />
      </Card>
    </div>
  );
};

export default function AllMentors() {
  const [mentors, setMentors] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const getAllMentors = async () => {
    setLoading(true);
    const data = await getMentors();
    if (data?.error) {
      setLoading(false);
      setError(data.error);
      return;
    }
    setLoading(false);
    setMentors(data);
  };

  useEffect(() => {
    getAllMentors();
  }, []);

  const filteredMentors = filterData(searchQuery, mentors);

  return (
    <div className="p-2 xs:p-6 md:p-16 xl:px-40 2xl:px-60 mt-32 sm:mt-28 bg-[#F3F2EE] min-h-screen">
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert severity="error" />
      ) : (
        <>
          <div className="flex w-full justify-end mt-4">
            <SearchBar
              setSearchQuery={setSearchQuery}
              placeholder="Search name, occupation..."
            />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-generalSansMedium w-full text-center mb-6 bg-gradient-to-l from-blue-900 via-blue-600 to-blue-400 bg-clip-text text-transparent tracking-wide">Meet Our Inspiring Mentors</h2>
          <div className="grid grid-rows-1 gap-4">
            {filteredMentors.length ? filteredMentors.map((mentor) => (
              <MentorCard key={mentor._id} mentor={mentor} />
            )) : (
              <p className="text-center text-base md:text-xl font-generalSansRegular">
                Oops, no match found! Please check your spelling and try again. Experiment with different terms or synonyms to expand your search.
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
