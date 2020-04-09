require("dotenv").config();

const { Pool } = require("pg");

// const connStr = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_DATABASE}`;

const pool = new Pool({
  // connectionString: connStr,
  //TODO add ssl env
  user: `${process.env.DB_USER}`,
  host: `${process.env.DB_HOST}`,
  database: `${process.env.DB_DATABASE}`,
  password: `${process.env.DB_PASSWORD}`,
  port: `${process.env.DB_PORT}`,
});

pool.query("SELECT NOW()", (err, res) => {
  console.log(err, res.rows[0]);
});

module.exports = { pool };
