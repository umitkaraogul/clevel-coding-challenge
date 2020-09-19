import ITransaction from "../models/ITransaction";
import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  UPDATE_TRANSACTION,
  TransactionActionTypes,
} from "./actionTypes";

export function addTransaction(
  newTransaction: ITransaction
): TransactionActionTypes {
  return {
    type: ADD_TRANSACTION,
    payload: newTransaction,
  };
}

export function deleteTransaction(
  newTransaction: ITransaction
): TransactionActionTypes {
  return {
    type: DELETE_TRANSACTION,
    payload: newTransaction,
  };
}

export function updateTransaction(
  newTransaction: ITransaction
): TransactionActionTypes {
  return {
    type: UPDATE_TRANSACTION,
    payload: newTransaction,
  };
}
