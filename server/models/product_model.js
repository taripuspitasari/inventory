exports.getAllProducts = async conn => {
  const query = `SELECT * FROM products`;
  try {
    const [results] = await conn.query(query);
    return [results, null];
  } catch (error) {
    return [null, error.message];
  }
};

exports.addProduct = async (
  conn,
  {
    name,
    description,
    category_id,
    supplier_id,
    cost_price,
    selling_price,
    quantity,
    reorder_level,
  }
) => {
  const query = `
    INSERT INTO products (
      name, description, category_id, supplier_id, cost_price, selling_price, quantity_in_stock, reorder_level
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  try {
    const [result] = await conn.execute(query, [
      name,
      description,
      category_id,
      supplier_id,
      cost_price,
      selling_price,
      quantity,
      reorder_level,
    ]);

    return [result, null];
  } catch (error) {
    console.error("SQL Error:", error);
    return [null, error.message];
  }
};

exports.updateProduct = async (
  conn,
  {
    id,
    name,
    description,
    category_id,
    supplier_id,
    cost_price,
    selling_price,
    quantity,
    reorder_level,
  }
) => {
  const query = `UPDATE products SET name = ?, description = ?, category_id = ?, supplier_id = ?, cost_price = ?, selling_price = ?, quantity_in_stock = ?, reorder_level = ? WHERE id = ?`;

  try {
    const [result] = await conn.execute(query, [
      name,
      description,
      category_id,
      supplier_id,
      cost_price,
      selling_price,
      quantity,
      reorder_level,
      id,
    ]);

    return [result, null];
  } catch (error) {
    console.error("SQL Error:", error);
    return [null, error.message];
  }
};

exports.deleteProduct = async (conn, id) => {
  const query = `DELETE FROM products WHERE id = ?`;

  try {
    const [result] = await conn.execute(query, [id]);
    return [result, null];
  } catch (error) {
    return [null, error.message];
  }
};
