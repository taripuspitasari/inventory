import {forwardRef} from "react";

const DialogDelete = forwardRef(({handleDelete, selectedProductId}, ref) => {
  return (
    <dialog ref={ref} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Are you sure you want to delete this product?</p>
        <div className="modal-action">
          <form method="dialog" className="flex gap-2">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn"
              onClick={() => handleDelete(selectedProductId)}
            >
              Yes
            </button>
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
});

DialogDelete.displayName = "DialogDelete";

export default DialogDelete;
