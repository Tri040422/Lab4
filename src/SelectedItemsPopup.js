import React from "react";

const SelectedItemsPopup = ({ cart, onClose, onQuantityChange }) => {
  return (
    <div
      className="modal show"
      style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Selected Items</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            {Object.values(cart).map((item) => (
              <div key={item.id} className="d-flex justify-content-between">
                <span>{item.title}</span>
                <span>
                  <button onClick={() => onQuantityChange(item.id, -1)}>
                    -
                  </button>
                  {item.count}
                  <button onClick={() => onQuantityChange(item.id, 1)}>
                    +
                  </button>
                </span>
              </div>
            ))}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedItemsPopup;
