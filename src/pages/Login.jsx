import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  // Open modal when component mounts
  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Content */}
          <div
            className="bg-white w-full max-w-md rounded-xl p-8 relative z-10 transform transition-all duration-300 scale-100 opacity-100 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-800 text-xl font-bold"
              onClick={() => {
                setIsOpen(false)
              navigate('/')
              }}
            >
              ✕
            </button>

            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Welcome Back!
            </h3>
            <p className="text-gray-600 mb-6">Please log in to continue.</p>

            {/* Form */}
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                autoFocus
              />
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              {/* Buttons */}
              <div className="flex justify-between gap-4 mt-4">
                <button
                  type="submit"
                  onClick={()=>navigate('/')}
                  className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  Login
                </button>
                <button
                  type="button"
                  className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition"
                  onClick={() => alert("Redirect to Signup Page")}
                >
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
