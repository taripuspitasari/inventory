import {forwardRef, useState, useEffect} from "react";

const DialogEdit = forwardRef(({handleUpdate, selectedProduct}, ref) => {
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

  useEffect(() => {
    if (selectedProduct) {
      setForm({
        name: selectedProduct.name || "",
        description: selectedProduct.description || "",
        category_id: selectedProduct.category_id || "",
        cost_price: selectedProduct.cost_price || "",
        selling_price: selectedProduct.selling_price || "",
        quantity: selectedProduct.quantity_in_stock || "",
        supplier_id: selectedProduct.supplier_id || "",
        reorder_level: selectedProduct.reorder_level || "",
      });
    }
  }, [selectedProduct]);

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
      handleUpdate(selectedProduct.id, form);
      if (ref.current) {
        ref.current.close(); // close the dialog after saving
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleClose = () => {
    if (ref.current) {
      ref.current.close(); // Close the dialog when clicking Close button
    }
  };

  return (
    <dialog ref={ref} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Edit Product</h3>
        <form onSubmit={handleSubmit}>
          <div className="py-4">
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
          </div>
          <div className="modal-action">
            {/* <form method="dialog" className="flex gap-2"> */}
            <button type="submit" className="btn">
              Save
            </button>
            <button type="button" className="btn" onClick={handleClose}>
              Close
            </button>
            {/* </form> */}
          </div>
        </form>
      </div>
    </dialog>
  );
});

DialogEdit.displayName = "DialogEdit";

export default DialogEdit;
