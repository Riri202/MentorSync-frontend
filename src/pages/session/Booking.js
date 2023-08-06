import { AccessTime, ArrowBack, CalendarTodayOutlined } from '@mui/icons-material';
import { Alert, Button, CircularProgress, Paper } from '@mui/material';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import format from 'date-fns/format';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormInput from '../../components/form/Input';
import { createSession } from '../../api/session';

function Booking() {
  const [note, setNote] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [errorText, setErrorText] = useState('');
  const [loading, setLoading] = useState('');

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
    <div className="p-2 xs:p-6 md:p-16 xl:px-40 2xl:px-60 flex mt-11 bg-[#F3F2EE] min-h-screen">
      <Paper className="sm:p-5 grid xl:grid-cols-6 min-w-full">
        <div className="col-span-1 xl:col-span-2 xl:border-r h-full px-6 flex flex-col space-y-8">
          <button type="button" className="border h-11 w-11 rounded-full p-2 mt-12">
            <ArrowBack onClick={goBack} color="primary" />
          </button>
          <div className="flex flex-col space-y-3">
            <div>
              <p className="text-gray-500 font-semibold">Rita Oladokun</p>
              <p className="text-2xl font-semibold">30 Minute Session</p>
            </div>
            <div className="flex flex-row space-x-2 items-start text-gray-500">
              <AccessTime color="inherit" />
              <p className="font-semibold">30 min</p>
            </div>
            <div className="flex flex-row space-x-2 items-start text-gray-500">
              <CalendarTodayOutlined color="inherit" />
              <p className="font-semibold">{`${sessionTime}, ${format(new Date(sessionDate), 'EEEE, LLLL do, yyyy')}`}</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 border-t mt-4 xl:border-t-0 xl:col-span-4 p-1 sm:px-6 flex flex-col space-y-6">
          {errorText && (
          <Alert severity="error">
            {errorText}
          </Alert>
          )}
          <p className="xl:mt-24 text-2xl font-semibold px-6 md:p-0">
            Enter Details
          </p>
          <form
            onSubmit={handleSubmit(scheduleSession)}
            className="flex-flex-col space-y-2 px-6 md:p-0 text-sm"
          >
            <p className="text-gray-500">
              Please share anything that will help prepare for our meeting
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
            <Button className="w-full md:w-[33%] text-white" style={{ marginTop: 30 }} type="submit" variant="contained">
              {loading ? <CircularProgress size={25} color="inherit" /> : 'Schedule Session'}
            </Button>
          </form>

        </div>
      </Paper>
    </div>
  );
}

export default Booking;
