var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", {
    title: "Pandemic Price Checker",
    subtitle:
      "A free-to-use price-gouging reporting tool to prevent unfair practices from unfair businesses.",
    tagline:
      "Prevent unjust retailers from taking advantage from you in real-time.",
  });
});

router.get("/login", (req, res, next) => {
  res.render("login", {});
});

router.get("/price-chart", (req, res, next) => {
  res.render("main", {});
});

router.get("/users/reports", (req, res, next) => {
  res.render("createReport", {});
});

router.get("/signup", (req, res, next) => {
  res.render("signup", {});
});

module.exports = router;
