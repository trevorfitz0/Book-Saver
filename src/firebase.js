import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBWrbiC4jPbV97VFDYIORtMvSnnOPst8J8",
  authDomain: "book-saver-2bef8.firebaseapp.com",
  projectId: "book-saver-2bef8",
  storageBucket: "book-saver-2bef8.appspot.com",
  messagingSenderId: "1071180416528",
  appId: "1:1071180416528:web:1be360f9d7aac918346c95",
  measurementId: "G-49PFBQ429Y"
}

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };