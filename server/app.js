const express = require("express");
const cors = require("cors");
const app = express();
const controllers = require("./controllers");
const pool = require("./utils/db");

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  app.set("connection", pool);
  next();
});

app.get("/", (req, res) => {
  res.send("kenapa tadi gabisa anjing");
});

app.use("/api", controllers);

module.exports = app;
