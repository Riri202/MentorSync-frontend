import axios from './axios';

export const getMentorTimeSlots = async (mentorId, date) => {
  try {
    const { data } = await axios.get(`/mentors/${mentorId}/timeslots`, { params: { date } });
    return data;
  } catch (error) {
    console.log(error);
    return { error: error.response?.data?.message || error.message };
  }
};
export const getMentorSchedule = async (mentorId, date) => {
  try {
    const { data } = await axios.get(`/mentors/${mentorId}/schedule`, { params: { date } });
    return data;
  } catch (error) {
    console.log(error);
    return { error: error.response?.data?.message || error.message };
  }
};
export const createSession = async (options) => {
  try {
    const { mentor, note, sessionDate, time } = options;
    const { data } = await axios.post(`/session`, { params: { mentor, note, sessionDate, time } });
    return data;
  } catch (error) {
    console.log(error);
    return { error: error.response?.data?.message || error.message };
  }
};
