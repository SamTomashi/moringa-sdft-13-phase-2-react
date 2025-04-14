import { useState, useEffect } from 'react';
import './App.css';
import TransactionsTable from './components/TransactionsTable';
import TransactionForm from './components/TransactionForm'
function App() {

  const [transactions, setTransactions] = useState([]);


  function getTransactions(){
    fetch("http://localhost:4000/transactions")
    .then((response) => response.json())
    .then(data => {
      setTransactions(data)
      console.log(transactions)
    })

    // return function cleanup() {};

  }

  useEffect(getTransactions, [])




  //   function myFunction(){
  //     console.log("Kenya")
  //   }

  //  useEffect(myFunction, []);


  return (
    <div className='container'>
      <div className='d-flex flex-row'>
        <TransactionForm setTransactions={setTransactions}/>
      <TransactionsTable transactions={transactions} setTransactions={setTransactions}/>
      </div>
    </div>
  );
}

export default App;
