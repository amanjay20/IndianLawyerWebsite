import React, { useState } from "react";
import Logo from "../../assets/Logo/lawyer_logo.png";
import Footer from "../../User/Footer/Footer";
import PagesBanner from "./PagesBanner";

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
        <div>
      <PagesBanner title="ADVOCATE SECTION" />
    </div>
      <div className="flex flex-col md:flex-row items-stretch min-h-screen bg-gray-100 p-6">
        {/* Left Section */}
        <div className="md:w-1/2 bg-gray-200 flex flex-col justify-center p-10 rounded-lg shadow-lg text-left">
          <img src={Logo} alt="Advocate Logo" className="w-2/3 mx-auto mb-8" />
          {/* <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 via-yellow-600 to-black text-transparent bg-clip-text mb-4">
            ADVOCATE LETTERHEAD TEMPLATE
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Customize it to showcase your advocacy mission, making a strong impression on every correspondence.
          </p> */}
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 bg-white px-6 py-10 shadow-md rounded-lg flex flex-col items-center justify-center">
          <div className="w-full max-w-md">
            <div className="text-left border-b pb-4 mb-4">
              <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-500 via-yellow-600 to-black text-transparent bg-clip-text">
                Derry Advocacy Firm
              </h3>
              <p className="text-gray-500">123 Queenstile Avenue, Chester Town, Maine 9408</p>
              <p className="text-gray-500">info@derryadvocacyfirm.com | (202) 555-0199</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {["name", "email", "phone", "specialization", "experience"].map((field, i) => (
                <input
                  key={i}
                  type={field === "email" ? "email" : field === "phone" ? "tel" : field === "experience" ? "number" : "text"}
                  name={field}
                  placeholder={
                    field === "specialization"
                      ? "Specialization (e.g., Criminal, Civil)"
                      : field === "experience"
                      ? "Years of Experience"
                      : field.charAt(0).toUpperCase() + field.slice(1).replace("_", " ")
                  }
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  required
                />
              ))}

              <button
                type="submit"
                className="w-full text-white p-3 rounded font-semibold bg-gradient-to-r from-yellow-500 via-yellow-600 to-black hover:opacity-90 transition"
              >
                Submit
              </button>
            </form>

            {/* <div className="mt-8 text-center">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 via-yellow-600 to-black text-transparent bg-clip-text">
                ADVOCATE LETTERHEAD TEMPLATE
              </h2>
              <p className="text-gray-700 text-lg mt-2">
                Customize it to showcase your advocacy mission, making a strong impression on every correspondence.
              </p>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Advocate;
