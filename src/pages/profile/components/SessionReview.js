import { Add } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { Alert, Button, CircularProgress, Paper, Rating } from '@mui/material';
import { useForm } from 'react-hook-form';
import DialogModal from '../../../components/Dialog';
import { getExpiredSessions } from '../../../api/session';
import { formatHumanReadableDateShort } from '../../../utils/date';
import UserCard from '../../../components/UserCard';
import FormInput from '../../../components/form/Input';

const SessionList = ({ sessions, errorText, loading, register, errors, setValue }) => (
  <div className="flex flex-col items-center justify-center">
    {loading && <CircularProgress />}
    {errorText ? (
      <Alert severity="error">{errorText}</Alert>
    ) : (
      sessions.map((session, index) => (
        <Paper
          key={session._id}
          sx={{
            width: '80%',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <>
            <div className="text-white bg-[#1776D1] h-[20%] p-3 md:p-6 rounded-t-[20px] flex flex-row items-center text-xs sm:text-sm md:text-base">
              <p className="">
                {`${formatHumanReadableDateShort(
                  // eslint-disable-next-line comma-dangle
                  session?.sessionDate
                )}`}
              </p>
            </div>
            <div className="w-full p-6 flex flex-col justify-start space-y-4">
              <UserCard profile={session.mentor} />
            </div>
          </>
          <div className="p-6">
            <Rating
              name={`rating-${index}`}
              error={errors[`rating-${index}`]}
              value={2}
              onChange={(event, newValue) => {
                setValue(`rating-${index}`, newValue);
              }}
            />
            <FormInput
              placeholder="Add a review..."
              name={`review-${index}`}
              type="text"
              isTextArea
              rows={4}
              disabled={loading}
              register={register}
              error={errors[`review-${index}`]}
            />
            <input name={`sessionId-${index}`} hidden value={setValue(`sessionId-${index}`, `${session._id}`)} />
            <input name={`mentorId-${index}`} hidden value={setValue(`mentorId-${index}`, `${session.mentor._id}`)} />
          </div>
        </Paper>
      ))
    )}
  </div>
);
function SessionReview() {
  const [sessionList, setSessionList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState('');

  const {
    register,
    setValue,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();
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

  const onSubmitReviews = (data) => {
    const groupedData = Object.keys(data).reduce((result, key) => {
      console.log(data[key]);
      const [prefix, suffix] = key.split('-');
      if (!data[key]) {
        setError(`${key}`, {
          type: 'manual',
          message: `${prefix} for this session is required`,
        });
      }
      console.log('hereee');
      const index = parseInt(suffix, 10);
      if (!result[index]) {
        // eslint-disable-next-line no-param-reassign
        result[index] = {};
      }
      // eslint-disable-next-line no-param-reassign
      result[index][prefix] = data[key];
      return result;
    }, []);
    console.log({ data, groupedData });
  };
  useEffect(() => {
    getSessionsToReview();
  }, []);
  console.log(errors);
  return (
    <DialogModal
      title="This is a list of your expired sessions"
      btnText="Give a review"
      btnVariant="outlined"
      btnIcon={<Add />}
      btnStyle=""
      fullWidth
      maxWidth="md"
      handleSubmit={handleSubmit(onSubmitReviews)}
      customSubmitButton={(
        <>
          <Button disabled={loading} variant="contained" type="submit">
            {/* {loading && (
          <CircularProgress size={12} style={{ marginRight: 10 }} />
          )} */}
            Submit
          </Button>
          <Button disabled={loading} variant="contained">
            {/* {loading && (
          <CircularProgress size={12} style={{ marginRight: 10 }} />
          )} */}
            Cancel
          </Button>
        </>
            )}
    >
      <SessionList
        errorText={errorText}
        sessions={sessionList}
        loading={loading}
        register={register}
        setValue={setValue}
        errors={errors}
      />

    </DialogModal>
  );
}

export default SessionReview;
