import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDevrwySIujnml4WNsI8ezhoDIS9a0b9-4",
  authDomain: "clone-787e1.firebaseapp.com",
  projectId: "clone-787e1",
  storageBucket: "clone-787e1.appspot.com",
  messagingSenderId: "853398558554",
  appId: "1:853398558554:web:a8c534a2820ef98b330563",
  measurementId: "G-FDB0MW3RJP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
