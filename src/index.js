import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import { CssBaseline } from '@mui/material';
import App from './App';

const firebaseConfig = {
  apiKey: "AIzaSyDpbEYb22zmD4hztG2dfXr25XIhi33yhS8",
  authDomain: "zekoff-reading-tracker-2023.firebaseapp.com",
  projectId: "zekoff-reading-tracker-2023",
  storageBucket: "zekoff-reading-tracker-2023.appspot.com",
  messagingSenderId: "650681229029",
  appId: "1:650681229029:web:89d2ac24394b7801ec7e0c"
};
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>
);
