import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import ITransaction from "../models/ITransaction";
import { Currency } from "../models/Currency";

type Props = {
  show: boolean;
  closeHandler: () => void;
  transaction: ITransaction;
  saveTransaction: (transaction: ITransaction) => void;
};

const EditModal = ({
  show,
  closeHandler,
  transaction,
  saveTransaction,
}: Props) => {
  const [activeTransaction, setActiveTransaction] = useState(transaction);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setActiveTransaction((prevState: ITransaction) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    saveTransaction(activeTransaction);
  };

  return (
    <Modal
      show={show}
      onHide={closeHandler}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Transaction
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Add Transaction</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter name"
              value={activeTransaction?.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              placeholder="Enter Description"
              value={activeTransaction?.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Currency</Form.Label>
            <Form.Control
              as="select"
              name="currency"
              value={activeTransaction?.currency}
              onChange={handleChange}
              required
            >
              {Object.keys(Currency).map((currency) => (
                <option key={currency}>{currency}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              name="amount"
              placeholder="Enter Amount"
              value={activeTransaction?.amount}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closeHandler}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
