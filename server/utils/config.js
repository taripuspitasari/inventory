require("dotenv").config();

const PORT = process.env.PORT;
const DB_HOST = process.env.DB_HOST;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

module.exports = {PORT, DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME};
