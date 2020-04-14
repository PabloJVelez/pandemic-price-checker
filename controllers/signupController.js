const { auth } = require("../web/middleware/services/auth");
const { check } = require("express-validator");
const {
  verifyPassword,
} = require("../web/middleware/validation/verifyPassword");

var signup_controller_get = (req, res, next) => {
  res.render("signup", {});
};

var signup_controller_post = (req, res, next) => {
  // const email = req.body.signupEmail;
  // const name = req.body.signupName;
  // const password = req.body.signupPassword;
  // const confirmPassword = req.body.signupConfirmPassword;

  //TODO: validator for confirmPassword

  auth
    .createUserWithEmailAndPassword(
      req.body.signupEmail,
      req.body.signupPassword
    )
    .then((credential) => {
      res.redirect("/price-chart");
    })
    .catch((err) => {
      res.render("signup", {
        err: err.message,
      });
    });
};

module.exports = {
  signup_controller_get: signup_controller_get,
  signup_controller_post: signup_controller_post,
};
