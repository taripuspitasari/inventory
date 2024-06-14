exports.getAllSuppliers = async conn => {
  const query = `SELECT * FROM suppliers`;
  try {
    const [result] = await conn.query(query);
    return [result, null];
  } catch (error) {
    return [null, error.message];
  }
};
