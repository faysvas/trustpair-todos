// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCL9VkTMjJsHIr9-LCFgCAyYWBXjVfa6KA',
  authDomain: 'trustpair-todos.firebaseapp.com',
  projectId: 'trustpair-todos',
  storageBucket: 'trustpair-todos.appspot.com',
  messagingSenderId: '967417200103',
  appId: '1:967417200103:web:cc9bfb89366b6d2bddd142',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log('auth ', auth);
const db = getFirestore(app);
export { auth, db };
