import React from "react";
import { transactionData } from "../../util/data";

import "./Transaction.css";

export default () => (
  <div className="full-screen">
    <div className="table-top-right">
      <button onClick={() => {}}>Add transaction</button>
    </div>
    <div>
      <table>
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
          {transactionData.map((transaction: any) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.name}</td>
              <td>{transaction.description}</td>
              <td>{transaction.date}</td>
              <td>{`${transaction.currency} ${transaction.amount}`}</td>
              <td>
                <button onClick={() => {}}>E</button>{" "}
                <button onClick={() => {}}>D</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total Transaction: {transactionData.length}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
);
