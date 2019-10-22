import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCqyGAK_5FwQ4Yd_i8sHHB1o_wqDbJ8Jd8",
  authDomain: "labassignment-d10d3.firebaseapp.com",
  databaseURL: "https://labassignment-d10d3.firebaseio.com",
  projectId: "labassignment-d10d3",
  storageBucket: "labassignment-d10d3.appspot.com",
  messagingSenderId: "627570342046"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
