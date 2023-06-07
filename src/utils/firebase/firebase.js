import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXW7bqTc4xqzT7yKUNV4cQ4yQeg7RP5Sw",
  authDomain: "crwn-clothing-db-2ec73.firebaseapp.com",
  projectId: "crwn-clothing-db-2ec73",
  storageBucket: "crwn-clothing-db-2ec73.appspot.com",
  messagingSenderId: "638185404880",
  appId: "1:638185404880:web:f36ffb7dd7ca2cdb56e1d5"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);