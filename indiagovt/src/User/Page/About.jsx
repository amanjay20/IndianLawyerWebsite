import React from "react";
import Footer from "../Footer/Footer";
import PagesBanner from "./PagesBanner";
const AboutUs = () => {
  return (
    <div>
       <div>
      <PagesBanner title="ABOUT US" />
    </div>
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-6">About Our Law Firm</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
        Trusted legal professionals dedicated to justice, integrity, and results.
      </p>

      <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
        <div>
          <img
            src="https://legalgini.com/static/images/aboutus.png"
            alt="Law firm office"
            className="rounded-xl shadow-lg lg:w-2/3 md:w-full h-auto   object-cover"
          />
        </div>
        <div className="bg-white shadow-xl rounded-xl p-6 leading-relaxed text-gray-700 space-y-4">
          <p>
            At [Law Firm Name], we bring decades of combined legal expertise to serve individuals, families, and businesses with unwavering commitment and professionalism. Our team of seasoned attorneys offers strategic counsel and powerful advocacy tailored to each client’s unique circumstances l.
          </p>
          <p>
            Founded with a mission to make high-quality legal services accessible, we have grown into a respected name in the legal community. From civil litigation and family law to corporate advisory and criminal defense, we offer comprehensive legal solutions that prioritize your rights and long-term interests.
          </p>
        </div>
      </div>

      <div className="bg-white shadow-xl rounded-xl p-8 leading-relaxed text-gray-700 space-y-6">
        <p>
          Our attorneys are known not only for their courtroom excellence but also for their compassionate approach. We understand that legal issues can be overwhelming — that’s why we focus on building trust, maintaining transparency, and communicating clearly at every stage.
        </p>
        <p>
          What sets us apart is our relentless pursuit of justice and results. We don't just handle cases — we build relationships. Whether you're navigating a divorce, starting a business, facing criminal charges, or managing property disputes, we're here to guide you with skill and care.
        </p>
        <p>
          We invite you to schedule a consultation and experience legal service that goes beyond representation — legal service that truly advocates for you.
        </p>
        <p className="font-semibold text-gray-800">
          Your justice is our priority. Let us stand by your side.
        </p>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default AboutUs;