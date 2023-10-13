/* eslint-disable no-unused-vars */
// the videocallroom component is only accessible by mentor and mentee of the concerned session and if the time for the session has not reached,
// user should see something like "not yet time for session. oops you connected too early, come back in ...mins or secs or hours"

import { useEffect, useState } from 'react';
import {
  useNavigate,
  useParams,
} from 'react-router-dom';
import addMinutes from 'date-fns/addMinutes';
import isBefore from 'date-fns/isBefore';
import { Alert, CircularProgress, Paper } from '@mui/material';
import isAfter from 'date-fns/isAfter';
import { getSession } from '../../api/session';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { formatHumanReadableDateShort } from '../../utils/date';
import VideoCallRoom from './components/VideoCallRoom';

function ProtectedCallRoute() {
  const user = useCurrentUser();
  const navigate = useNavigate();

  const { sessionId } = useParams();

  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState('');

  const fetchSession = async () => {
    setLoading(true);
    const response = await getSession(sessionId);
    if (!response?.data) {
      setErrorText(
        'You are trying to access a session that does not exist or you cannot access this feature because you are not a mentor or mentee in this session',
      );
    } else if (response?.error) {
      setErrorText(response?.error);
    } else {
      const sessionExpirationTime = addMinutes(
        new Date(response?.data.sessionDate),
        30,
      ); // session has 30 minutes duration
      const isExpired = isAfter(new Date(), new Date(sessionExpirationTime));
      const isTooEarly = isBefore(
        new Date(),
        new Date(response?.data.sessionDate),
      );
      if (isExpired) {
        setErrorText('This session has expired');
      } else if (isTooEarly) {
        setErrorText(
          `You have accessed this call too early. The session starts ${formatHumanReadableDateShort(
            response?.data.sessionDate,
          )}`,
        );
      }
    }

    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      fetchSession();
    }
  }, [sessionId, user]);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user]);

  return (
    <div className="p-2 xs:p-6 md:p-16 xl:px-40 2xl:px-60 flex mt-11 bg-[#F3F2EE] min-h-screen">
      {loading ? (
        <CircularProgress />
      ) : errorText ? (
        <Paper className="p-5 min-w-full flex flex-col items-center justify-center">
          <Alert severity="error">{errorText}</Alert>
        </Paper>
      ) : (
        <VideoCallRoom sessionId={sessionId} />
      )}
    </div>
  );
}

export default ProtectedCallRoute;
