require("dotenv").config();

const { Pool } = require("pg");
//TODO: Add environment var for connection string selection

const connStr = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}
    /${process.env.DB_DATABASE}`;

module.exports.pool = new Pool({
  connectionString: connStr,
  //TODO add ssl env
});
