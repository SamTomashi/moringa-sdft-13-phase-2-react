import { useState } from "react";
import TransactionRow from "./TransactionRow";

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
    {
      id: 3,
      type: "Sending",
      amount: 400000,
    },
    {
      id: 4,
      type: "Payment",
      amount: 1000000,
    },
  ]);

  function handleRemove(id) {
    setTransactions((prev) =>
      prev.filter((transaction) => transaction.id !== id)
    );
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
            transaction={transaction}
            handleRemove={handleRemove}
          />
        ))}
      </tbody>
    </table>
  );
}
