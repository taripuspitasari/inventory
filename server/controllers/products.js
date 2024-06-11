const {
  getAllProducts,
  deleteProduct,
  addProduct,
  updateProduct,
} = require("../models/product_model");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const conn = req.app.get("connection");
  const [results, error] = await getAllProducts(conn);
  if (error) {
    return res.status(500).json({error});
  }

  res.json(results);
});

router.post("/", async (req, res) => {
  const conn = req.app.get("connection");
  const {
    name,
    description,
    category_id,
    supplier_id,
    cost_price,
    selling_price,
    quantity,
    reorder_level,
  } = req.body;

  const [result, error] = await addProduct(conn, {
    name,
    description,
    category_id,
    supplier_id,
    cost_price,
    selling_price,
    quantity,
    reorder_level,
  });

  if (error) {
    console.error("failed to add product", error);
    return res
      .status(500)
      .json({success: false, message: "Failed to add product", error});
  }

  res
    .status(201)
    .json({success: true, message: "Product added successfully", result});
});

router.put("/:id", async (req, res) => {
  const conn = req.app.get("connection");
  const {id} = req.params;
  const {
    name,
    description,
    category_id,
    supplier_id,
    cost_price,
    selling_price,
    quantity,
    reorder_level,
  } = req.body;

  const [result, error] = await updateProduct(conn, {
    id,
    name,
    description,
    category_id,
    supplier_id,
    cost_price,
    selling_price,
    quantity,
    reorder_level,
  });

  if (error) {
    console.error("Failed to update product", error);
    return res
      .status(500)
      .json({success: false, message: "Failed to update product", error});
  }

  if (result.affectedRows === 0) {
    return res.status(404).json({error: "Product not found"});
  }

  res.json({success: true, message: "Product updated succesfully", result});
});

router.delete("/:id", async (req, res) => {
  const conn = req.app.get("connection");
  const {id} = req.params;

  const [result, error] = await deleteProduct(conn, id);
  if (error) {
    return res.status(500).json({error});
  }

  if (result.affectedRows === 0) {
    return res.status(404).json({error: "Product not found"});
  }

  res.json({message: "Product deleted successfully"});
});

module.exports = router;
