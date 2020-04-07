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

  //TODO: remove deprecated middleware sanitize
  //TODO: fix sanitization for zipCode
  sanitizeBody("storeName").escape();
  sanitizeBody("address").escape();
  sanitizeBody("zipCode").escape();
  sanitizeBody("city").escape();
  sanitizeBody("state").escape();
  sanitizeBody("item").escape();

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // render form with sanitized values
    res.send("NOT IMPLEMENTED");
  } else {
    //TODO: Create new user report object
    // form data is valid
    let report = {
      storeName: req.body.storeName,
      address: req.body.address,
      zipCode: req.body.zipCode,
      city: req.body.city,
      state: req.body.state,
      reportedItem: req.body.item,
    };
    //TODO: Save new user report
    console.log(report);
  }
};

module.exports = {
  user_report_get: user_report_get,
  user_report_post: user_report_post,
};
