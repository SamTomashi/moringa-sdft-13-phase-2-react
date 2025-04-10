import { useState } from 'react';
import './App.css';
import TransactionForm from './components/TransactionForm';
import TransactionsTable from './components/TransactionsTable';

function App() {

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
