/* eslint-disable prettier/prettier */
/* eslint-disable func-names */
/* eslint-disable default-param-last */
import {
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
  SIGNOUT,
} from '../actions/types';

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SIGNIN_SUCCESS:
      return {
        ...state,
        isLoggedin: true,
        user: payload.user,
      };
    case SIGNIN_FAILURE:
      return {
        ...state,
        isLoggedin: false,
        user: null,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoggedin: true,
        user: payload.user,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoggedin: false,
      };
    case SIGNOUT:
      return {
        ...state,
        isLoggedin: false,
        user: null,
      };
    default:
      return state;
  }
}
