import {useContext, useState} from "react";
import {ProductContext} from "../contexts/ProductContext";

const FormProduct = () => {
  const {addProduct} = useContext(ProductContext);
  const [form, setForm] = useState({
    name: "",
    description: "",
    category_id: "",
    supplier_id: "",
    cost_price: "",
    selling_price: "",
    quantity: "",
    reorder_level: "",
  });

  const handleChange = event => {
    const {name, value} = event.target;
    console.log(`Field: ${name}, Value: ${value}`);
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      addProduct(form);

      setForm({
        name: "",
        description: "",
        category_id: "",
        supplier_id: "",
        cost_price: "",
        selling_price: "",
        quantity: "",
        reorder_level: "",
      });
    } catch (error) {
      console.error("Error adding product:");
    }
  };

  return (
    <div className="collapse bg-base-200">
      <input type="checkbox" />
      <div className="collapse-title text-m font-medium">Add New Product</div>
      <div className="collapse-content">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 m-2"
        >
          <label className="input input-bordered input-sm flex items-center gap-2">
            Name
            <input
              type="text"
              className="grow"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label className="input input-bordered input-sm flex items-center gap-2">
            Description
            <input
              type="text"
              className="grow"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </label>
          <label className="input input-bordered input-sm flex items-center gap-2">
            Category
            <select
              className="select select-ghost select-xs w-full"
              name="category_id"
              value={form.category_id}
              onChange={handleChange}
            >
              <option disabled value="">
                Select Category
              </option>
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
              <option value="3">Category 3</option>
            </select>
          </label>
          <label className="input input-bordered input-sm flex items-center gap-2">
            Supplier
            <select
              className="select select-ghost select-xs w-full"
              name="supplier_id"
              value={form.supplier_id}
              onChange={handleChange}
            >
              <option disabled value="">
                Select Supplier
              </option>
              <option value="1">Supplier 1</option>
              <option value="2">Supplier 2</option>
              <option value="3">Supplier 3</option>
            </select>
          </label>
          <label className="input input-bordered input-sm flex items-center gap-2">
            Cost Price
            <input
              type="text"
              className="grow"
              name="cost_price"
              value={form.cost_price}
              onChange={handleChange}
            />
          </label>
          <label className="input input-bordered input-sm flex items-center gap-2">
            Selling Price
            <input
              type="text"
              className="grow"
              name="selling_price"
              value={form.selling_price}
              onChange={handleChange}
            />
          </label>
          <label className="input input-bordered input-sm flex items-center gap-2">
            Quantity
            <input
              type="text"
              className="grow"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
            />
          </label>
          <label className="input input-bordered input-sm flex items-center gap-2">
            Minimum Stock
            <input
              type="text"
              className="grow"
              name="reorder_level"
              value={form.reorder_level}
              onChange={handleChange}
            />
          </label>
          <button type="submit" className="btn btn-neutral btn-sm">
            Add product
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormProduct;
