/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/destructuring-assignment */
import { AccessTime, ArrowBack } from '@mui/icons-material';
import { Alert, CircularProgress, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import format from 'date-fns/format';
import { getMentorTimeSlots } from '../../api/session';
import TimeslotButton from './components/TimeslotButton';
import Calendar from './components/Calendar';

function Session() {
  const [dateValue, setDateValue] = useState(new Date());
  const [searchParams, setSearchParams] = useSearchParams();
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  const queryParams = new URLSearchParams(searchParams.toString());
  const sessionDate = queryParams.get('date');
  const sessionTime = queryParams.get('timeslot');

  const { userId: mentorId } = params;

  const handleSelectDate = (val) => {
    const formattedDate = format(new Date(val), 'yyyy-MM-dd');
    queryParams.set('date', formattedDate);
    setSearchParams(queryParams.toString());
    setDateValue(val);
  };

  const handleSelectTime = (val) => {
    queryParams.set('timeslot', val);
    setSearchParams(queryParams.toString());
  };

  const goBack = () => {
    if (!sessionDate && !sessionTime) {
      return navigate(`/users/${mentorId}`); // TODO: set redirect url dynamically depending on where user was before visiting session page
    }
    if (sessionTime) {
      queryParams.delete('timeslot');
      queryParams.delete('date');
    } else {
      // when user has not yet selected time
      queryParams.delete('date');
    }
    return setSearchParams(queryParams.toString());
  };

  const scheduleSession = () => {
    navigate(`/mentors/${mentorId}/session/schedule?date=${sessionDate}&timeslot=${sessionTime}`);
  };

  const getAvailableTimeSlots = async () => {
    setLoading(true);
    const { data } = await getMentorTimeSlots(mentorId, sessionDate);
    setAvailableTimeSlots(data);
    setLoading(false);
  };

  useEffect(() => {
    if (sessionDate) {
      getAvailableTimeSlots();
    }
  }, [sessionDate]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 830);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    queryParams.set('month', format(new Date(), 'yyyy-MM'));
    setSearchParams(queryParams.toString());
  }, []);

  return (
    <div className="p-2 xs:p-6 md:p-16 xl:px-40 2xl:px-60 flex mt-11 bg-[#F3F2EE] min-h-screen">
      <Paper className="sm:p-5 grid xl:grid-cols-6 min-w-full">
        <div className="col-span-1 xl:col-span-2 xl:border-r h-full px-6 flex flex-col space-y-8">
          {isMobile && (
            <button type="button" className="border h-11 w-11 rounded-full p-2 mt-12">
              <ArrowBack onClick={goBack} color="primary" />
            </button>
          )}
          <div>
            <p className="text-gray-500 font-semibold xl:mt-12">Rita Oladokun</p>
            <p className="text-2xl font-semibold">30 Minute Session</p>
          </div>
          <div className="flex flex-row space-x-2 items-center text-gray-500">
            <AccessTime color="inherit" />
            <p>30 min</p>
          </div>
        </div>
        <div className="col-span-1 border-t mt-4 xl:border-t-0 xl:col-span-4 p-1 sm:px-6">
          {isMobile ? (
            <>
              {sessionDate ? (
                <>
                  <p className="xl:mt-4 mt-[-160px] border-t xl:border-t-0  text-2xl font-semibold px-6 md:p-0">
                    Select a Time
                  </p>
                  <div className="flex flex-col space-y-2 mt-6">
                    {loading ? (
                      <div className="flex justify-center">
                        <CircularProgress />
                      </div>
                    ) : (
                      <>
                        { availableTimeSlots?.length ? (
                          availableTimeSlots.map((time, index) => (
                            <TimeslotButton
                              key={`${index + 1}-${time}`}
                              time={time}
                              onClick={handleSelectTime}
                              queryParams={queryParams}
                              scheduleSession={scheduleSession}
                            />
                          ))
                        ) : (
                          <Alert severity="error">Mentor has no available slots for selected date</Alert>
                        )}
                      </>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <p className="xl:mt-4 text-2xl font-semibold px-6 md:p-0">
                    Select a Date
                  </p>
                  <Calendar
                    value={dateValue}
                    handleSelectDate={handleSelectDate}
                    mentorId={mentorId}
                  />
                </>
              )}
            </>
          ) : (
            <>
              <p className="xl:mt-4 text-2xl font-semibold">
                Select Date and Time
              </p>
              <div className="flex space-x-6">
                <Calendar
                  value={dateValue}
                  handleSelectDate={handleSelectDate}
                  mentorId={mentorId}
                />
                {sessionDate && (
                  <div className="w-[30%] flex flex-col space-y-2 mt-6">
                    {loading ? (
                      <div className="flex justify-center">
                        <CircularProgress />
                      </div>
                    ) : (
                      <>
                        { availableTimeSlots?.length ? (
                          availableTimeSlots.map((time, index) => (
                            <TimeslotButton
                              key={`${index + 1}-${time}`}
                              time={time}
                              onClick={handleSelectTime}
                              queryParams={queryParams}
                              scheduleSession={scheduleSession}
                            />
                          ))
                        ) : (
                          <Alert severity="error">Mentor has no available slots for selected date</Alert>
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </Paper>
    </div>
  );
}

export default Session;
