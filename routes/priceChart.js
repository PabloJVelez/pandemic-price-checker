var express = require("express");
var router = express.Router();

const price_chart_controller = require("../controllers/priceChartController");
const logout_controller = require("../controllers/logoutController");

router.get("/price-chart", price_chart_controller.price_chart_get);

router.post("/price-chart", price_chart_controller.price_chart_post);

router.post("/price-chart/logout", logout_controller.logout_post);

module.exports = router;
