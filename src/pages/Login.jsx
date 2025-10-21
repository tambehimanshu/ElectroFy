import React, { useState, useEffect } from "react";

function Login() {
  const [isOpen, setIsOpen] = useState(false);

  // Open modal on component mount
  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Content */}
          <div
            className="bg-white w-full max-w-md rounded-xl p-6 relative z-10 transform transition-all duration-300 opacity-0 scale-90 animate-slideFadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute right-4 top-4 text-gray-600 hover:text-gray-900 text-xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Welcome Back!</h3>
            <p className="text-gray-600 mb-6">Please log in to continue.</p>

            {/* Form */}
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
                autoFocus
              />
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
