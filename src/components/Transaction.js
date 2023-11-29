import React from 'react';

const Transaction = ({ transaction, onDelete }) => {
  const { id, text, amount, type } = transaction;

  return (
    <li className={`flex justify-between items-center border-b py-4 ${type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
      <span>{text}</span>
      <span className={`font-semibold ${type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
        {type === 'income' ? '+' : '-'}${Math.abs(amount)}
      </span>
      <button onClick={() => onDelete(id)} className="text-red-500 ml-4 hover:underline focus:outline-none">
        Delete
      </button>
    </li>
  );
};

export default Transaction;
