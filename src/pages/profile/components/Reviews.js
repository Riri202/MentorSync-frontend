/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import { Alert, CircularProgress } from '@mui/material';
import SectionCard from './SectionCard';
import Review from './Review';
import SessionReviewModal from './SessionReview';
import { MENTOR_ROLE, USER_ROLE } from '../../../utils/constants';
import { getReviewsForSessions } from '../../../api/session';
// to be able to review a session, session must be accepted and current time must be greater than/later than the session's time.
function Reviews({ currentUser, profile }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState('');

  const getReviews = async () => {
    setLoading(true);
    const response = await getReviewsForSessions();
    if (response?.error) {
      setErrorText(response?.error);
    } else {
      setReviews(response?.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    getReviews();
  }, [currentUser, profile]);

  return (
    <SectionCard>
      <p className="font-light text-gray-500 mb-2">
        Bio This will allow you to bring Twilio’s public or private network connectivity closer to your
        applications for improved performance.
      </p>
      {currentUser && currentUser.role === USER_ROLE && currentUser.id === profile?._id && <SessionReviewModal getReviews={getReviews} />}
      <div className="w-full flex-row flex justify-center mt-4">
        {loading ? <CircularProgress /> : errorText ? <Alert severity="error">{errorText}</Alert> : (
          <>
            {reviews.length ? reviews.map((review) => (

              <div key={review._id} className="flex flex-col space-y-3">

                <Review isMentor={currentUser.role === MENTOR_ROLE} review={review} />

              </div>
            )) : <p className="text-center text-gray-500">No reviews</p>}
          </>
        )}

      </div>
    </SectionCard>
  );
}

export default Reviews;
