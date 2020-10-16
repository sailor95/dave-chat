import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyB6g8KySiT_YTLLX2LdYN_L3q2ZdgV358w',
  authDomain: 'ninja-chat-9138d.firebaseapp.com',
  databaseURL: 'https://ninja-chat-9138d.firebaseio.com',
  projectId: 'ninja-chat-9138d',
  storageBucket: 'ninja-chat-9138d.appspot.com',
  messagingSenderId: '633286601030',
  appId: '1:633286601030:web:0b244ca49c2e490eefdd47',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
