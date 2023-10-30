import { ArrowBack } from '@mui/icons-material';
import { Alert, CircularProgress, Paper } from '@mui/material';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import format from 'date-fns/format';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormInput from '../../components/form/Input';
import { createSession } from '../../api/session';
import Button from '../../components/Button';
import MentorDetails from './components/MentorDetails';

function Booking() {
  const [note, setNote] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [errorText, setErrorText] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const params = useParams();

  const sessionTime = searchParams.get('timeslot');
  const sessionDate = searchParams.get('date');
  const sessionMonth = format(new Date(sessionDate), 'yyyy-MM');
  const { mentorId } = params;

  const goBack = () => navigate(
    `/mentors/${mentorId}/session/?month=${sessionMonth}&date=${sessionDate}`,
  ); // TODO: set redirect url dynamically depending on where user was before visiting session page
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const scheduleSession = async (data) => {
    setLoading(true);
    const isoDateTime = `${sessionDate}T${sessionTime}+00:00`;
    const response = await createSession({
      mentor: mentorId,
      note: data.note,
      sessionDate: isoDateTime,
      time: sessionTime,
    });
    if (response?.error) {
      setErrorText(response?.error);
      setLoading(false);
    } else {
      // eslint-disable-next-line no-underscore-dangle
      navigate(`/sessions/${response.data._id}`);
    }
  };

  return (
    <div className="p-2 xs:p-6 md:p-16 xl:px-40 2xl:px-60 flex mt-32 sm:mt-28 bg-[#F3F2EE] min-h-screen">
      <Paper className="sm:p-5 grid xl:grid-cols-6 min-w-full">
        <div className="col-span-1 xl:col-span-2 xl:border-r h-full px-6 flex flex-col space-y-8">
          <button type="button" className="border h-11 w-11 rounded-full p-2 mt-12">
            <ArrowBack onClick={goBack} color="primary" />
          </button>
          <MentorDetails mentorId={mentorId} sessionDate={sessionDate} sessionTime={sessionTime} />
        </div>
        <div className="col-span-1 border-t mt-4 xl:border-t-0 xl:col-span-4 p-1 sm:px-6 flex flex-col space-y-6">
          {errorText && (
          <Alert severity="error">
            {errorText}
          </Alert>
          )}
          <p className="xl:mt-24 mt-8 text-2xl font-generalSansMedium px-6 md:p-0">
            Enter Details
          </p>
          <form
            onSubmit={handleSubmit(scheduleSession)}
            className="flex-flex-col space-y-2 px-6 md:p-0 text-sm"
          >
            <p className="text-gray-500 font-generalSansRegular">
              Please share anything that will help me prepare for our meeting
            </p>
            <FormInput
              placeholder="Enter text..."
              name="note"
              value={note}
              register={register}
              onChange={(event) => setNote(event.target.value)}
              error={errors.note}
              type="text"
              isTextArea
              rows={4}
            />
            <Button btnStyle="!mt-4 text-base" type="submit">
              {loading ? <CircularProgress size={25} color="inherit" /> : <span>Schedule Session</span>}
            </Button>
          </form>

        </div>
      </Paper>
    </div>
  );
}

export default Booking;
