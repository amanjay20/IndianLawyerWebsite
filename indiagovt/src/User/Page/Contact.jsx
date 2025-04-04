import React from "react";
import Navbar from "../Navbar/Navbar";
export default function Contact() {
  return (
    <div>
    <section className="w-full bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-10">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-800 text-center">Contact Us</h2>
        <p className="text-gray-600 text-center mt-3 text-lg">
          Have questions? Reach out to us, and we'll get back to you.
        </p>

        {/* Contact Grid */}
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          
          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium text-lg">Full Name</label>
              <input 
                type="text" 
                className="w-full mt-2 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-lg" 
                placeholder="John Doe" 
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium text-lg">Email</label>
              <input 
                type="email" 
                className="w-full mt-2 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-lg" 
                placeholder="johndoe@example.com" 
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium text-lg">Message</label>
              <textarea 
                className="w-full mt-2 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-lg" 
                rows="5" 
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-red-500 text-white py-4 rounded-lg font-semibold text-sm hover:bg-red-600 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Details */}
          <div className="space-y-8">
            {[
              { icon: "📍", title: "Office Address", text: "123 Legal Street, Suite 100, New York, NY" },
              { icon: "📞", title: "Phone", text: "+1 (234) 567-890" },
              { icon: "✉️", title: "Email", text: "contact@lawfirm.com" }
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="w-12 h-12 bg-red-500 text-white flex items-center justify-center rounded-lg text-2xl">
                  {item.icon}
                </div>
                <div className="ml-5">
                  <h4 className="text-xl font-bold">{item.title}</h4>
                  <p className="text-gray-600 text-lg">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="mt-12">
          <iframe
            className="w-full h-80 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509366!2d144.95565131531894!3d-37.81731297975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f5a499%3A0x2c15ab9bb6500f91!2s123%20Legal%20Street%2C%20Suite%20100%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1617263926283!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
    </div>
  );
}