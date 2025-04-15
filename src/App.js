import { useState, useEffect } from "react";
import "./App.css";
import TransactionsTable from "./components/TransactionsTable";
import TransactionForm from "./components/TransactionForm";
function App() {
  const [transactions, setTransactions] = useState([]);

  async function getTransactions() {
    try {
      const response = await fetch("http://localhost:4000/transactions");
      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      throw new Error(error);
    } finally {
    }
  }

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div className="container">
      <div className="d-flex flex-row py-4">
        <TransactionForm setTransactions={setTransactions} />
        <TransactionsTable
          transactions={transactions}
          setTransactions={setTransactions}
        />
      </div>
    </div>
  );
}

export default App;
