import React from "react";
import TransactionItem from "./TransactionItem";
import ITransaction from "../models/ITransaction";
import { Table } from "react-bootstrap";

interface Props {
  transactions: ITransaction[];
  modalHandler: (transaction: ITransaction) => void;
  deleteHandler: (transaction: ITransaction) => void;
}
const TransactionList: React.FC<Props> = ({
  transactions,
  modalHandler,
  deleteHandler,
}) => {
  return (
    <Table id="transactions">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Transaction Date</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className="body-half-screen">
        {transactions.map((transaction: ITransaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            editHandler={modalHandler}
            deleteHandler={deleteHandler}
          />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total Transaction: {transactions.length}</td>
        </tr>
      </tfoot>
    </Table>
  );
};

export default TransactionList;
