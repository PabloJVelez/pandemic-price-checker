const { body, sanitizeBody, validationResult } = require("express-validator");

// Display user create-report form view
var user_report_get = (req, res, next) => {
  res.render("createReport", {});
};

var user_report_post = (req, res, next) => {
  // perform field validation and sanitization
  body("storeName", "Store name should be non-empty")
    .trim()
    .isLength({ min: 1 });
  body("address", "Address must be non-empty").trim().isLength({ min: 1 });
  body("zipCode", "ZipCode must be non-empty").trim().isLength({ min: 1 });
  body("city", "City must be non-empty").trim().isLength({ min: 1 });
  body("state", "State must be non-empty").trim().isLength({ min: 1 });
  body("item", "Reported item must be non-empty").trim().isLength({ min: 1 });

  //TODO: fix sanitization for zipCode
  body("storeName").escape();
  body("address").escape();
  body("zipCode").escape();
  body("city").escape();
  body("state").escape();
  body("item").escape();

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // render form with sanitized values
    res.send("NOT IMPLEMENTED");
  } else {
    function UserReport(reportData) {
      this.storeName = reportData.storeName;
      this.address = reportData.address;
      this.zipCode = reportData.zipCode;
      this.city = reportData.city;
      this.state = reportData.state;
      this.reportedItem = reportData.item;
    }

    let userReport = new UserReport(req.body);
    // form data is valid
    //TODO: Save new user report

    console.log(userReport);
  }
};

module.exports = {
  user_report_get: user_report_get,
  user_report_post: user_report_post,
};
