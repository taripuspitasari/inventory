import axios from "axios";
const baseUrl = "http://localhost:3001/api/products";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const addProduct = async newProduct => {
  const response = await axios.post(baseUrl, newProduct);
  return response.data;
};

const updateProduct = async (id, changedProduct) => {
  const response = await axios.put(`${baseUrl}/${id}`, changedProduct);
  return response.data;
};

const deleteProduct = async id => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
};

export default {
  getAll,
  addProduct,
  updateProduct,
  deleteProduct,
};
