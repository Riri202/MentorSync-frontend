/* eslint-disable prettier/prettier */
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// eslint-disable-next-line import/named
import combineReducers from './reducers/index';

const middleware = [thunk];
const store = createStore(combineReducers, applyMiddleware(...middleware));

export default store;
