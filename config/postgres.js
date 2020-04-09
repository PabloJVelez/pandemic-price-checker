require("dotenv").config();

const { Pool } = require("pg");

const pool = new Pool({
  user: `${process.env.DB_USER}`,
  host: `${process.env.DB_HOST}`,
  database: `${process.env.DB_DATABASE}`,
  password: `${process.env.DB_PASSWORD}`,
  port: `${process.env.DB_PORT}`,
});

//TODO: Add logging

pool.query("SELECT NOW()", (err, res) => {
  console.log(err, res.rows[0]);
});

module.exports = { pool };
