var express = require("express");
var router = express.Router();

router.get("/price-chart", (req, res, next) => {
  res.render("main", {});
});

module.exports = router;
