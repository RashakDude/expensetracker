import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Load transactions from localStorage when the component mounts
    const savedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
    setTransactions(savedTransactions);
  }, []);

  useEffect(() => {
    // Save transactions to localStorage whenever the transactions state changes
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(updatedTransactions);
  };

  const calculateTotal = () => {
    const totalIncome = transactions
      .filter((transaction) => transaction.type === 'income')
      .reduce((total, transaction) => total + transaction.amount, 0);

    const totalExpense = transactions
      .filter((transaction) => transaction.type === 'expense')
      .reduce((total, transaction) => total + transaction.amount, 0);

    return totalIncome - totalExpense;
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded shadow-lg">
        <Header totalAmount={calculateTotal()} />
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Transactions</h2>
          <TransactionList transactions={transactions} onDelete={deleteTransaction} />
        </div>
        <AddTransaction onAdd={addTransaction} />
      </div>
    </div>
  );
}

export default App;
