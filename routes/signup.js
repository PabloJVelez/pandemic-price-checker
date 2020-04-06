var express = require("express");
var router = express.Router();

const signup_controller = require("../controllers/signupController");

router.get("/signup", signup_controller.signup_controller_get);

module.exports = router;
