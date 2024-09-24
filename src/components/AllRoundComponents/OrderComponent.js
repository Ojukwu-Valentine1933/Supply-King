import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./OrderComponent.module.css";
import categories from "../../helpers/categories";
import PictureUpload from "../../helpers/PictureUpload";
import { Modal, Button } from 'react-bootstrap';

const OrderComponent = () => {
  const [formData, setFormData] = useState({
    category: '',
    itemName: '',
    itemMake: '',
    size: '',
    weight: '',
    customerName: '',
    whatsappNumber: '',
    phoneNumber: '',
    deliveryAddress: '',
    itemDescription: '',
    image: null
  });

  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleImageUpload = (imageFile) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result }); // Store the base64 string
    };
    if (imageFile) {
      reader.readAsDataURL(imageFile);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save order to local storage
    let existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    existingOrders.push(formData);
    localStorage.setItem('orders', JSON.stringify(existingOrders));

    // Show success modal
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate('/pending');
  };

  return (
    <div className={`container ${styles.order_div}`}>
      <h1 className="mt-5 text-center">Order</h1>
      <div className={`alert alert-warning text-center ${styles.alert}`} role="alert">
        Please ensure to fill in all compulsory input fields
      </div>
      <form onSubmit={handleSubmit}>
        <div className={`order-categories ${styles.order_categories}`}>
          <label className={`${styles.label} text-center`}>Select Category</label>
          <select
            className={`${styles.select_category}`}
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mt-4" style={{ fontSize: "10px", color: "#b22222", fontWeight: "600" }}>
            Upload the item image by clicking the choose file box below!
          </label>
          <PictureUpload onImageUpload={handleImageUpload} />
        </div>

        {/* Other form inputs */}
        <div className="mt-3">
          <div className={`${styles.compulsory}`}>
            <label className={`${styles.label}`}>Item Name</label> 
            <label>Compulsory!</label>
          </div>
          <input
            type="text"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
            className={`form-control ${styles.input}`}
            required
          />
        </div>

        <div className="mt-3">
          <div className={`${styles.compulsory}`}>
            <label className={`${styles.label}`}>Item Make (Company)</label>
            <label>Compulsory!</label>
          </div>
          <input
            type="text"
            name="itemMake"
            value={formData.itemMake}
            onChange={handleChange}
            className={`form-control ${styles.input}`}
            required
          />
        </div>

        <div>
          <h5 className={`text-center mt-5 ${styles.h5}`}>Physical Properties (optional)</h5>
          <div className={`mt-3 ${styles.measurement}`}>
            <div className={`${styles.optional}`}>
              <label className={`${styles.label}`}>Size (e.g., Inches)</label>
              <input
                type="text"
                name="size"
                value={formData.size}
                onChange={handleChange}
                className={`form-control ${styles.input}`}
              />
            </div>

            <div className={`${styles.optional}`}>
              <label className={`${styles.label}`} style={{ textAlign: "right" }}>Weight (e.g., Kg)</label>
              <input
                type="text"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className={`form-control ${styles.input}`}
              />
            </div>
          </div>
        </div>

        <div className={`${styles.personalInformation}`}>
          <h5>Delivery Details (compulsory)</h5>
          <label>Customer Name:</label>
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            className={`form-control ${styles.input}`}
            required
          />
          <label>WhatsApp Number:</label>
          <input
            type="text"
            name="whatsappNumber"
            value={formData.whatsappNumber}
            onChange={handleChange}
            className={`form-control ${styles.input}`}
            required
          />
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={`form-control ${styles.input}`}
            required
          />
          <label>Delivery Address:</label>
          <input
            type="text"
            name="deliveryAddress"
            value={formData.deliveryAddress}
            onChange={handleChange}
            className={`form-control ${styles.input}`}
            required
          />
          <label>Item Description:</label>
          <textarea
            name="itemDescription"
            value={formData.itemDescription}
            onChange={handleChange}
            className={`form-control ${styles.text_area}`}
            placeholder="Provide detailed information about your request."
          />
        </div>

        <div className="mt-4">
          <button type="submit" className={`btn btn-primary form-control ${styles.btn}`}>
            PLACE ORDER
          </button>
        </div>
      </form>

      {/* Bootstrap Modal for success response */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{formData.category} Order Placed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your order is under review! You can check the status in the checkout section to see its delivery status.
          <div className="mt-3">
            <strong>Order Summary:</strong>
            <p>Item Name: {formData.itemName}</p>
            <p>Item Make: {formData.itemMake}</p>
            {/* Add other fields as needed */}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleModalClose}>
            Go to Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OrderComponent;
