import axios from './axios';

export const getMentors = async () => {
  try {
    const { data } = await axios.get('/mentors');
    return data;
  } catch (error) {
    console.log(error);
    return { error: error.response?.data?.message || error.message };
  }
};
