var express = require("express");
var router = express.Router();

var Multer = require("multer");
var multer = Multer({
  dest: "uploads/",
});

const users_controller = require("../controllers/usersController");

let uploadType = multer.single("reportedItemImg");

router.get("/users/reports", users_controller.user_report_get);

router.post("/users/reports", uploadType, users_controller.user_report_post);

module.exports = router;
