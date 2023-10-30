import {
  CheckOutlined,
  CloseOutlined,
  CommentOutlined,
  LocalPhoneOutlined,
} from '@mui/icons-material';
import { IconButton, Paper, Tooltip } from '@mui/material';
import UserCard from '../../../components/UserCard';
import { updateSessionStatus } from '../../../api/session';
import { formatHumanReadableDateShort } from '../../../utils/date';
import DialogModal from '../../../components/Dialog';

function Session({ session, getSessionsForUser, hasDialogButtons = false, isAccepted = false }) {
  return (
    <Paper sx={{ borderRadius: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <>
        <div className="text-white bg-[#1776D1] h-[20%] p-3 md:p-6 rounded-t-[20px] flex flex-row divide-x items-center text-xs sm:text-sm md:text-base">
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
              <IconButton style={{ color: '#fff' }} href={`/call/${session._id}`}>
                <LocalPhoneOutlined color="inherit" />
              </IconButton>
            </Tooltip>
            {' '}
          </div>
          )}
        </div>
        <div className="w-full p-6 flex flex-col justify-start space-y-4">
          <UserCard profile={session.mentee} />
          {session?.note && (
          <div className="flex flex-row space-x-1 items-start text-gray-500 text-sm md:text-base">
            <CommentOutlined color="inherit" className="mt-1 mr-2" />
            <p className="">
              {session?.note}
            </p>
          </div>
          )}
        </div>
      </>
      {hasDialogButtons && (
      <div className="flex flex-row divide-x border-t">
        <DialogModal
          title="Are you sure you want to accept?"
          subTitle="This is good"
          btnText="Accept"
          btnVariant="text"
          btnStyle="w-full flex flex-row justify-center items-center"
          dialogStyle="p-3"
          btnIcon={<CheckOutlined color="inherit" />}
          btnCustomColor="success"
          submitAction={async () => updateSessionStatus(session?._id, 'accepted')}
          reload={getSessionsForUser}
        />
        <DialogModal
          title="Are you sure you want to reject?"
          subTitle="This is good"
          btnText="Reject"
          btnVariant="text"
          btnStyle="w-full flex flex-row justify-center items-center"
          dialogStyle="p-3"
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
