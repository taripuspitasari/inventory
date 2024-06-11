const router = require("express").Router();
const products = require("./products");

router.get("/", (req, res) => {
  res.send(
    "ini udah sampe index controllers anjing mesti banget dipancing dulu baru mau"
  );
});

router.use("/products", products);

module.exports = router;
