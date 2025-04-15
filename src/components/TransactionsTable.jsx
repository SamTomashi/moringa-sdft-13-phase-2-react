import { useEffect, useState } from "react";
import TransactionRow from "./TransactionRow";

export default function TransactionsTable({ transactions, setTransactions }) {
  async function handleRemove(id) {
    try{
      const removedTransaction = await fetch(
        `http://localhost:4000/transactions/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "aplication/json",
            Accept: "aplication/json",
          },
        }
      );
      const data = await removedTransaction.json();
      setTransactions((prev) =>
        prev.filter((transaction) => transaction.id !== data.id)
      );
    }catch(error){
      throw new Error(error)
    }finally{
      //This block will always execute
    }
  }

  return (
    <div className="col mx-3">
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
