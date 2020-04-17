const { auth } = require("../web/middleware/services/firebase");

var logout_post = (req, res, next) => {
  auth.signOut().then(() => {
    //verify user logout
    console.log("user signed out");
    res.redirect("/");
  });
};

module.exports = {
  logout_post: logout_post,
};
