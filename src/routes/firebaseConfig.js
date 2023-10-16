import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDdKR8oAj-VuXMJ1kzRFdn-OeZEOGmvtyA",
  authDomain: "login-tester-cba36.firebaseapp.com",
  projectId: "login-tester-cba36",
  storageBucket: "login-tester-cba36.appspot.com",
  messagingSenderId: "621470981047",
  appId: "1:621470981047:web:fc5fa6a6f772f563862632",
  measurementId: "G-5DXQ5V2LCM"
};

const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
export const googleProvider = new GoogleAuthProvider();
const analytics = getAnalytics(app);