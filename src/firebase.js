import firebase from 'firebase';
// Initialize Firebase
const config = {
  apiKey: 'AIzaSyA2xPEbpp4bgi9A9_08NCEt__9oiNQkoOg',
  authDomain: 'q3-vibez.firebaseapp.com',
  databaseURL: 'https://q3-vibez.firebaseio.com',
  projectId: 'q3-vibez',
  storageBucket: 'q3-vibez.appspot.com',
  messagingSenderId: '1099444640759',
};
firebase.initializeApp(config);

export default firebase;
