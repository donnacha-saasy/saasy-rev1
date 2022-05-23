import firebase from 'firebase/compat/app' // doing import firebase from 'firebase' or import * as firebase from firebase is not good practice.
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore';
import axios from 'axios';
import { getAnalytics } from "firebase/analytics";

// Initialize Firebase
let config = {
    apiKey: "AIzaSyBZQiRNuno3942khYJulYOFvqY4-T6GElY",
    authDomain: "test-api-4f3e2.firebaseapp.com",
    databaseURL: "https://test-api-4f3e2-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "test-api-4f3e2",
    storageBucket: "test-api-4f3e2.appspot.com",
    messagingSenderId: "552680396056",
    appId: "1:552680396056:web:9185561009e442b720ba6d"
}

firebase.initializeApp(config)

const db = firebase.firestore()


export { axios, db }