import { legacy_createStore as createStore } from 'redux';
// import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import combineReducers from './reducers/index';

// const middleware = [thunk];
// const store = createStore(combineReducers, applyMiddleware(...middleware));

// export default store;

const persistConfig = {
  key: 'root', // This is the key under which your state will be saved in local storage
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, combineReducers);

// Create the store
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
