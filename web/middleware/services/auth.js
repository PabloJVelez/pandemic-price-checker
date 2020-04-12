var firebase = require("firebase/app");

require("firebase/auth");
require("firebase/firestore");
require("dotenv").config();

const { firebaseConfig } = require("../../../config/firebase");
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
module.exports = { auth };
// const db = firebase.firestore();
