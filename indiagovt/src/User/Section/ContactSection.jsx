import React from "react";

export default function ContactSection() {
  return (
    <section className="relative w-full h-auto min-h-[60vh]">
      {/* Background Map */}
      <iframe
        title="Law Office Location"
        className="absolute top-0 left-0 w-full h-full z-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.0692570134444!2d-85.57700568467556!3d38.24589907967851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88690c1644d13923%3A0x5d3c3b1511b12b7f!2s909%20Lily%20Creek%20Rd%20%23201%2C%20Louisville%2C%20KY%2040243%2C%20USA!5e0!3m2!1sen!2sin!4v1617257565370!5m2!1sen!2sin"
        style={{ minHeight: "400px" }}
      ></iframe>

      {/* Overlay with Grid Layout */}
      <div className="relative z-10 flex justify-center items-center w-full min-h-[400px] py-10 bg-black/60">
        <div className="bg-white w-full max-w-6xl mx-4 p-6 md:p-10 rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Content */}
          <div className="flex flex-col justify-center text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Legal Guidance You Can Trust</h2>
            <p className="text-gray-600 mb-4">
              At our law firm, we pride ourselves on offering professional legal
              solutions with integrity, experience, and a personal touch. Whether you're dealing with
              family matters, business contracts, or criminal defense—our team is here to help.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>20+ Years of Legal Experience</li>
              <li>Client-Focused, Result-Driven</li>
              <li>Free Initial Consultation</li>
            </ul>
          </div>

          {/* Right Form */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4">Contact Us</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 bg-gray-100 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-gray-100 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 bg-gray-100 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 rounded-full font-semibold text-white bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
