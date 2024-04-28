import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCD3WGzLdG0iwAIra6SmVqqrU4h6-fXUY4",
  authDomain: "dairy-farm-f25c7.firebaseapp.com",
  projectId: "dairy-farm-f25c7",
  storageBucket: "dairy-farm-f25c7.appspot.com",
  messagingSenderId: "11392940666",
  appId: "1:11392940666:web:288684cc50dd232153d9c3",
  measurementId: "G-XWWNYHB7RK"
};

firebase.initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);