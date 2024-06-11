import {createContext, useState, useEffect} from "react";
import productService from "../services/productService";

export const ProductContext = createContext();

const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getAll();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, [products]);

  const addProduct = async newProduct => {
    try {
      const data = await productService.addProduct(newProduct);
      setProducts(prevProducts => [...prevProducts, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async id => {
    try {
      const response = await productService.deleteProduct(id);
      console.log(response.message); // Log the success message from the response
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (id, updatedProduct) => {
    try {
      console.log(`${id} mau diupdate`);
      const response = await productService.updateProduct(id, updatedProduct);
      console.log(response.message);
      setProducts(prevProducts =>
        prevProducts.map(product =>
          product.id === id ? {...product, ...updatedProduct} : product
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductContext.Provider
      value={{products, setProducts, addProduct, handleDelete, handleUpdate}}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
