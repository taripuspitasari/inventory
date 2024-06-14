const router = require("express").Router();
const {getAllCategories} = require("../models/category_model");

router.get("/", async (req, res) => {
  const conn = req.app.get("connection");
  const [results, error] = await getAllCategories(conn);
  if (error) {
    res.status(500).json({error});
  }

  res.json(results);
});

module.exports = router;
