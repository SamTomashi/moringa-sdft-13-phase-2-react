import TransactionRow from "./TransactionRow";
import { useState } from "react";

export default function TransactionsTable() {


   const [transactions, setTransactions] = useState(
    [
        {
          id: 1,
          type: "Deposit",
          amount: 3000,
        },
        {
          id: 2,
          type: "Withdrawal",
          amount: 1000,
        },
      ]
   )

   const [name, setName] = useState("Sam")





  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <TransactionRow key={transaction.id} transaction={transaction} transactions={transactions} setTransactions={setTransactions}/>
        ))}
      </tbody>
    </table>
  );
}
