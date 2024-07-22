import React, { useState } from "react";

const Wallet = () => {
  // Sample state for transactions and balance
  const [balance, setBalance] = useState(500.0);
  const [transactions, setTransactions] = useState([
    { id: 1, type: "Deposit", amount: 200.0, date: "2024-07-20" },
    { id: 2, type: "Purchase", amount: -50.0, date: "2024-07-19" },
    { id: 3, type: "Deposit", amount: 100.0, date: "2024-07-18" },
    { id: 4, type: "Withdrawal", amount: -30.0, date: "2024-07-17" },
  ]);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 mt-40 ">Your Wallet</h1>

      <section className="bg-black border-2 shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Balance</h2>
        <div className="flex items-center justify-between mb-4">
          <p className="text-xl font-bold">Current Balance</p>
          <p className="text-2xl font-semibold text-green-600">
            ${balance.toFixed(2)}
          </p>
        </div>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
          Add Funds
        </button>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Transaction History</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Balance
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.type}
                  </td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                      transaction.amount < 0 ? "text-red-600" : "text-green-600"
                    }`}
                  >
                    {transaction.amount < 0
                      ? `-${Math.abs(transaction.amount).toFixed(2)}`
                      : `+${transaction.amount.toFixed(2)}`}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${Math.max(balance + transaction.amount, 0).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Wallet;
