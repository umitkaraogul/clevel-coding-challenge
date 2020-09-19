import React, { useState } from "react";
import ITransaction from "../models/ITransaction";
import { Button } from "react-bootstrap";
import ConfirmModal from "./ConfirmModal";

interface Props {
  transaction: ITransaction;
  editHandler: (transaction: ITransaction) => void;
  deleteHandler: (transaction: ITransaction) => void;
}
const TransactionItem: React.FC<Props> = ({
  transaction,
  editHandler,
  deleteHandler,
}) => {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const onDeleteClick = () => {
    setIsConfirmModalOpen(true);
  };
  const confirmHandler = () => {
    setIsConfirmModalOpen(false);
    deleteHandler(transaction);
  };
  return (
    <tr key={transaction.id}>
      <td>{transaction.id}</td>
      <td>{transaction.name}</td>
      <td>{transaction.description}</td>
      <td>{transaction.date}</td>
      <td>{`${transaction.currency} ${transaction.amount}`}</td>
      <td>
        <Button
          variant="primary"
          size="sm"
          onClick={() => editHandler(transaction)}
        >
          E
        </Button>{" "}
        <Button variant="primary" size="sm" onClick={() => onDeleteClick()}>
          D
        </Button>
      </td>
      {isConfirmModalOpen && (
        <ConfirmModal
          closeHandler={() => setIsConfirmModalOpen(false)}
          confirmHandler={confirmHandler}
        />
      )}
    </tr>
  );
};

export default TransactionItem;
