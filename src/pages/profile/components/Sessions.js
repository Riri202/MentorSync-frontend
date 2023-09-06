import { useEffect, useState } from 'react';
import { Alert, CircularProgress } from '@mui/material';
import { getSessions } from '../../../api/session';
import SectionCard from './SectionCard';
import BasicTabs from '../../../components/Tabs';
import TabPanel from '../../../components/TabPanel';
import {
  SESSION_STATUS_ACCEPTED,
  SESSION_STATUS_PENDING,
  SESSION_STATUS_REJECTED,
} from '../../../utils/constants';
import Session from './Session';

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
          ) : (
            <>
              <BasicTabs
                currentTab={currentTab}
                handleTabChange={handleTabChange}
                tabs={['Pending', 'Accepted', 'Rejected', 'Expired']}
              />
              <TabPanel
                value={currentTab}
                index={0}
                className="p-0 gap-3 lg:gap-10 grid grid-cols-1 lg:grid-cols-2"
              >
                {sessions?.nonExpiredSessions?.filter(
                  (session) => session.status === SESSION_STATUS_PENDING,
                ).length ? (
                    sessions?.nonExpiredSessions
                      ?.filter(
                        (session) => session.status === SESSION_STATUS_PENDING,
                      )
                      .map((session) => (
                        <Session
                          key={session._id}
                          session={session}
                          getSessionsForUser={getSessionsForUser}
                          hasDialogButtons={session.mentor._id === currentUser.id}
                        />
                      ))
                  ) : (
                    <p>No sessions to display</p>
                  )}
              </TabPanel>
              <TabPanel
                value={currentTab}
                index={1}
                className="p-0 flex flex-col space-y-2"
              >
                {sessions?.nonExpiredSessions?.filter(
                  (session) => session.status === SESSION_STATUS_ACCEPTED
                    && !sessions?.expiredSessions
                      ?.map((item) => item._id)
                      .includes(session._id),
                ).length ? (
                    sessions?.nonExpiredSessions
                      ?.filter(
                        (session) => session.status === SESSION_STATUS_ACCEPTED,
                      )
                      .map((session) => (
                        <Session key={session._id} session={session} />
                      ))
                  ) : (
                    <p>No sessions to display</p>
                  )}
              </TabPanel>
              <TabPanel
                value={currentTab}
                index={2}
                className="p-0 flex flex-col space-y-2"
              >
                {sessions?.nonExpiredSessions?.filter(
                  (session) => session.status === SESSION_STATUS_REJECTED,
                ).length ? (
                    sessions?.nonExpiredSessions
                      ?.filter(
                        (session) => session.status === SESSION_STATUS_REJECTED,
                      )
                      .map((session) => (
                        <Session key={session._id} session={session} />
                      ))
                  ) : (
                    <p>No sessions to display</p>
                  )}
              </TabPanel>
              <TabPanel
                value={currentTab}
                index={3}
                className="p-0 flex flex-col space-y-2"
              >
                {sessions?.expiredSessions?.length ? (
                  sessions?.expiredSessions?.map((session) => (
                    <Session key={session._id} session={session} />
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
