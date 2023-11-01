/* eslint-disable no-unused-vars */
import {
  CheckOutlined,
  CloseOutlined,
  CommentOutlined,
  LocalPhoneOutlined,
} from '@mui/icons-material';
import { IconButton, Paper, Tooltip } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserCard from '../../../components/UserCard';
import { updateSessionStatus } from '../../../api/session';
import { formatHumanReadableDateShort } from '../../../utils/date';
import DialogModal from '../../../components/Dialog';

function Session({ session, getSessionsForUser, hasDialogButtons = false, isAccepted = false }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const textClass = isExpanded ? '' : 'multiline-ellipsis';
  const maxLines = isMobile ? 3 : 5;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 418);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Paper sx={{ borderRadius: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: '17px 0px', border: '1px solid #E0DFDB' }} elevation={0}>
      <div>
        <div className="text-white font-generalSansRegular bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 h-[54.4px] sm:h-[61.59px] p-3 md:p-6 rounded-t-[20px] flex flex-row divide-x items-center text-xs sm:text-sm md:text-base">
          <p className="px-2">30 min</p>
          <p className="px-2">
            {`${formatHumanReadableDateShort(
              // eslint-disable-next-line comma-dangle
              session?.sessionDate
            )}`}
          </p>
          {isAccepted && (
          <div className="px-2">
            <Tooltip title={`Start a call with ${session.mentee.firstname} ${session.mentee.lastname}`}>
              <Link to={`/call/${session._id}`}>
                <IconButton style={{ color: '#fff' }}>
                  <LocalPhoneOutlined color="inherit" />
                </IconButton>
              </Link>
            </Tooltip>
            {' '}
          </div>
          )}
        </div>
        <div className="w-full p-6 flex flex-col justify-start space-y-4">
          <UserCard profile={session.mentee} />
          {session?.note && (
            <>
              <div className="flex flex-row space-x-1 items-start text-gray-500 text-sm md:text-base overflow-y-scroll h-28 font-generalSansRegular ml-2">
                <CommentOutlined color="inherit" className="mt-1 mr-2" />
                <p className={`overflow-hidden ${textClass}`}>
                  {session?.note}
                </p>
              </div>
              <div className="flex justify-end">
                {session?.note.split(' ').length > maxLines * 5 && (
                <button
                  className="text-blue-500 cursor-pointer text-sm"
                  onClick={toggleExpansion}
                  type="button"
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                </button>
                )}

              </div>
            </>
          )}
        </div>
      </div>
      {hasDialogButtons && (
      <div className="flex flex-row divide-x border-t">
        <DialogModal
          title="Accept Mentorship Session Request"
          subTitle="By accepting this session request, you are committing to a valuable mentorship experience. Your guidance can make a significant difference in the mentee's life. Do you want to accept this mentorship session request?"
          btnText="Accept"
          btnVariant="text"
          btnStyle="w-full flex flex-row justify-center items-center"
          dialogStyle="p-3"
          fullWidth
          maxWidth="sm"
          btnIcon={<CheckOutlined color="inherit" />}
          btnCustomColor="success"
          submitAction={async () => updateSessionStatus(session?._id, 'accepted')}
          reload={getSessionsForUser}
        />
        <DialogModal
          title="Reject Mentorship Session Request"
          subTitle="Rejecting this session request is an important decision. While it's okay to decline, please take a moment to think about the potential missed opportunities for growth and learning that this session could offer. We encourage thoughtful consideration before proceeding. Do you want to reject this mentorship session request?"
          btnText="Reject"
          btnVariant="text"
          btnStyle="w-full flex flex-row justify-center items-center"
          dialogStyle="p-3"
          fullWidth
          maxWidth="sm"
          btnIcon={<CloseOutlined color="inherit" />}
          btnCustomColor="error"
          submitAction={async () => updateSessionStatus(session?._id, 'rejected')}
          reload={getSessionsForUser}
        />
      </div>
      )}

    </Paper>
  );
}

export default Session;
