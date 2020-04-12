var express = require("express");
var router = express.Router();

const login_controller = require("../controllers/loginController");

router.get("/login", login_controller.login_get);

router.post("/login", login_controller.login_post);

module.exports = router;
