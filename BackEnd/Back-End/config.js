const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyCMhU3QiObhACgfnajZCfH9lTe0RoViCmw",
  authDomain: "projeto-estagio-fortio.firebaseapp.com",
  projectId: "projeto-estagio-fortio",
  storageBucket: "projeto-estagio-fortio.firebasestorage.app",
  messagingSenderId: "409931754239",
  appId: "1:409931754239:web:70a03ae0a635e6b56a3aca",
  measurementId: "G-V7FZSM42SD" // Seu(your) appId
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Cliente");
module.exports = User;

