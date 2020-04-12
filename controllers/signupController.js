var firebase = require("firebase/app");

require("firebase/auth");
require("firebase/firestore");
require("dotenv").config();

var firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  appId: process.env.FIREBASE_APP_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Make Auth and Firestore references
// const auth = firebase.auth();
const db = firebase.firestore();

var signup_controller_get = (req, res, next) => {
  res.render("signup", {});
};

var signup_controller_post = (req, res, next) => {
  // Obtain user info
  const email = req.body.signupEmail;
  const name = req.body.signupName;
  const password = req.body.signupPassword;
  const confirmPassword = req.body.signupConfirmPassword;

  console.log(email, name, password, confirmPassword);

  const auth = firebase.auth();
  auth.createUserWithEmailAndPassword(email, password).then((credential) => {
    console.log(credential.user);
  });
};

module.exports = {
  signup_controller_get: signup_controller_get,
  signup_controller_post: signup_controller_post,
};
