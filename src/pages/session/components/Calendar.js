import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { getMentorSchedule } from '../../../api/session';

const resposiveFontSize = { xs: '12px', sm: '14px', lg: '16px' };
const resposiveGridGap = { sm: '8px', md: '12px', lg: '18px' };
const resposiveCalendarHeight = { sm: '150px', md: '180px', lg: '300px' };

function Calendar({ value, handleSelectDate, mentorId }) {
  const [availableDays, setAvailableDays] = useState([]);
  const [loading, setLoading] = useState(false);

  function disableNonAvailableDays(date) {
    return !availableDays.includes(date.getDay());
  }

  const getAvailableDays = async () => {
    setLoading(true);
    const { data } = await getMentorSchedule(mentorId);
    const arr = [];
    data.forEach((item) => {
      arr.push(item.dayOfWeek);
    });
    setAvailableDays(arr);
    setLoading(false);
  };

  useEffect(() => {
    getAvailableDays();
  }, [mentorId]);

  return (
    <DateCalendar
      value={value}
      onChange={(newValue) => handleSelectDate(newValue)}
                      // eslint-disable-next-line react/jsx-no-bind
      shouldDisableDate={disableNonAvailableDays}
      loading={loading}
      renderLoading={() => <CircularProgress />}
      disablePast
      sx={{
        width: '70%',
        maxHeight: '100%',
        minWidth: '280px',
        '& .MuiDateCalendar-root': {
        },
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
          minHeight: resposiveCalendarHeight,
        },
        '& .MuiPickersDay-root ': {
          fontSize: resposiveFontSize,
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
  );
}

export default Calendar;
