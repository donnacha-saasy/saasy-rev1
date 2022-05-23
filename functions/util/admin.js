const admin = require('firebase-admin');
const firebaseConfig = require('../util/Config')
const firebase = require('firebase/app');


admin.initializeApp();


const db = admin.firestore();

module.exports = { admin, db };