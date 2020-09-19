import ITransaction from "../models/ITransaction";

export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";
export const UPDATE_TRANSACTION = "UPDATE_TRANSACTION";

export interface TransactionState {
  transactions: ITransaction[];
}

interface AddTransactionAction {
  type: typeof ADD_TRANSACTION;
  payload: ITransaction;
}
interface DeleteTransactionAction {
  type: typeof DELETE_TRANSACTION;
  payload: ITransaction;
}
interface UpdateTransactionAction {
  type: typeof UPDATE_TRANSACTION;
  payload: ITransaction;
}

export type TransactionActionTypes =
  | AddTransactionAction
  | DeleteTransactionAction
  | UpdateTransactionAction;
