import { AccessTime, CalendarTodayOutlined } from "@mui/icons-material";
import format from "date-fns/format";
import { useEffect, useState } from "react";
import { Alert } from "@mui/material";
import { getUserDetails } from "../../../api";

function MentorDetails({ mentorId, sessionDate = "", sessionTime = "" }) {
  const [mentor, setMentor] = useState();
  const [errorText, setErrorText] = useState('');

  const getMentor = async () => {
    const response = await getUserDetails(mentorId);
    if (response?.error) {
      setErrorText(response?.error);
    } else {
      setMentor(response?.data);
    }
  };

  useEffect(() => {
    getMentor();
  }, []);

  return (
    <div className="flex flex-col space-y-3 xl:mt-12">
      <div>
        {errorText ? (
          <Alert severity="error">
            {errorText}
          </Alert>
        ) : mentor && (
        <>
          <p className="text-gray-500 tracking-wide font-generalSansMedium capitalize text-lg">{`${mentor.firstname} ${mentor.lastname}`}</p>
          <p className="text-2xl font-generalSansRegular">30 Minute Mentorship Session</p>
        </>
        )}
      </div>
      <div className="flex flex-row space-x-2 items-start text-gray-500 !mt-8">
        <AccessTime color="inherit" />
        <p className="font-generalSansRegular">30 min</p>
      </div>
      {sessionDate && sessionTime && (
      <div className="flex flex-row space-x-2 items-start text-gray-500">
        <CalendarTodayOutlined color="inherit" />
        <p className="font-generalSansRegular">{`${sessionTime}, ${format(new Date(sessionDate), 'EEEE, LLLL do, yyyy')}`}</p>
      </div>
      )}
    </div>
  );
}

export default MentorDetails;
