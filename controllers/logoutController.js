const { auth } = require("../web/middleware/services/auth");

var logout_post = (req, res, next) => {
  auth.signOut().then(() => {
    console.log("user signed out");
  });
};

module.exports = {
  logout_post: logout_post,
};
