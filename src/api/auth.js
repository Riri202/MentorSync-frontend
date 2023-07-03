/* eslint-disable dot-notation */
/* eslint-disable import/prefer-default-export */
import axios from "./axios";

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else delete axios.defaults.headers.common["Authorization"];
};

export const signin = async (body) => {
  const { data } = await axios.post("/auth/signin", body);
  return data;
};
