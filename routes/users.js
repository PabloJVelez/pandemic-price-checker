var express = require("express");
var router = express.Router();

const users_controller = require("../controllers/usersController");

router.get("/users/reports", users_controller.user_report_get);

router.post("/users/reports", users_controller.user_report_post);

module.exports = router;
