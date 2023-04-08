import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDh7yW7koTXUoDejyk0NMBcwuAM24ewbsc",
    authDomain: "hard-e5a3d.firebaseapp.com",
    projectId: "hard-e5a3d",
    storageBucket: "hard-e5a3d.appspot.com",
    messagingSenderId: "241203842960",
    appId: "1:241203842960:web:55efb49ed50df18a036d15",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const googleAuthProvider = new GoogleAuthProvider();