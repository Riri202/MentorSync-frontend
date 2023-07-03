import axios from "axios";

// axios.create({
//   baseURL: process.env.REACT_API_URL || 'http://localhost:4000',
// });

axios.defaults.baseURL = process.env.REACT_API_URL || 'http://localhost:4000';

export default axios;
