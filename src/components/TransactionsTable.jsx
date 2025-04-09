import TransactionRow from "./TransactionRow";
import { useState } from "react";

export default function TransactionsTable() {
  const [transactions, setTransactions] = useState([
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
  ]);

  function handleRemove(id){
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  }

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
          <TransactionRow
            key={transaction.id}
            transaction={transaction}
            removeTransaction={handleRemove}
          />
        ))}
      </tbody>
    </table>
  );
}
