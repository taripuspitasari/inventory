exports.getAllCategories = async conn => {
  const query = `SELECT * FROM categories`;
  try {
    const [result] = await conn.query(query);
    return [result, null];
  } catch (error) {
    return [null, error.message];
  }
};
