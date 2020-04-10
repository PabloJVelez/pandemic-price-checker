const { pool } = require("../config/postgres");

var result = null;

var price_chart_get = (req, res, next) => {
  // TODOL implement caching, only fetch ones not in cache

  pool.connect().then(async (client) => {
    try {
      result = await client.query('SELECT * FROM "ReportedStores" LIMIT 30');
      client.release();

      res.render("main", {
        reportedStores: result.rows,
      });
    } catch (err) {
      client.release();
      console.log(err);
    }
  });
};

var price_chart_post = (req, res, next) => {};

module.exports = {
  price_chart_get: price_chart_get,
  price_chart_post: price_chart_post,
};
