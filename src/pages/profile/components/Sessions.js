/* eslint-disable no-unsafe-optional-chaining */
import { useEffect, useState } from 'react';
import { Alert, CircularProgress } from '@mui/material';
import { CalendarMonth } from '@mui/icons-material';
import { getSessions } from '../../../api/session';
import SectionCard from './SectionCard';
import BasicTabs from '../../../components/Tabs';
import TabPanel from '../../../components/TabPanel';
import Session from './Session';
import { formatSessionDate } from '../../../utils/date';

function Sessions({ profile, currentUser }) {
  const [sessions, setSessions] = useState();
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [currentTab, setCurrentTab] = useState(0);

  const getSessionsForUser = async () => {
    setLoading(true);
    const response = await getSessions(profile._id, profile.role);
    if (response?.error) {
      setErrorText(response?.error);
    } else {
      setSessions(response?.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    getSessionsForUser();
  }, [profile]);

  const handleTabChange = (event, newTab) => {
    setCurrentTab(newTab);
  };

  return (
    <SectionCard>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          {errorText ? (
            <Alert severity="error">{errorText}</Alert>
          ) : sessions && (
            <>
              <BasicTabs
                currentTab={currentTab}
                handleTabChange={handleTabChange}
                tabs={['Pending', 'Accepted', 'Rejected', 'Expired']}
              />
              <TabPanel
                value={currentTab}
                index={0}
                className="max-h-[400px] md:max-h-[500px] overflow-y-scroll flex flex-col space-y-4"
              >
                {Object.keys(sessions.pending).length ? (
                  Object.keys(sessions.pending)
                    .map((date) => (
                      <div>
                        <div className="flex flex-row space-x-2 text-2xl items-start text-gray-500">
                          <CalendarMonth color="inherit" fontSize="inherit" />
                          <p className="font-generalSansRegular mt-[-3px]">{formatSessionDate(date)}</p>
                        </div>
                        <div className="p-0 gap-3 lg:gap-10 grid grid-cols-1 lg:grid-cols-2 mx-3 md:mx-10">
                          {sessions.pending[date].map((session) => (
                            <Session
                              key={session._id}
                              session={session}
                              getSessionsForUser={getSessionsForUser}
                              hasDialogButtons={session.mentor._id === currentUser.id}
                            />
                          ))}
                        </div>
                      </div>
                    ))
                ) : (
                  <p>No sessions to display</p>
                )}
              </TabPanel>
              <TabPanel
                value={currentTab}
                index={1}
                className="max-h-[400px] md:max-h-[500px] overflow-y-scroll flex flex-col space-y-4"
              >
                {Object.keys(sessions.accepted).length ? (
                  Object.keys(sessions.accepted)
                    .map((date) => (
                      <div>
                        <div className="flex flex-row space-x-2 text-2xl items-start text-gray-500">
                          <CalendarMonth color="inherit" fontSize="inherit" />
                          <p className="font-generalSansRegular mt-[-3px]">{formatSessionDate(date)}</p>
                        </div>
                        <div className="p-0 gap-3 lg:gap-10 grid grid-cols-1 lg:grid-cols-2 mx-3 md:mx-10">
                          {sessions.accepted[date].map((session) => (
                            <Session key={session._id} session={session} isAccepted />

                          ))}
                        </div>
                      </div>
                    ))
                ) : (
                  <p>No sessions to display</p>
                )}
              </TabPanel>
              <TabPanel
                value={currentTab}
                index={2}
                className="max-h-[400px] md:max-h-[500px] overflow-y-scroll flex flex-col space-y-4"
              >
                {Object.keys(sessions.rejected).length ? (
                  Object.keys(sessions.rejected)
                    .map((date) => (
                      <div>
                        <div className="flex flex-row space-x-2 text-2xl items-start text-gray-500">
                          <CalendarMonth color="inherit" fontSize="inherit" />
                          <p className="font-generalSansRegular mt-[-3px]">{formatSessionDate(date)}</p>
                        </div>
                        <div className="p-0 gap-3 lg:gap-10 grid grid-cols-1 lg:grid-cols-2 mx-3 md:mx-10">
                          {sessions.rejected[date].map((session) => (
                            <Session key={session._id} session={session} />

                          ))}
                        </div>
                      </div>
                    ))
                ) : (
                  <p>No sessions to display</p>
                )}
              </TabPanel>
              <TabPanel
                value={currentTab}
                index={3}
                className="max-h-[400px] md:max-h-[500px] overflow-y-scroll flex flex-col space-y-4"
              >
                {Object.keys(sessions.expired).length ? (
                  Object.keys(sessions.expired)
                    .map((date) => (
                      <div>
                        <div className="flex flex-row space-x-2 text-2xl items-start text-gray-500">
                          <CalendarMonth color="inherit" fontSize="inherit" />
                          <p className="font-generalSansRegular mt-[-3px]">{formatSessionDate(date)}</p>
                        </div>
                        <div className="p-0 gap-3 lg:gap-10 grid grid-cols-1 lg:grid-cols-2 mx-3 md:mx-10">
                          {sessions.expired[date].map((session) => (
                            <Session key={session._id} session={session} />

                          ))}
                        </div>
                      </div>
                    ))
                ) : (
                  <p>No sessions to display</p>
                )}
              </TabPanel>
            </>
          )}
        </>
      )}
    </SectionCard>
  );
}

export default Sessions;
