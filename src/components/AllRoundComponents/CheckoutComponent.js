import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Retrieve pending orders from local storage
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  const handleCancelOrder = (index) => {
    // Remove the order from local storage
    const updatedOrders = orders.filter((_, i) => i !== index);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    setOrders(updatedOrders);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Pending Orders</h1>
      {orders.length === 0 ? (
        <p>No orders are currently under review.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="card mb-3">
            <div className="card-header">
              <h5>{order.category} Order</h5>
            </div>
            <div className="card-body">
              <p>
                <strong>Item Name:</strong> {order.itemName}
              </p>
              <p>
                <strong>Item Make:</strong> {order.itemMake}
              </p>
              <p>
                <strong>Size:</strong> {order.size || "N/A"}
              </p>
              <p>
                <strong>Weight:</strong> {order.weight || "N/A"}
              </p>
              <p>
                <strong>Delivery Address:</strong> {order.deliveryAddress}
              </p>
              <p>
                <strong>Additonal Details:</strong> {order.itemDescription}
              </p>
              {/* Show image if it exists */}
              {order.image && (
                <div className="mt-3">
                  <img
                    src={order.image} // Use the base64 string directly
                    alt="Uploaded Item"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              )}
              {/* Cancel button */}
              <button
                className="btn btn-danger mt-3 me-2" // Add 'me-2' for margin-end
                onClick={() => handleCancelOrder(index)}
              >
                Cancel Order
              </button>
              <Link className="btn btn-success mt-3" to={"/payment"}>
                Make Payment
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CheckoutPage;
