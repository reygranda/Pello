import firebase from 'firebase/app';

require('firebase/auth');
var firebaseApp;

if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyD35hjSphnD4nkOMUisUM2OO4aKfspd3bA',
    authDomain: 'pello-d09d3.firebaseapp.com',
    projectId: 'pello-d09d3',
    storageBucket: 'pello-d09d3.appspot.com',
    messagingSenderId: '555939010580',
    appId: '1:555939010580:web:d5a51f9ee91c81cbceef01',
  });
} else {
  firebaseApp = firebase.app();
}

export const auth = firebaseApp.auth();
export default firebaseApp;
