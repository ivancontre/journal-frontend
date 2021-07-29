import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCzjnba2hv43mXotp3eXRGZoG7vWReHNSw",
    authDomain: "react-app-cursos-a6594.firebaseapp.com",
    projectId: "react-app-cursos-a6594",
    storageBucket: "react-app-cursos-a6594.appspot.com",
    messagingSenderId: "453455526167",
    appId: "1:453455526167:web:f65b1705a185cb96a55f52"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { 
    db,
    googleAuthProvider,
    firebase
};