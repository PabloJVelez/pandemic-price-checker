var express = require("express");
var router = express.Router();

const login_controller = require("../controllers/loginController");

router.get("/login", login_controller.login_get);

module.exports = router;
