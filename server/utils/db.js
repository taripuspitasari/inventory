const mysql = require("mysql2/promise");
const config = require("./config");

const pool = mysql.createPool({
  // host: config.DB_HOST,
  // user: config.DB_USERNAME,
  // password: config.DB_PASSWORD,
  // database: config.DB_NAME,

  host: "localhost",
  user: "root",
  password: "1234",
  database: "inventory_db",
});

module.exports = pool;
