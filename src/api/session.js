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
export const createSession = async (body) => {
  try {
    const { data } = await axios.post(`/sessions`, body);
    return data;
  } catch (error) {
    console.log(error);
    return { error: error.response?.data?.message || error.message };
  }
};

export const getSession = async (sessionId) => {
  try {
    const { data } = await axios.get(`/sessions/${sessionId}`);
    return data;
  } catch (error) {
    console.log(error);
    return { error: error.response?.data?.message || error.message };
  }
};
export const getSessions = async (userId, role) => {
  try {
    const { data } = await axios.get(`/sessions`, { params: { userId, role } });
    return data;
  } catch (error) {
    console.log(error);
    return { error: error.response?.data?.message || error.message };
  }
};
export const updateSessionStatus = async (sessionId, status) => {
  try {
    const { data } = await axios.patch(`/sessions/${sessionId}`, { status });
    return data;
  } catch (error) {
    console.log(error);
    return { error: error.response?.data?.message || error.message };
  }
};

export const getExpiredSessions = async () => {
  try {
    const { data } = await axios.get('/sessions/expired');
    return data;
  } catch (error) {
    console.log(error);
    return { error: error.response?.data?.message || error.message };
  }
};

export const reviewSession = async (body) => {
  try {
    const { data } = await axios.post('/sessions/review', body);
    return data;
  } catch (error) {
    console.log(error);
    return { error: error.response?.data?.message || error.message };
  }
};
export const getReviewsForSessions = async () => {
  try {
    const { data } = await axios.get('/sessions/review');
    return data;
  } catch (error) {
    console.log(error);
    return { error: error.response?.data?.message || error.message };
  }
};
