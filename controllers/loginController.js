const { auth } = require("../web/middleware/services/auth");

var login_get = (req, res, next) => {
  res.render("login", {});
};

var login_post = (req, res, next) => {
  auth
    .signInWithEmailAndPassword(req.body.loginEmail, req.body.loginPassword)
    .then((credential) => {
      res.redirect("/price-chart");
    })
    .catch((err) => {
      res.render("login", {
        err: err.message,
      });
    });
};

module.exports = {
  login_get: login_get,
  login_post: login_post,
};
