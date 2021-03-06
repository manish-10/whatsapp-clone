// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyACUzaBXhbwP_QaP0wevZXZU6O1csMsqw4",
    authDomain: "whatsapp-clone-d532b.firebaseapp.com",
    projectId: "whatsapp-clone-d532b",
    storageBucket: "whatsapp-clone-d532b.appspot.com",
    messagingSenderId: "690663159316",
    appId: "1:690663159316:web:c78a21cd789c15ae1fd901",
    measurementId: "G-VN5809N27C"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth= firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};
  export default db;