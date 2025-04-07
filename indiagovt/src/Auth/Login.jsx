/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import logo from '../assets/Logo/lawyer_logo.png';
import bgimage from '../assets/Logo/bg_Login.webp';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Login failed.');

      const data = await response.json();

      // ✅ Save token in localStorage
      sessionStorage.setItem("adminToken", data.token);

      // Optional: Save token to localStorage if your backend returns it
      // localStorage.setItem("token", data.token);

      setFormData({ email: '', password: '' });
      alert('Login successful!');
      navigate('/admin'); // Change this route as per your project
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className="bg-white p-8 shadow-2xl rounded-2xl w-[90%] max-w-md">
        <div className="flex justify-between mb-6">
          <a href="/"><img src={logo} alt="Logo" width={100} /></a>
          <h2 className="text-xl font-bold mb-6 p-4 text-center">Login</h2>
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email Address"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-yellow-500"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-yellow-500"
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white p-3 rounded-lg font-semibold hover:bg-yellow-600"
          >
            Login
          </button>

          <p className="text-center text-gray-500 mt-6">
            Don't have an account?{' '}
            <a href="/signup" className="text-yellow-500 font-semibold">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
