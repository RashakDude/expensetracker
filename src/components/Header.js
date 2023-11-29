import React from 'react';

const Header = ({ totalAmount }) => {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold mb-2 text-blue-500">Expense Tracker</h1>
      <p className={`text-lg ${totalAmount >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        Total Amount: ₹{totalAmount.toLocaleString()}
      </p>
    </div>
  );
};

export default Header;
