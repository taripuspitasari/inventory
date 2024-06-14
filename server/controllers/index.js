const router = require("express").Router();
const products = require("./products");
const categories = require("./categories");
const suppliers = require("./suppliers");

router.get("/", (req, res) => {
  res.send("ini buat login nanti");
});

router.use("/products", products);
router.use("/categories", categories);
router.use("/suppliers", suppliers);

module.exports = router;
