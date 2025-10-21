// src/context/PaymentContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const [paymentHistory, setPaymentHistory] = useState(() => {
    // Load from localStorage on start
    const storedPayments = localStorage.getItem("paymentHistory");
    return storedPayments ? JSON.parse(storedPayments) : [];
  });

  // Save to localStorage whenever history updates
  useEffect(() => {
    localStorage.setItem("paymentHistory", JSON.stringify(paymentHistory));
  }, [paymentHistory]);

  const addPayment = (payment) => {
    setPaymentHistory((prev) => [...prev, payment]);
  };

  const clearHistory = () => setPaymentHistory([]);

  return (
    <PaymentContext.Provider value={{ paymentHistory, addPayment, clearHistory }}>
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => useContext(PaymentContext);
    