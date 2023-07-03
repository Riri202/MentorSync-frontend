/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';
import auth from './auth';
import message from './message';

export default combineReducers({
  auth,
  message,
});
