const { auth } = require("../web/middleware/services/auth");

var signup_controller_get = (req, res, next) => {
  res.render("signup", {});
};

var signup_controller_post = (req, res, next) => {
  const email = req.body.signupEmail;
  const name = req.body.signupName;
  const password = req.body.signupPassword;
  const confirmPassword = req.body.signupConfirmPassword;

  console.log(email, name, password, confirmPassword);

  auth
    .createUserWithEmailAndPassword(email, password)
    .then((credential) => {
      console.log(credential.user);
    })
    .then(() => {
      res.redirect("/price-chart");
    });
};

module.exports = {
  signup_controller_get: signup_controller_get,
  signup_controller_post: signup_controller_post,
};
