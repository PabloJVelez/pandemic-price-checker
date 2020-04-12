const { auth } = require("../web/middleware/services/auth");

var login_get = (req, res, next) => {
  res.render("login", {});
};

var login_post = (req, res, next) => {
  const email = req.body.loginEmail;
  const password = req.body.loginPassword;

  console.log(email, password);

  auth
    .signInWithEmailAndPassword(email, password)
    .then((credential) => {
      console.log(credential.user);
    })
    .then(() => {
      res.redirect("/price-chart");
    });
};

module.exports = {
  login_get: login_get,
  login_post: login_post,
};
