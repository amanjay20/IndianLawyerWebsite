import React from "react";
export default function ContactSection() {
    return (
      <section className="w-full bg-gray-100 py-10 px-6 md:px-20">
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-2xl rounded-2xl">
          {/* Heading */}
          <h2 className="text-4xl font-extrabold text-gray-800 text-center">Get in Touch</h2>
          <p className="text-gray-500 text-center mt-2">
            We'd love to hear from you! Fill out the form below.
          </p>
  
          {/* Contact Form */}
          <form className="mt-6 space-y-5">
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              ></textarea>
            </div>
  
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
  
          {/* Contact Info */}
          <div className="mt-8 text-center text-gray-600">
            <p>Email: <span className="font-medium text-gray-800">contact@lawfirm.com</span></p>
            <p>Phone: <span className="font-medium text-gray-800">+1 234 567 890</span></p>
          </div>
        </div>
      </section>
    );
  }
  