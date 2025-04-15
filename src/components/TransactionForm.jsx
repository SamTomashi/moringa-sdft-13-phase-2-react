import { useState } from "react";

export default function TransactionForm({ setTransactions }) {
  const [formData, setFormData] = useState({
    type: "",
    amount: 1,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let id = `${letters.charAt(
      Math.floor(Math.random() * letters.length)
    )}${Math.floor(Math.random() * 100000)}${letters.charAt(
      Math.floor(Math.random() * letters.length)
    )}`;

    setFormData((prev) => {
      return { ...prev, id };
    });

    setTransactions((prev) => [...prev, formData]);
    postTransaction(formData);
  };

  const postTransaction = async (transaction) => {
    try {
      return await fetch("http://localhost:4000/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(transaction),
      });
    } catch (error) {
      throw new Error(error)
    }finally{

    }
  };

  const handleOnChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="col-3 mx-2">
      <form onSubmit={handleSubmit}>
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
            value={formData.type}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="transactionAmount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            className="form-control form-control-sm"
            id="transactionAmount"
            placeholder="1"
            name="amount"
            value={formData.amount}
            onChange={handleOnChange}
          />
        </div>
        <div className="d-grid gap-2 col-12 mx-auto">
          <button className="btn btn-dark btn-sm" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
