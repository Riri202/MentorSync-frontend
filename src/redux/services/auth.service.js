/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
/* eslint-disable prefer-template */
/* eslint-disable prettier/prettier */
import axios from 'axios';

const API_URL = "https://freementors22.herokuapp.com/auth/";

const signup = (username, email, password) => {
  return (
    axios.post(API_URL + "signup", {
      username,
      email,
      password,
    })
  );
};

const signin = (email, password) => {
  return (
    axios.post(API_URL + "signin", {
      email,
      password,
    }).then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    })
  );
};
const signout = () => {
  localStorage.removeItem("user");
};

export default {
  signin,
  signout,
  signup,
};
