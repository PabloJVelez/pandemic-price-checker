// Display user create-report form view
var user_report_get = (req, res, next) => {
  res.render("createReport", {});
};

var user_report_post = (req, res, next) => {
  console.log(req.body);
};

module.exports = {
  user_report_get: user_report_get,
  user_report_post: user_report_post,
};
