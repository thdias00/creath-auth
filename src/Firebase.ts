import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyByC5Fv5F7VzHYO9ODsN5EHcEbFwaOYJQY",
  authDomain: "creathauth.firebaseapp.com",
  projectId: "creathauth",
  storageBucket: "creathauth.appspot.com",
  messagingSenderId: "1044377287947",
  appId: "1:1044377287947:web:6bd48c7ba7ef4e1651760e",
  measurementId: "G-2BMBMEFLLM"
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app)

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName as string;
      localStorage.setItem("@DesafioCreath:user", name);
    })
    .catch((error) => {
      console.log(error);
    });
};