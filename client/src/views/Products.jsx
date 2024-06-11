import TableProduct from "../components/TableProduct";
import FormProduct from "../components/FormProduct";

const Products = () => {
  return (
    <main className="px-4">
      <h1 className="text-center font-bold mb-2">Products</h1>
      <FormProduct />
      <TableProduct />
    </main>
  );
};

export default Products;
