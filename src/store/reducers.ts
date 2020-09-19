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
      //TODO:complete
      return state;
    case UPDATE_TRANSACTION:
      //TODO:complete
      return state;
    case DELETE_TRANSACTION:
      //TODO:complete
      return state;
    default:
      return state;
  }
}
