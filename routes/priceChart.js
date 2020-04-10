var express = require("express");
var router = express.Router();

const price_chart_controller = require("../controllers/priceChartController");

router.get("/price-chart", price_chart_controller.price_chart_get);

router.post("/price-chart", price_chart_controller.price_chart_post);

module.exports = router;
