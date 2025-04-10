import { useState } from "react";

export default function TransactionForm({setTransactions}) {
    const [type, setType] = useState("Withdrawal")
    const [amount, setAmount] = useState(1)

    let id =  Math.floor(Math.random() * 1000)

    function handleSubmit(event){
        event.preventDefault()
       setTransactions(
        (prev) => [...prev, { id, type, amount}]
       )
    }



  return (
    <form onSubmit={handleSubmit} className="p-2 m-4 border rounded">
        <h6>Add Transaction</h6>
      <div className="mb-3">
        <label htmlFor="transactionType" className="form-label">
          Transaction Type
        </label>
        <input
          type="text"
          className="form-control form-control-sm"
          id="transactionType"
          placeholder="e.g.Deposit"
          name="type"
          value={type}
          onChange={(event)=> setType(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="transactionAmount" className="form-label">
          Transaction Amount
        </label>
        <input
          type="number"
          className="form-control form-control-sm"
          id="transactionAmount"
          min={1}
          name="amount"
          value={amount}
          onChange={(event)=> setAmount(event.target.value)}
        />
      </div>
      <div className="d-grid gap-2 col-12 mx-auto">
        <button className="btn btn-dark btn-sm" type="submit">Submit</button>
      </div>
    </form>
  );
}
