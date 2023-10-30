/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-return */
/* eslint-disable no-nested-ternary */
import { Add, Star, StarOutline } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { Alert, Button, CircularProgress, Paper, Rating } from '@mui/material';
import { useForm } from 'react-hook-form';
import DialogModal from '../../../components/Dialog';
import { getExpiredSessions, reviewSession } from '../../../api/session';
import { formatHumanReadableDateShort } from '../../../utils/date';
import UserCard from '../../../components/UserCard';
import FormInput from '../../../components/form/Input';

const SessionItem = ({ session, loading, getSessionsToReview, getReviews }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorText, setErrorText] = useState('');
  const {
    register,
    setValue,
    setError,
    handleSubmit,
    formState: { errors, isDirty },
    clearErrors,
  } = useForm();

  const submitReview = async (data) => {
    const inputs = ['rating', 'review'];

    const inputErrors = [];

    inputs.forEach((key) => {
      if (!data[key]) {
        setError(`${key}`, {
          type: 'manual',
          message: `${key} for this session is required`,
        });
        inputErrors.push(key);
      }
    });

    if (inputErrors.length) return;
    setIsSubmitting(true);

    const response = await reviewSession(data);
    if (response?.error) {
      setErrorText(response?.error);
    } else {
      getSessionsToReview();
    }
    setIsSubmitting(false);
    await getSessionsToReview();
    await getReviews();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Paper
        key={session._id}
        sx={{
          width: '100%',
          borderRadius: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          border: '1px solid #E0DFDB',
        }}
        elevation={0}
      >
        <>
          <div className="text-white font-generalSansRegular bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 h-[20%] p-3 md:p-6 rounded-t-[20px] flex flex-row items-center text-xs sm:text-sm md:text-base">
            <p className="">
              {`${formatHumanReadableDateShort(
                // eslint-disable-next-line comma-dangle
                session?.sessionDate
              )}`}
            </p>
          </div>
          <div className="w-full p-3 md:p-6 flex flex-col justify-start space-y-4">
            <UserCard profile={session.mentor} />
          </div>
        </>
        <form className="p-3 md:p-6" onSubmit={handleSubmit(submitReview)}>
          <Rating
            name="rating"
            error={errors.rating}
            icon={<Star style={{ width: "28px", height: "28px" }} />}
            emptyIcon={<StarOutline style={{ width: "28px", height: "28px" }} />}
            onChange={(event, newValue) => {
              setValue(`rating`, newValue);
              clearErrors('rating');
            }}
          />
          {errors.rating && (
            <p className="text-red-500 mb-2 text-xs">{errors.rating.message}</p>
          )}
          <FormInput
            placeholder="Add a review..."
            name="review"
            type="text"
            isTextArea
            rows={4}
            disabled={loading}
            register={register}
            error={errors.review}
          />
          <input
            name="session"
            hidden
            value={setValue(`session`, `${session._id}`)}
          />
          <input
            name="mentor"
            hidden
            value={setValue(`mentor`, `${session.mentor._id}`)}
          />
          {errorText && (
          <Alert severity="error">{errorText}</Alert>)}
          <div className="flex flex-row justify-end mt-4 w-full">
            <Button sx={{ padding: '10px', width: { xs: '100%', md: '40%' } }} disableElevation disabled={loading || isSubmitting || !isDirty} type="submit" variant="contained">
              {(loading || isSubmitting) && (
              <CircularProgress size={12} style={{ marginRight: 10 }} />
              )}
              Review
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
};
function SessionReview({ getReviews }) {
  const [sessionList, setSessionList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState('');

  const getSessionsToReview = async () => {
    setLoading(true);
    const response = await getExpiredSessions();
    if (response?.error) {
      setErrorText(response?.error);
    } else {
      setSessionList(response?.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    getSessionsToReview();
  }, []);
  return (
    <DialogModal
      title="This is a list of your expired sessions awaiting review"
      btnText="Review expired sessions"
      btnVariant="outlined"
      btnIcon={<Add />}
      btnStyle=""
      fullWidth
      maxWidth="md"
      hasDialogActionButtons={false}
    >
      <div className="flex flex-col justify-center w-full space-y-6">
        {loading && <CircularProgress />}
        {errorText ? (
          <Alert severity="error">{errorText}</Alert>
        ) : sessionList.length ? (
          sessionList.map((session) => (
            <SessionItem
              key={session._id}
              session={session}
              loading={loading}
              getSessionsToReview={getSessionsToReview}
              getReviews={getReviews}
            />
          ))
        ) : (
          <p className="text-center">
            All caught up! you have no expired sessions to review.
          </p>
        )}
      </div>
    </DialogModal>
  );
}

export default SessionReview;
