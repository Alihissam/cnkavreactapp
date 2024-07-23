import React, { useState } from "react";

const orders = [
  { id: "001", date: "2024-07-15", status: "Shipped", total: "$120.00" },
  { id: "002", date: "2024-07-12", status: "Delivered", total: "$85.50" },
  { id: "003", date: "2024-07-10", status: "Processing", total: "$45.75" },
];

const OrderDetail = ({ order }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-8 ">
    <h2 className="text-2xl font-semibold mb-4 ">Order #{order.id}</h2>
    <div className="mb-4">
      <p className="text-lg font-medium">Date:</p>
      <p className="text-gray-600">{order.date}</p>
    </div>
    <div className="mb-4">
      <p className="text-lg font-medium">Status:</p>
      <p
        className={`text-lg font-semibold ${
          order.status === "Delivered"
            ? "text-green-600"
            : order.status === "Shipped"
            ? "text-blue-600"
            : "text-yellow-600"
        }`}
      >
        {order.status}
      </p>
    </div>
    <div className="mb-4">
      <p className="text-lg font-medium">Total:</p>
      <p className="text-gray-600">{order.total}</p>
    </div>
  </div>
);

const OrderPage = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 mt-40">Your Orders</h1>

      <section className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Order History</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Details
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.date}
                  </td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                      order.status === "Delivered"
                        ? "text-green-600"
                        : order.status === "Shipped"
                        ? "text-blue-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {order.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.total}
                  </td>
                  <td
                    className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 cursor-pointer hover:underline"
                    onClick={() => setSelectedOrder(order)}
                  >
                    View
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {selectedOrder && <OrderDetail order={selectedOrder} />}
    </div>
  );
};

export default OrderPage;
