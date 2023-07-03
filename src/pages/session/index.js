/* eslint-disable react/destructuring-assignment */
import { AccessTime } from '@mui/icons-material';
import { Paper } from '@mui/material';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import format from 'date-fns/format';
import { getMentorSchedule, getMentorTimeSlots } from '../../api/session';

const resposiveFontSize = { sm: '12px', md: '14px', lg: '16px' };
const resposiveGridGap = { sm: '8px', md: '12px', lg: '18px' };

function Session() {
  const [value, setValue] = useState(new Date());
  const [searchParams, setSearchParams] = useSearchParams();
  const [availableDays, setAvailableDays] = useState([]);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

  const params = useParams();
  const sessionDate = searchParams.get('date');

  function disableNonAvailableDays(date) {
    return !availableDays.includes(date.getDay());
  }

  const handleSetdate = (val) => {
    const formattedDate = format(new Date(val), 'yyyy-MM-dd');
    setSearchParams({ date: formattedDate });
    setValue(val);
  };

  const getAvailableDays = async () => {
    const { data } = await getMentorSchedule(params.mentorId);
    const arr = [];
    data.forEach((item) => {
      arr.push(item.dayOfWeek);
    });
    setAvailableDays(arr);
  };

  const getAvailableTimeSlots = async () => {
    const { data } = await getMentorTimeSlots(params.mentorId, sessionDate);
    console.log(data);
    setAvailableTimeSlots(data);
  };

  useEffect(() => {
    getAvailableDays();
  }, [params.mentorId]);

  useEffect(() => {
    if (sessionDate) {
      getAvailableTimeSlots();
    }
  }, [sessionDate]);
  console.log({ availableTimeSlots });

  return (
    <div className="px-60 flex py-20 mt-11 bg-[#F3F2EE] min-h-screen">
      <Paper className="p-5 grid grid-cols-1 xl:grid-cols-4 gap-12">
        <div className="col-span-1">
          <p>Rita Oladokun</p>
          <p>30 Minute Session</p>
          <div className="p-2 flex flex-row space-x-4 items-center">
            <AccessTime />
            <p>30 min</p>
          </div>
        </div>
        <div className="col-span-1 xl:col-span-2">
          <DateCalendar
            value={value}
            onChange={(newValue) => handleSetdate(newValue)}
            // eslint-disable-next-line react/jsx-no-bind
            shouldDisableDate={disableNonAvailableDays}
            sx={{
              width: '100%',
              maxHeight: '100%',
              '& .MuiDateCalendar-root': {},
              '& .MuiDayCalendar-header ': {
                display: 'grid',
                gridTemplateColumns: 'repeat(7, 1fr)',
                gridColumnGap: resposiveGridGap,
              },
              '& .MuiDayCalendar-weekContainer ': {
                display: 'grid',
                gridTemplateColumns: 'repeat(7, 1fr)',
                gridColumnGap: resposiveGridGap,
              },
              '& .MuiDayCalendar-monthContainer ': {
                display: 'grid',
                gridTemplateRows: 'repeat(7, 1fr)',
                gridRowGap: resposiveGridGap,
                marginTop: 4,
              },
              '& .MuiDayCalendar-slideTransition ': {
                overflowX: 'visible',
                minHeight: '500px',
              },
              '& .MuiPickersDay-root ': {
                fontSize: resposiveFontSize,
                // padding: { sm: 2, md: 3 },
                // color: '#6A7380',
                // backgroundColor: 'rgba(54,132,206,0.34)',
                color: '#1776D1',
              },
              '& .Mui-disabled': {
                fontSize: resposiveFontSize,
                color: '#6A7380',
                backgroundColor: '#fff',
              },
              '& .MuiPickersDay-root:focus.Mui-selected ': {
                backgroundColor: 'rgba(23,119,209,0.2)',
                color: '#1776D1',
                fontWeight: '700px',
              },
              '& .MuiPickersDay-root.Mui-selected ': {
                backgroundColor: 'rgba(23,119,209,0.2)',
                color: '#1776D1',
                fontWeight: '700px',
              },
              '& .MuiPickersDay-root:hover.Mui-selected ': {
                backgroundColor: 'rgba(54,132,206,0.34)',
                color: '#1776D1',
              },
              '& .MuiDayCalendar-weekDayLabel  ': {
                fontSize: resposiveFontSize,
              },
              '& .MuiPickersDay-today': {
                border: '1px solid #1776D1',
              },
              '& .MuiPickersDay-today:not(.Mui-selected) ': {
                border: '1px solid #1776D1',
              },
              '& .MuiPickersCalendarHeader-label': {
                fontSize: resposiveFontSize,
              },
            }}
          />
        </div>
        <div className="col-span-1 flex flex-col space-y-2">
          {sessionDate && availableTimeSlots.length && (
            availableTimeSlots.map((slot) => (
              <div className="flex flex-row justify-center items-center border border-[#1776D1] text-[#1776D1] px-3 py-1 rounded-lg">{slot}</div>
            ))
          )}
        </div>
      </Paper>
    </div>
  );
}

export default Session;
