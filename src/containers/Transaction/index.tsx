import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import ITransaction from "../../models/ITransaction";
import { TransactionState } from "../../store/actionTypes";
import { Button, Table } from "react-bootstrap";

import "./Transaction.css";

export default () => {
  const transactions: ITransaction[] = useSelector(
    (state: TransactionState) => state.transactions,
    shallowEqual
  );

  return (
    <div className="full-screen">
      <div className="table-top-right">
        <Button variant="secondary" size="sm" onClick={() => {}}>
          Add transaction
        </Button>
      </div>
      <div>
        <Table>
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
          <tbody>
            {transactions.map((transaction: any) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.name}</td>
                <td>{transaction.description}</td>
                <td>{transaction.date}</td>
                <td>{`${transaction.currency} ${transaction.amount}`}</td>
                <td>
                  <Button variant="primary" size="sm" onClick={() => {}}>
                    E
                  </Button>{" "}
                  <Button variant="primary" size="sm" onClick={() => {}}>
                    D
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total Transaction: {transactions.length}</td>
            </tr>
          </tfoot>
        </Table>
      </div>
    </div>
  );
};
