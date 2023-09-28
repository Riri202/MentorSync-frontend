import { useEffect, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import { Alert, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { TimePicker } from '@mui/x-date-pickers';
import { format } from 'date-fns';
import SectionCard from '../profile/components/SectionCard';
import { getMentorSchedule, updateMentorSchedule } from '../../api/session';

const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}
const DayOfWeek = ({ day }) => {
  const {
    dayOfWeek,
    isAvailable,
    _id: availabilityId,
    startTime: defaultStartTime,
    endTime: defaultEndTime,
    mentor,
  } = day;

  const { handleSubmit, watch, control, reset } = useForm({
    defaultValues: {
      formData: {
        isAvailable,
        startTime: new Date(`2022-04-17T${defaultStartTime}`), // mui timepicker value must be in this format
        endTime: new Date(`2022-04-17T${defaultEndTime}`),
      },
    },
  });

  const [errorText, setErrorText] = useState('');
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const onSubmit = async (data) => {
    const { formData } = data;

    const response = await updateMentorSchedule(mentor._id, {
      startTime: format(formData.startTime, 'HH:mm'),
      endTime: format(formData.endTime, 'HH:mm'),
      dayOfWeek,
      isAvailable: formData.isAvailable,
      availabilityId,
    });
    if (response?.error) {
      setErrorText(response?.error);
      reset({
        formData: {
          isAvailable,
          startTime: new Date(`2022-04-17T${defaultStartTime}`), // mui timepicker value must be in this format
          endTime: new Date(`2022-04-17T${defaultEndTime}`),
        },
      });
    } else {
      setOpenSnackBar(true);
    }
  };

  useEffect(() => {
    const submit = watch(handleSubmit(onSubmit));
    return () => submit.unsubscribe();
  }, [handleSubmit, watch]);

  return (
    <>
      {errorText && <Alert severity="error">{errorText}</Alert>}
      <form>
        <Controller
          control={control}
          name="formData"
          render={({ field: { onChange, value } }) => (
            <div className="flex flex-col md:flex-row gap-5 h-auto md:h-[100px]">
              <div className="flex flex-row items-center space-x-2 w-28">
                <Checkbox
                  id="isAvailable"
                  defaultChecked={isAvailable}
                  onChange={(event) => {
                    onChange({ ...value, isAvailable: event.target.checked });
                  }}
                  name="isAvailable"
                />
                <p className="font-bold tracking-wide capitalize">
                  {daysOfWeek[dayOfWeek]}
                </p>
              </div>
              {value.isAvailable ? (
                <div className="flex flex-row gap-4 items-center pl-3 md:pl-0">
                  <TimePicker
                    ampm={false}
                    defaultValue={new Date(`2022-04-17T${defaultStartTime}`)}
                    name="startTime"
                    onChange={(newValue) => {
                      onChange({ ...value, startTime: newValue });
                    }}
                    label="From"
                  />
                  -
                  <TimePicker
                    ampm={false}
                    defaultValue={new Date(`2022-04-17T${defaultEndTime}`)}
                    name="endTime"
                    onChange={(newValue) => {
                      onChange({ ...value, endTime: newValue });
                    }}
                    label="To"
                  />
                </div>
              ) : (
                <p className="font-extralight text-gray-500 flex flex-row items-center pl-3 md:pl-0">
                  Unavailable
                </p>
              )}
            </div>
          )}
        />
      </form>
      <Snackbar
        open={openSnackBar}
        onClose={() => setOpenSnackBar(false)}
        TransitionComponent={SlideTransition}
        autoHideDuration={1000}
        message="Changes saved"
        key="save success"
      />
    </>
  );
};

function Availability() {
  const params = useParams();
  const { mentorId } = params;
  const [loading, setLoading] = useState(false);
  const [availableDays, setAvailableDays] = useState([]);
  const [errorText, setErrorText] = useState('');

  const getAvailableDays = async () => {
    setLoading(true);
    const response = await getMentorSchedule(mentorId);
    if (response?.error) {
      setErrorText(response?.error);
    } else {
      setAvailableDays(response?.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAvailableDays();
  }, [mentorId]);
  return (
    <div className="p-2 xs:p-6 md:p-16 xl:px-40 2xl:px-60 flex flex-col mt-11 bg-[#F3F2EE] min-h-screen">
      <SectionCard>
        <p className="text-4xl font-semibold tracking-wide border-b pb-2">Availability</p>
        {loading ? (
          <CircularProgress />
        ) : errorText ? (
          <Alert severity="error">{errorText}</Alert>
        ) : (
          <>
            <p className="text-xl font-medium text-gray-500 pt-4">Set your working hours</p>
            <div className="flex flex-col space-y-3 divide-y">
              {availableDays.map((day) => (
                <DayOfWeek key={day._id} day={day} />
              ))}
            </div>
          </>
        )}
      </SectionCard>
    </div>
  );
}

export default Availability;
