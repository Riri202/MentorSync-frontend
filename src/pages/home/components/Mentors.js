import React, { useEffect, useState } from "react";
import { Alert, CircularProgress, Button, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { ArrowForwardIosOutlined } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { getMentors } from "../../../api";
import FillerImage from '../../../assets/images/signup-sync.jpg';

function Mentors() {
  const [mentors, setMentors] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

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

  return (
    <div className="flex flex-col space-y-7 md:space-y-20 lg:space-y-40 justify-center items-center p-6 bg-gradient-to-l from-blue-800 via-blue-600 to-blue-400">
      <h2 className="text-3xl md:text-4xl lg:text-6xl font-generalSansMedium text-center w-full text-white tracking-wide">Meet Our Inspiring Mentors</h2>
      {error && (
        <Alert variant="filled" severity="error">
          {error}
        </Alert>
      )}
      {loading ? (
        <div className="text-white">
          <CircularProgress color="inherit" />
          {' '}
        </div>
      )
        : (
          <div className="flex flex-col space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {mentors.length && (
                mentors.map((mentor) => (
                  <div key={mentor._id} className="transform transition duration-500 hover:scale-110 col-span-1">
                    <Card sx={{ maxWidth: 345, width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }} elevation={0}>
                      <CardMedia
                        component="img"
                        height="40%"
                        image={mentor.img || FillerImage}
                        alt="mentor image"
                      />
                      <div className="flex-grow p-3 grid grid-rows-2">
                        <p className="text-lg md:text-xl row-span-1 font-generalSansMedium">
                          {`${mentor.firstname} ${mentor.lastname} | ${mentor.occupation}`}
                        </p>
                        <div className="row-span-1 overflow-hidden">
                          <p className="font-light text-gray-500 multiline-ellipsis font-generalSansRegular">
                            {mentor.bio}
                          </p>
                        </div>
                      </div>
                      <CardActions>
                        <Link to={`/users/${mentor._id}`}>
                          <Button
                            size="large"
                            color="primary"
                            endIcon={(
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
                          >
                            View Profile
                          </Button>
                        </Link>
                      </CardActions>
                    </Card>
                  </div>
                ))
              )}
            </div>
            {mentors.length && (
            <div className="flex flex-row justify-center w-full">
              <button onClick={() => navigate("/mentors/all")} type="button" className="flex flex-row justify-center items-center space-x-3 ring-1 ring-white w-[100%] md:w-[40%] rounded-sm py-3 px-2 text-white font-generalSansRegular bg-transparent hover:bg-blue-700">
                <span>See All</span>
                <ArrowForwardIosOutlined fontSize="small" />
              </button>
            </div>
            )}

          </div>
        )}

    </div>
  );
}

export default Mentors;
