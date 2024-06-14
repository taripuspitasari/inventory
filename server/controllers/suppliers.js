const router = require("express").Router();
const {getAllSuppliers} = require("../models/supplier_model");

router.get("/", async (req, res) => {
  const conn = req.app.get("connection");
  const [results, error] = await getAllSuppliers(conn);
  if (error) {
    res.status(500).json({error});
  }

  res.json(results);
});

module.exports = router;
