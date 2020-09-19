import React from "react";
import { Modal, Button } from "react-bootstrap";

type Props = {
  closeHandler: () => void;
  confirmHandler: () => void;
};

const ConfirmModal = ({ closeHandler, confirmHandler }: Props) => {
  return (
    <Modal
      onHide={closeHandler}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      show
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Transaction
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Delete Transaction</h4>
        <div>Do you want to delete the record?</div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeHandler}>
          Close
        </Button>
        <Button variant="primary" onClick={confirmHandler}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
