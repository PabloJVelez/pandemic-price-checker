var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", {
    title: "Pandemic Price Checker",
    subtitle: "A free-to-use price-gouging reporting tool"
  });
});

module.exports = router;
