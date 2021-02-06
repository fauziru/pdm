./src/main.ts

import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyAalQVwufR7gOcMcJrBoNeo0KRS73ykL8Y",
  authDomain: "pmd7-d3f6f.firebaseapp.com",
  projectId: "pmd7-d3f6f",
  storageBucket: "pmd7-d3f6f.appspot.com",
  messagingSenderId: "738395183289",
  appId: "1:738395183289:web:761ca73b710f3f20a16368",
  measurementId: "G-SF6ZHZMLXN"
}; // 4. Get Firebase Configuration
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.usePublicVapidKey("xxxxxxx"); // 1. Generate a new key pair

// Request Permission of Notifications
messaging.requestPermission().then(() => {
  console.log('Notification permission granted.');

  // Get Token
  messaging.getToken().then((token) => {
    console.log(token)
  })
}).catch((err) => {
  console.log('Unable to get permission to notify.', err);
});