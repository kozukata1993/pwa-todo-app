import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/firebase-storage';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'todo-app-4850f.firebaseapp.com',
  projectId: 'todo-app-4850f',
  appID: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(config);
export const { auth, firestore, functions, storage } = firebase;
