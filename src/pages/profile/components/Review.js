import { Paper, Rating } from '@mui/material';
import React from 'react';
import UserCard from '../../../components/UserCard';

function Review({ received = true }) {
  return (
    <Paper elevation={0} className="p-5">
      <UserCard />
      <div className="flex flex-col space-y-3 mt-3 text-gray-500">
        <p className="font-light text-xs">
          July 2, 2023,
          {' '}
          {`${received ? "Rita received a review after a session with Maria" : "Rita reviewed a session with Maria"}`}
        </p>
        <Rating name="session-review-rating" value={4} readOnly />
        <p className="font-normal text-sm">
          Ut error vero sit officiis dolores ea rerum culpa ut autem temporibus ut deserunt cupiditate hic numquam illum. Aut architecto quia et obcaecati voluptatem et quaerat optio sit repellat autem et enim nesciunt. Et aliquam aperiam aut necessitatibus voluptatem est quae quaerat in aliquam quia ea officia ratione non dolores nisi et fugiat vero. In odit illum ut eaque eaque qui sapiente esse est optio reprehenderit rem ratione placeat qui deserunt perferendis id incidunt ducimus.
        </p>
      </div>

    </Paper>
  );
}

export default Review;
