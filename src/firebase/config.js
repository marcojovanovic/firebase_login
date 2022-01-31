import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDBDYSpMNOT_9F_Jl2icKnWdfO1cyhaxBQ',
  authDomain: 'mymoney-1b74f.firebaseapp.com',
  projectId: 'mymoney-1b74f',
  storageBucket: 'mymoney-1b74f.appspot.com',
  messagingSenderId: '1004033398483',
  appId: '1:1004033398483:web:7953e9dcf937f58710a626',
};

// init firebase

firebase.initializeApp(firebaseConfig);

// init service

const projectFirestore = firebase.firestore();
const  projectAuth = firebase.auth()

export { projectFirestore, projectAuth };
