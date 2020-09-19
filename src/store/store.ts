import { createStore, Store } from "redux";
import { transactionReducer } from "./reducers";
import { TransactionActionTypes, TransactionState } from "./actionTypes";

export const store: Store<
  TransactionState,
  TransactionActionTypes
> = createStore(transactionReducer);
