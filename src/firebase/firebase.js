import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyCY6EZ9VzahZ25By35N66Bm-Rt0I3-nNyI",
    authDomain: "todo-app-react-7acd7.firebaseapp.com",
    databaseURL: "https://todo-app-react-7acd7.firebaseio.com",
    projectId: "todo-app-react-7acd7",
    storageBucket: "todo-app-react-7acd7.appspot.com",
    messagingSenderId: "334234985197"
  };
  
firebase.initializeApp(config);

export default firebase;