const { body, validationResult } = require("express-validator");
const { pool } = require("../config/postgres");
const { UserReport } = require("../models/userReport");

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

  body("storeName").isAlphanumeric();
  body("address").isAlphanumeric();
  body("zipCode").isPostalCode();
  body("city").isAlpha();
  body("state").isAlpha();
  body("item").isAlpha();

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // render form with sanitized values
    res.send("NOT IMPLEMENTED");
  } else {
    // form data is valid
    //TODO: check if values are not empty strings

    let userReport = new UserReport(req.body);

    pool.connect().then((client) => {
      return client
        .query(
          'INSERT INTO "ReportedStores" (storeName, address, zipCode, city, storeState, item) VALUES ($1, $2, $3, $4, $5, $6)',
          [
            userReport.storeName,
            userReport.address,
            userReport.zipCode,
            userReport.city,
            userReport.state,
            userReport.reportedItem,
          ]
        )
        .then((result) => {
          client.release();
          console.log(result.rows[0]);
        })
        .catch((err) => {
          client.release();
          console.log(err);
        });
    });

    console.log(userReport);
  }
};

module.exports = {
  user_report_get: user_report_get,
  user_report_post: user_report_post,
};
