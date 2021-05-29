import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBN_FLDgL4ZcypvbcPURmMP_Uv-uSKnY9s",
  authDomain: "pwa-ad782.firebaseapp.com",
  projectId: "pwa-ad782",
  storageBucket: "pwa-ad782.appspot.com",
  messagingSenderId: "990663954593",
  appId: "1:990663954593:web:e5f14b81c9d7f3f5c4e0e0"
};
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const db = fire.firestore();
export default db;
