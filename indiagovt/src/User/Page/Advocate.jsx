import React, { useState } from "react";
import Logo from "../../assets/Logo/lawyer_logo.png"
import Footer from "../../User/Footer/Footer"
const Advocate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialization: "",
    experience: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div>
    <div className="flex flex-col md:flex-row items-stretch mix-h-screen bg-gray-100 p-6">
      {/* Left Side Branding Section */}
      <div className="md:w-1/2 bg-blue-50 flex flex-col justify-center p-10 rounded-lg shadow-lg text-left">
        <img src={Logo} alt="Advocate Logo" className="w-2/3  mx-auto mb-8" />
        <h2 className="text-3xl font-bold text-blue-700 mb-4">ADVOCATE LETTERHEAD TEMPLATE</h2>
        <p className="text-gray-700 text-lg mb-6">
          Customize it to showcase your advocacy mission, making a strong impression on every correspondence.
        </p>
        {/* <div className="flex justify-center space-x-4">
          <img src="/word-icon.png" alt="Word Format" className="w-10 h-10" />
          <img src="/pdf-icon.png" alt="PDF Format" className="w-10 h-10" />
        </div> */}
      </div>
      
      {/* Right Side Form Section */}
      <div className="md:w-1/2 bg-white p-8 shadow-md rounded-lg">
        <div className="text-left border-b pb-4 mb-4">
          <h3 className="text-xl font-bold">Derry Advocacy Firm</h3>
          <p className="text-gray-500">123 Queenstile Avenue, Chester Town, Maine 9408</p>
          <p className="text-gray-500">info@derryadvocacyfirm.com | (202) 555-0199</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="specialization"
            placeholder="Specialization (e.g., Criminal, Civil)"
            value={formData.specialization}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            name="experience"
            placeholder="Years of Experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Submit</button>
        </form>
        <h2 className="text-3xl font-bold text-blue-700 mt-8">ADVOCATE LETTERHEAD TEMPLATE</h2>
        <p className="text-gray-700 text-lg mb-6">
          Customize it to showcase your advocacy mission, making a strong impression on every correspondence.
        </p>
      </div>
    
      </div>
        <Footer />
        </div>
  );
};

export default Advocate;