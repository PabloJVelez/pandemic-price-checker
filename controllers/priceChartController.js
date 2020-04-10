const { pool } = require("../config/postgres");
const {
  FilterQuerySelection,
} = require("../web/middleware/services/querySelection");

var result = null;

var price_chart_get = (req, res, next) => {
  // TODOL implement caching, only fetch ones not in cache

  pool.connect().then(async (client) => {
    try {
      let result = await client.query(
        'SELECT * FROM "ReportedStores" LIMIT 30'
      );
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

var price_chart_post = (req, res, next) => {
  pool.connect().then(async (client) => {
    try {
      let values = [req.body.searchTerm];
      let result = await client.query(
        FilterQuerySelection(req.body.category),
        values
      );
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

module.exports = {
  price_chart_get: price_chart_get,
  price_chart_post: price_chart_post,
};
