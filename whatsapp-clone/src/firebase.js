import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAmaM_-8MQm1nU4Rm4_4EfLdxD7ik0CHAo",
    authDomain: "whatsapp-clone-2c686.firebaseapp.com",
    projectId: "whatsapp-clone-2c686",
    storageBucket: "whatsapp-clone-2c686.appspot.com",
    messagingSenderId: "195909459922",
    appId: "1:195909459922:web:33b3adad24cae701efb20b",
    measurementId: "G-DJ04W9PNM2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;