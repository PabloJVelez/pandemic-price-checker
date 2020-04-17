const { auth } = require("../web/middleware/services/firebase");
const { pool } = require("../config/postgres");
const {
  FilterQuerySelection,
} = require("../web/middleware/services/querySelection");

var price_chart_get = (req, res, next) => {
  pool.connect().then(async (client) => {
    try {
      let result = await client.query(
        'SELECT * FROM "ReportedStores" LIMIT 30'
      );
      client.release();
      // Track user auth status
      var user = auth.currentUser;
      res.render("main", {
        reportedStores: result.rows,
        user: user === null ? false : true,
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
