import { useEffect, useState } from 'react';
import { AccessTime, CalendarMonthOutlined, CheckCircleOutlineOutlined, CommentOutlined } from '@mui/icons-material';
import { Alert, Button, CircularProgress, Paper } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { getSession } from '../../api/session';
import { formatHumanReadableDate } from '../../utils/date';

function SessionDetails() {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [session, setSession] = useState();

  const { sessionId } = params;

  // eslint-disable-next-line no-unused-vars
  const fetchSession = async () => {
    setLoading(true);
    const response = await getSession(sessionId);
    if (response?.error) {
      setErrorText(response?.error);
    } else {
      setSession(response?.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSession();
  }, [sessionId]);
  return (
    <div className="p-2 xs:p-6 md:p-16 xl:px-40 2xl:px-60 flex bg-[#F3F2EE] min-h-screen">
      <Paper className="p-5 my-32 sm:my-28 min-w-full flex flex-row items-center justify-center">
        {loading ? (
          <CircularProgress />
        ) : (
          <div className="w-full">
            {errorText ? (
              <Alert severity="error">
                {errorText}
              </Alert>
            ) : (
              <div>
                {session && (
                <div className="flex flex-col w-full h-full items-center justify-center space-y-4 text-[70px] md:text-[100px] text-blue-600">
                  <CheckCircleOutlineOutlined fontSize="inherit" />
                  <p className="text-lg md:text-2xl text-center font-generalSansMedium text-gray-500">{`Congratulations! You are scheduled for a session with ${session?.mentor?.firstname} ${session?.mentor?.lastname}.`}</p>
                  <div className="w-full border-y py-2 flex flex-col space-y-6">
                    <div className="flex flex-col space-y-1 items-center text-gray-500 text-sm md:text-base">
                      <AccessTime color="inherit" />
                      <p className="font-generalSansRegular">30 min</p>
                    </div>
                    <div className="flex flex-col space-y-1 items-center text-gray-500 text-sm md:text-base">
                      <CalendarMonthOutlined color="inherit" />
                      <p className="font-generalSansRegular">{`${session?.time}, ${formatHumanReadableDate(session?.sessionDate)}`}</p>
                    </div>
                    {session?.note && (
                    <div className="flex flex-col space-y-1 items-center text-gray-500 text-sm md:text-base">
                      <CommentOutlined color="inherit" />
                      <p className="font-generalSansRegular text-center w-[60%]">{session?.note}</p>
                    </div>
                    )}
                  </div>
                  <p className="text-sm md:text-base text-gray-500 font-generalSansMedium max-w-md text-center">
                    We have informed the mentor of your request. Please look out for their acceptance to confirm your session.
                  </p>
                  <div className="flex flex-col sm:flex-row md:space-x-3 w-full justify-center">
                    <Link to="/">
                      <Button
                        className="md:w-[30%] text-white"
                        style={{ marginTop: 30, padding: '10px' }}
                        type="button"
                        variant="contained"
                        disableElevation
                      >
                        home
                      </Button>
                    </Link>
                    <Button
                      className="md:w-[30%] text-white"
                      style={{ marginTop: 30, padding: '10px' }}
                      type="button"
                      variant="outlined"
                    >
                      your account
                    </Button>
                  </div>
                </div>
                )}
              </div>
            )}
          </div>

        )}
      </Paper>
    </div>
  );
}

export default SessionDetails;
