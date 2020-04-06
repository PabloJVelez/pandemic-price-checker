var express = require("express");
var router = express.Router();

router.get("/users/reports", (req, res, next) => {
  res.render("createReport", {});
});

router.post("/users/reports", (req, res, next) => {
  console.log(req.body);
});

module.exports = router;
