import { useState, useEffect } from "react";
import "./App.css";
import TransactionsTable from "./components/TransactionsTable";
import TransactionForm from "./components/TransactionForm";
import NavBar from "./components/NavBar";
import { Link } from "react-router-dom";
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
      <NavBar />
      <div className="d-flex flex-row py-4">
        <TransactionForm setTransactions={setTransactions} />
        <TransactionsTable
          transactions={transactions}
          setTransactions={setTransactions}
        />
      </div>

      <div className="row">
        {
          transactions.map((transaction)=> (
            <Link key={transaction.id} to={`/transaction/${transaction.id}`} class="card col-4">
          <img src="https://placehold.co/400" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </Link>
          ))
        }
      </div>
    </div>
  );
}

export default App;
