import React from 'react';
import * as firebase from 'firebase'; 


var firebaseConfig = {
    apiKey: "AIzaSyBUnNvz45pltnIPZtFUcd3Bk1TWmgiQkY4",
    authDomain: "financial-3ce18.firebaseapp.com",
    databaseURL: "https://financial-3ce18.firebaseio.com",
    projectId: "financial-3ce18",
    storageBucket: "financial-3ce18.appspot.com",
    messagingSenderId: "1004303684533",
    appId: "1:1004303684533:web:5577822ba34d8b58fa7ffc",
    measurementId: "G-S53TWCE2ZB"
  };
  
  firebase.initializeApp(firebaseConfig);

 
  export default firebase;
  