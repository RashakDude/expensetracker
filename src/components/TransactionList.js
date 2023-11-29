import React from 'react';
import Transaction from './Transaction';

const TransactionList = ({ transactions, onDelete }) => {
  return (
    <div>
      <ul>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
