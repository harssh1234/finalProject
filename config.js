import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCOMYijrcEqvYAirSvWdMcZHZWKZ2oEz90",
    authDomain: "finalproject-b8d1a.firebaseapp.com",
    projectId: "finalproject-b8d1a",
    storageBucket: "finalproject-b8d1a.appspot.com",
    messagingSenderId: "856665749507",
    appId: "1:856665749507:web:cb9a5ee89a2976be767636"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();