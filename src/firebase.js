import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDRAro7Kz4ujNPHPWd5iybHAWWXQ-BfvLE",
  authDomain: "facebook-ac1c6.firebaseapp.com",
  databaseURL: "https://facebook-ac1c6.firebaseio.com",
  projectId: "facebook-ac1c6",
  storageBucket: "facebook-ac1c6.appspot.com",
  messagingSenderId: "749112117817",
  appId: "1:749112117817:web:d3a24fca69775b5eb4dbe8",
  measurementId: "G-XMKLHLEGCG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db  = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()


export {db, auth, provider}
