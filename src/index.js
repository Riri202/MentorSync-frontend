/* eslint-disable comma-dangle */
/* eslint-disable import/named */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable prettier/prettier */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { PersistGate } from 'redux-persist/integration/react';
import { createTheme, ThemeProvider } from '@mui/material';
import reportWebVitals from './reportWebVitals';
import { store, persistor } from './redux/store';
import App from './App';

const muiTheme = createTheme({
  typography: {
    fontFamily: [
      'GeneralSans-medium',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      light: '#37BDF8', // tailwind blue-400
      main: '#2464EB', // tailwind blue-600
      dark: '#1E40AF', // tailwind blue-800
      contrastText: '#fff',
    },
    // secondary: {
    //   light: '#4da9b7',
    //   main: '#017a87',
    //   dark: '#004e5a',
    //   contrastText: '#000',
    // },
  },
  button: {
    textTransform: "none",
  } });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={muiTheme}>
          <App />
        </ThemeProvider>
      </LocalizationProvider>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
