import { useState } from "react";
import TransactionRow from "./TransactionRow";

export default function TransactionsTable({transactions, setTransactions}) {
  

  function handleRemove(id) {
    setTransactions((prev) =>
      prev.filter((transaction) => transaction.id !== id)
    );
  }

  return (
    <table className="table table-striped p-4">
      <thead>
        <tr>
          <th>Transaction ID</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <TransactionRow
          key={index}
            transaction={transaction}
            handleRemove={handleRemove}
          />
        ))}
      </tbody>
    </table>
  );
}
