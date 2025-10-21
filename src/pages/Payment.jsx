// src/pages/Payment.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCreditCard, FaRupeeSign, FaLock } from "react-icons/fa";
import { usePayment } from "../context/PaymentContext";

function Payment() {
  const navigate = useNavigate();
  const { addPayment } = usePayment();

  const [paymentDetails, setPaymentDetails] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const totalAmount = 1299; // can be dynamic later

  const handleChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    e.preventDefault();

    const newPayment = {
      id: Date.now(),
      name: paymentDetails.name,
      amount: totalAmount,
      date: new Date().toLocaleString(),
      status: "Success",
    };

    addPayment(newPayment); // store in context
    navigate("/payment-success");
  };

  return (
    <div className="mt-10 min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 py-10 px-5">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          <FaCreditCard className="inline text-indigo-600 mr-2" />
          Payment Details
        </h2>

        {/* Order Summary */}
        <div className="bg-indigo-50 rounded-lg p-4 mb-6">
          <h3 className="text-gray-700 font-medium">Order Summary</h3>
          <div className="flex justify-between mt-2 text-gray-600">
            <p>Product Total</p>
            <p><FaRupeeSign className="inline mr-1" />{totalAmount}</p>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-semibold text-gray-800">
            <p>Total</p>
            <p><FaRupeeSign className="inline mr-1" />{totalAmount}</p>
          </div>
        </div>

        {/* Payment Form */}
        <form onSubmit={handlePayment} className="space-y-5">
          <input
            type="text"
            name="name"
            value={paymentDetails.name}
            onChange={handleChange}
            placeholder="Cardholder Name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />

          <input
            type="text"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handleChange}
            placeholder="Card Number"
            maxLength="16"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />

          <div className="flex space-x-3">
            <input
              type="text"
              name="expiry"
              value={paymentDetails.expiry}
              onChange={handleChange}
              placeholder="MM/YY"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <input
              type="password"
              name="cvv"
              value={paymentDetails.cvv}
              onChange={handleChange}
              placeholder="CVV"
              maxLength="3"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg flex justify-center items-center gap-2 transition-all duration-300"
          >
            <FaLock />
            Pay Securely
          </button>
        </form>
      </div>
    </div>
  );
}

export default Payment;
