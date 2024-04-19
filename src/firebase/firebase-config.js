import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB5NYNGO2vT1SQycOyuu_D7vmGgZ1ZMJMQ",
  authDomain: "auth-assignment-e5429.firebaseapp.com",
  projectId: "auth-assignment-e5429",
  storageBucket: "auth-assignment-e5429.appspot.com",
  messagingSenderId: "420658926283",
  appId: "1:420658926283:web:f114b023d7a0e79233014e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Auth = getAuth(app);
export const storage = getStorage(app);
export default Auth;
