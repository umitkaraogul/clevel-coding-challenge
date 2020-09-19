import ITransaction from "../models/ITransaction";
import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  UPDATE_TRANSACTION,
  TransactionState,
  TransactionActionTypes,
} from "./actionTypes";

import { transactionData } from "../util/data";

const initialState: TransactionState = {
  transactions: transactionData,
};

export function transactionReducer(
  state = initialState,
  action: TransactionActionTypes
): TransactionState {
  switch (action.type) {
    case ADD_TRANSACTION:
      let nextId = state.transactions.reduce(
        (prev: ITransaction, current: ITransaction) => {
          if (current.id > prev.id) return current;
          else return prev;
        }
      ).id;
      const newTransaction: ITransaction = {
        ...action.payload,
        id: ++nextId,
      };
      return {
        transactions: [...state.transactions, newTransaction],
      };
    case UPDATE_TRANSACTION:
      return {
        transactions: state.transactions.map((item) =>
          item.id === action.payload.id ? { ...action.payload } : item
        ),
      };
    case DELETE_TRANSACTION:
      return {
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}
