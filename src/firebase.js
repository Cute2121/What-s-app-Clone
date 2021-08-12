// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

    const firebaseConfig = {
        apiKey: "AIzaSyD6nz4UCg3IXQjYy2DFhx-OAE9NEhDoMKw",
        authDomain: "clone-688c5.firebaseapp.com",
        projectId: "clone-688c5",
        storageBucket: "clone-688c5.appspot.com",
        messagingSenderId: "711082048272",
        appId: "1:711082048272:web:dd653aa2a7bfb897134395",
        measurementId: "G-35GYK54QNN",
      };
   
      const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;