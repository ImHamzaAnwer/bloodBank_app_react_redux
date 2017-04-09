import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyC6fewk3LM8TWKRKrq4GhmDq4XPCDVNSi8",
    authDomain: "blood-bank-app-reactredux.firebaseapp.com",
    databaseURL: "https://blood-bank-app-reactredux.firebaseio.com",
    projectId: "blood-bank-app-reactredux",
    storageBucket: "blood-bank-app-reactredux.appspot.com",
    messagingSenderId: "938774298715"
  };
  
firebase.initializeApp(config);

export default firebase;