// src/pages/PaymentSuccess.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-100 via-emerald-100 to-green-200 text-center p-6">
      <FaCheckCircle className="text-green-600 text-6xl mb-4" />
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">
        Payment Successful!
      </h2>
      <p className="text-gray-600 mb-6">
        Thank you for your payment. Your transaction has been completed successfully.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/payment-history")}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          View History
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default PaymentSuccess;
