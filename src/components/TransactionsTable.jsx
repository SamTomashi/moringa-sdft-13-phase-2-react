import { useEffect, useState } from "react";
import TransactionRow from "./TransactionRow";

export default function TransactionsTable({transactions, setTransactions}) {
  

  function handleRemove(id) {
    // setTransactions((prev) =>
    //   prev.filter((transaction) => transaction.id !== id)
    // );

    fetch(`http://localhost:4000/transactions/${id}`, {
      method: "DELETE",
      headers:{
        "Content-Type": "aplication/json",
        Accept: "aplication/json"
      }
    }).then(response => response.json())
    .then(data => console.log(data))
  }


  return (
    <div className="col">
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
    </div>
  );
}
