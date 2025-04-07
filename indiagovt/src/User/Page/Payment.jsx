import React from "react";

const Payment = () => {
  return (
    <div className="mix-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-xl p-6 md:p-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Payment Details
        </h2>

        <form className="space-y-4">
          {/* Name on Card */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Name on Card
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Card Number */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Expiry & CVV */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700">
                Expiry Date
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700">
                CVV
              </label>
              <input
                type="password"
                placeholder="123"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
