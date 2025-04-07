




import React from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Footer from "../User/Footer/Footer";
export function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <div>
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full md:w-2/3 bg-gray-200 p-6 shadow-lg rounded-lg flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOnMSwbzHbviMdGkslfI60vCeCr1ZA41nDhLoP6M-EC8vumcRnTTsTEFHuly8IJbjuZ7c&usqp=CAU"
            alt="Lawyer Banner"
            className="rounded-lg shadow-lg w-full h-80 md:h-48 object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Sign Up</h2>
          <p className="text-gray-600 mb-4 text-center">Create an account to get started.</p>
          <form action="http://localhost:5000/api/signup" method="POST">
            <div className="mb-4">
              <input type="text" name="firstName" placeholder="First Name" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <input type="text" name="lastName" placeholder="Last Name" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <input type="text" name="phone" placeholder="Phone Number" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4 relative">
              <input type={passwordVisible ? "text" : "password"} name="password" placeholder="Password" className="w-full p-2 border rounded" />
              <span className="absolute right-3 top-2 cursor-pointer" onClick={() => setPasswordVisible(!passwordVisible)}>
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="mb-4 relative">
              <input type={confirmPasswordVisible ? "text" : "password"} name="confirmPassword" placeholder="Confirm Password" className="w-full p-2 border rounded" />
              <span className="absolute right-3 top-2 cursor-pointer" onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="mb-4 flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the <span className="text-blue-500">Terms and Privacy Policies</span>.
              </label>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
              Create Account
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account? <span className="text-blue-500 cursor-pointer">Login</span>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}