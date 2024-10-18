// src/components/CategoryButton.js
import { useState } from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CategoryButton = ({ categories, onSelectCategory }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button className="ml-1" onClick={handleShow} style={{backgroundColor: "#b22222", border: "1px solid #b22222"}}>
        Choose Category
      </Button>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Choose a Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {categories.map((category, index) => (
              <ListGroup.Item
                key={index}
                action
                onClick={() => {
                  onSelectCategory(category);
                  handleClose();
                }}
              >
                {category}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CategoryButton;
