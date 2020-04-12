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

var login_get = (req, res, next) => {
  res.render("login", {});
};

var login_post = (req, res, next) => {
  // Obtain User Info
  const email = req.body.email;
  const password = req.body.loginPassword;

  console.log(email, password);

  const auth = firebase.auth();
  auth.signInWithEmailAndPassword(email, password).then((credential) => {
    console.log(credential.user);
    //reset form data here
  });
};

module.exports = {
  login_get: login_get,
};
