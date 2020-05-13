import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCFsaWJx36SVM6FpAc5OAmX2wNYm6kfPj4",
    authDomain: "dragana-jevtovic.firebaseapp.com",
    databaseURL: "https://dragana-jevtovic.firebaseio.com",
    projectId: "dragana-jevtovic",
    storageBucket: "dragana-jevtovic.appspot.com",
    messagingSenderId: "1056571175717",
    appId: "1:1056571175717:web:401304b644777efc2360cc",
    measurementId: "G-L0P5EQ9NE5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.firestore();

export default firebase;