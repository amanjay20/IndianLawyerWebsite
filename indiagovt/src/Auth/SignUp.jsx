import React from 'react'
import logo from '../assets/Logo/lawyer_logo.png'
import bgimage from '../assets/Logo/bg_Login.webp'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
    });
    const [error, setError] = useState("");
  
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      const { name, email, password } = formData;
      if (!name || !email || !password) {
        setError("All fields are required.");
        return;
      }
      try {
        const response = await fetch("/api/admin/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) throw new Error("Registration failed.");
  
        setFormData({ name: "", email: "", password: "" });
        alert("Thank you for signing up!");
        navigate("/login")
      } catch (err) {
        setError(err.message);
      }
    }
  return (
    <div
          className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
          style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className="bg-white p-8 shadow-2xl rounded-2xl w-[90%] max-w-md">
        <div className="flex justify-between mb-6">
                 <a href="/"><img src={logo} alt="Tiffin Center" width={100}/></a>
                 <h2 className="text-xl font-bold mb-6 p-4 text-center">SignUp</h2>
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form  onSubmit={handleSubmit}>
          <input
           type="text"
           name="name"
           value={formData.name}
           onChange={handleChange}
            placeholder="Enter Full Name"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-green-500"
          />
          <input
           type="email"
           name="email"
           value={formData.email}
           onChange={handleChange}
            placeholder="Enter Email Address"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-green-500"
          />
          <input
             type="password"
             name="password"
             value={formData.password}
             onChange={handleChange}
            placeholder="Enter Password"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-green-500"
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white p-3 rounded-lg font-semibold hover:bg-yellow-600"
          >
            Signup
          </button>

          <p className="text-center text-gray-500 mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-yellow-500 font-semibold">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignUp