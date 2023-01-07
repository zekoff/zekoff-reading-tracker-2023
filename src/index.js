import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import { CssBaseline } from '@mui/material';
import { firebaseConfigProd, firebaseConfigDev } from './firebaseConfigs';
import App from './App';

let firebaseConfig = null;
switch (process.env.NODE_ENV) {
  case 'development':
    firebaseConfig = firebaseConfigDev;
    break;
  case 'production':
    firebaseConfig = firebaseConfigProd;
    break;
  default:
    firebaseConfig = firebaseConfigDev;
}
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>
);
