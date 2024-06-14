import {useContext, useState, useRef} from "react";
import {ProductContext} from "../contexts/ProductContext";
import DialogEdit from "./DialogEdit";
import DialogDelete from "./DialogDelete";

const TableProduct = () => {
  const {products, categories, suppliers, handleDelete, handleUpdate} =
    useContext(ProductContext);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const modalRef = useRef(null);
  const editModalRef = useRef(null);

  const openModal = productId => {
    setSelectedProductId(productId);
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const openEditModal = product => {
    setSelectedProduct(product);
    if (editModalRef.current) {
      editModalRef.current.showModal();
    }
  };

  const getCategoryName = categoryId => {
    const category = categories.find(category => category.id === categoryId);
    return category ? category.name : "Unknown Category";
  };

  const getSupplierName = supplierId => {
    const supplier = suppliers.find(supplier => supplier.id === supplierId);
    return supplier ? supplier.name : "Unknown Supplier";
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Cost Price</th>
            <th>Selling Price</th>
            <th>Quantity</th>
            <th>Supplier</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={`${product.id}_${index}`}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{getCategoryName(product.category_id)}</td>
              <td>{product.cost_price}</td>
              <td>{product.selling_price}</td>
              <td>{product.quantity_in_stock}</td>
              <td>{getSupplierName(product.supplier_id)}</td>
              <td className="flex gap-2 justify-center">
                <button
                  className="btn btn-xs"
                  onClick={() => openEditModal(product)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-xs"
                  onClick={() => openModal(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <DialogDelete
        handleDelete={handleDelete}
        selectedProductId={selectedProductId}
        ref={modalRef}
      />

      <DialogEdit
        handleUpdate={handleUpdate}
        selectedProduct={selectedProduct}
        ref={editModalRef}
      />
    </div>
  );
};

export default TableProduct;
