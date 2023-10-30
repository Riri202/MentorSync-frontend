import { Paper, Rating } from '@mui/material';
import React from 'react';
import { format } from 'date-fns';
import UserCard from '../../../components/UserCard';

function Review({ isMentor, review }) {
  const { mentor, mentee, rating, review: info, createdAt } = review;
  // const mentorFullname = `${mentor.firstname} ${mentor.lastname}`;
  // const menteeFullname = `${mentee.firstname} ${mentee.lastname}`;
  return (
    <Paper elevation={0} className="p-5">
      <UserCard profile={isMentor ? mentee : mentor} />
      <div className="flex flex-col space-y-3 mt-3 text-gray-500">
        <p className="text-xs font-generalSansMedium">
          {format(new Date(createdAt), 'MMMM d, yyyy')}
          {/* ,
          {`${isMentor ? ` You received a review after your session with ${menteeFullname}` : ` You reviewed your session with ${mentorFullname}`}`} */}
        </p>
        <Rating name="session-review-rating" value={rating} readOnly />
        <p className="font-generalSansRegular text-sm">
          {info}
        </p>
      </div>

    </Paper>
  );
}

export default Review;
