// src/pages/History.jsx
import React from "react";
import { usePayment } from "../context/PaymentContext";
import { FaRupeeSign, FaCalendarAlt, FaCheckCircle, FaTrash } from "react-icons/fa";

function History() {
  const { paymentHistory, clearHistory } = usePayment();

  if (paymentHistory.length === 0)
    return (
      <div className="text-center mt-20">
        <p className="text-lg mb-4 text-gray-700">No payment history found.</p>
        <a
          href="/shop"
          className="text-blue-600 hover:underline font-semibold"
        >
          Browse Products
        </a>
      </div>
    );

  return (
    <div className="mt-20 container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Payment History</h2>
        <button
          onClick={clearHistory}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Clear All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paymentHistory.map((payment) => (
          <div
            key={payment.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {payment.name || "Unnamed User"}
              </h3>

              <div className="flex items-center text-gray-700 mb-2">
                <FaRupeeSign className="text-green-600 mr-2" />
                <span className="font-bold text-green-700 text-lg">{payment.amount}</span>
              </div>

              <div className="flex items-center text-sm text-gray-500 mb-2">
                <FaCalendarAlt className="mr-2 text-indigo-500" />
                {payment.date}
              </div>

              <div className="flex items-center text-green-600 font-semibold">
                <FaCheckCircle className="mr-2" /> {payment.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
