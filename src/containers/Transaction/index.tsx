import React, { useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import TransactionList from "../../components/TransactionList";
import ITransaction from "../../models/ITransaction";
import EditModal from "../../components/EditModal";
import { Button } from "react-bootstrap";
import { TransactionState } from "../../store/actionTypes";
import {
  addTransaction,
  deleteTransaction,
  updateTransaction,
} from "../../store/actions";

import "./Transaction.css";

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTransaction, setActiveTransaction] = useState<ITransaction>({
    id: 0,
    name: "",
    amount: 0,
    currency: "TRY",
  });

  const transactions: ITransaction[] = useSelector(
    (state: TransactionState) => state.transactions,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const save = (transaction: ITransaction) => {
    if (transaction.id) editTransaction(transaction);
    else saveTransaction(transaction);

    setIsModalOpen(false);
  };
  const saveTransaction = React.useCallback(
    (transaction: ITransaction) => dispatch(addTransaction(transaction)),
    [dispatch]
  );
  const editTransaction = React.useCallback(
    (transaction: ITransaction) => dispatch(updateTransaction(transaction)),
    [dispatch]
  );

  const deleteHandler = (transaction: ITransaction) => {
    if (transaction.id) {
      delTransaction(transaction);
    }
  };

  const delTransaction = React.useCallback(
    (transaction: ITransaction) => dispatch(deleteTransaction(transaction)),
    [dispatch]
  );

  const modalHandler = (transaction: ITransaction) => {
    setActiveTransaction(transaction);
    setIsModalOpen(true);
  };

  const addClick = () => {
    const newTransaction: ITransaction = {
      id: 0,
      name: "",
      description: "",
      date: new Intl.DateTimeFormat("tr-TR").format(new Date()),
      amount: 0,
      currency: "TRY",
    };
    modalHandler(newTransaction);
  };

  return (
    <div className="full-screen">
      <div className="table-top-right">
        <Button variant="secondary" size="sm" onClick={addClick}>
          Add transaction
        </Button>
      </div>
      <div>
        <TransactionList
          transactions={transactions}
          modalHandler={modalHandler}
          deleteHandler={deleteHandler}
        />
      </div>
      {isModalOpen && (
        <EditModal
          show={isModalOpen}
          closeHandler={() => setIsModalOpen(false)}
          transaction={activeTransaction}
          saveTransaction={save}
        />
      )}
    </div>
  );
};
