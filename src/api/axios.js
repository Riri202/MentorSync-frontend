import axios from "axios";
// import store from '../redux/store';

axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

axios.interceptors.request.use(
  (config) => {
    // Get the authentication token from your state or localStorage
    // const { user = {} } = store.getState().auth; // Implement this function to retrieve the token
    const user = JSON.parse(localStorage.getItem('user'));
    // Set the token in the Authorization header
    if (user) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = user.token;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default axios;
