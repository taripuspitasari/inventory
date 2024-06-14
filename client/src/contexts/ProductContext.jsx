import {createContext, useState, useEffect} from "react";
import productService from "../services/productService";
import categoryService from "../services/categoryService";
import supplierService from "../services/supplierService";

export const ProductContext = createContext();

const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const [categories, setCatergories] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getAllProducts();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, [products]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await categoryService.getAllCategories();
        setCatergories(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const data = await supplierService.getAllSuppliers();
        setSuppliers(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSuppliers();
  }, []);

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
      value={{
        products,
        setProducts,
        addProduct,
        handleDelete,
        handleUpdate,
        categories,
        suppliers,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
