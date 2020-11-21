import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBwiPDDaRIyugqw1ZWG3Z2ysPaJ00WnuwU",
    authDomain: "discord-clone-e5eb0.firebaseapp.com",
    databaseURL: "https://discord-clone-e5eb0.firebaseio.com",
    projectId: "discord-clone-e5eb0",
    storageBucket: "discord-clone-e5eb0.appspot.com",
    messagingSenderId: "1031303468736",
    appId: "1:1031303468736:web:2597e6ee49069c3d5aff25",
    measurementId: "G-DHWX7M1608"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
