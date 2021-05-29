import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDURAcGKhIh7-zXwsdxnCuBixBZzkbJRYE",
  authDomain: "new-pwa-aecd7.firebaseapp.com",
  projectId: "new-pwa-aecd7",
  storageBucket: "new-pwa-aecd7.appspot.com",
  messagingSenderId: "286101494322",
  appId: "1:286101494322:web:3e402f3c1c61d88d597a2b"
};
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const db = fire.firestore();
export default db;
