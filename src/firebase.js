import React from "react";
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyCTl4JdUY9k2OTN0NdxaO4PjZJFnwVtqV8",
  authDomain: "soothe-8075f.firebaseapp.com",
  projectId: "soothe-8075f",
  storageBucket: "soothe-8075f.appspot.com",
  messagingSenderId: "944158896637",
  appId: "1:944158896637:web:800263753be38e96d26994"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

// Google Login Setup
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
