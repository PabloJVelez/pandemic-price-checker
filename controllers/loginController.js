var login_get = (req, res, next) => {
  res.render("login", {});
};

module.exports = {
  login_get: login_get,
};
