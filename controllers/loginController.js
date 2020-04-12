const { auth } = require("../web/middleware/services/auth");

var login_get = (req, res, next) => {
  res.render("login", {});
};

var login_post = (req, res, next) => {
  // Obtain User Info
  const email = req.body.email;
  const password = req.body.loginPassword;

  console.log(email, password);

  auth.signInWithEmailAndPassword(email, password).then((credential) => {
    console.log(credential.user);
    //reset form data here
  });
};

module.exports = {
  login_get: login_get,
};
