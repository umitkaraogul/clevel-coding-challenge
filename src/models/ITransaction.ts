export default interface ITransaction {
  id: number;
  name: string;
  description?: string;
  date?: string;
  amount: number;
  currency: string;
}
