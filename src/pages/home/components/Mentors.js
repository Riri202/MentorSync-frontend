/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from "react";
import { Alert, CircularProgress, Button, CardActionArea, CardActions } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Grid from "@mui/material/Grid";
import { ArrowForward } from "@mui/icons-material";
import { getMentors } from "../../../api";
import FillerImage from '../../../assets/images/signup-sync.jpg';

function Mentors() {
  // const navigate = useNavigate();
  // const images = ["img1", "img2", "img3"];
  // const changeRoute = (path) => {
  //   navigate(path);
  // };
  const [mentors, setMentors] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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
    <div className="flex flex-col space-y-7 md:space-y-20 lg:space-y-40 justify-center items-center p-20 min-h-screen bg-[rgba(23,119,209)]">
      <h2 className="text-xl md:text-4xl lg:text-6xl font-extrabold text-left w-full">Unleash Your Potential: Meet Our Inspiring Mentors</h2>
      {error && (
        <Alert variant="filled" severity="warning">
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
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

            {mentors.length && (
              mentors.map((mentor) => (
                <div key={mentor._id} className="transform transition duration-500 hover:scale-110">

                  <Card sx={{ maxWidth: 345, width: '100%', height: '100%' }} elevation={6}>
                    <CardActionArea href={`/users/${mentor._id}`}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={mentor.img || FillerImage}
                        alt="mentor image"
                      />
                      <CardContent>
                        <p className="font-semibold text-2xl">
                          {`${mentor.firstname} ${mentor.lastname} | ${mentor.occupation}`}

                        </p>
                        <p className="font-light text-gray-500">
                          {mentor.bio}
                        </p>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button href={`/users/${mentor._id}`} size="large" color="primary" endIcon={<ArrowForward />}>
                        See more
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              ))
            )}
          </div>
        )}

    </div>
  );
}

export default Mentors;
