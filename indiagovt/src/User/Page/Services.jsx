import React from "react";
import Footer from "../Footer/Footer";
import PagesBanner from "./PagesBanner";

const services = [
  {
    title: "Legal Consultation",
    description: "Get expert legal advice on various matters.",
    image: "https://media.istockphoto.com/id/1160135293/photo/business-people-discussion-advisor-concept.jpg?s=612x612&w=0&k=20&c=eGgjfD6sZl4GgJbEOqCI0fBLNyL-ncjKo75c6r06Suk=",
  },
  {
    title: "Contract Drafting",
    description: "Professional contract drafting and review.",
    image: "https://img.freepik.com/premium-photo/business-people-lawyers-discussing-contract-papers-sitting-table-concepts-law-advice-legal-services-morning-lightxa_1090013-3330.jpg",
  },
  {
    title: "Litigation Services",
    description: "Representation in court for civil and criminal cases.",
    image: "https://media.istockphoto.com/id/1477032950/photo/serious-woman-talking-to-business-clients-in-meeting-negotiation-legal-advice-or-professional.jpg?s=612x612&w=0&k=20&c=mjiYpZJARizuRvkCwYBX8bTb1o0c605SGBcvr1e-w-M=",
  },
  {
    title: "Property Law",
    description: "Expertise in property disputes and transactions.",
    image: "https://www.lexisnexis.in/blogs/wp-content/uploads/2024/01/j11.png",
  },
  {
    title: "Corporate Law",
    description: "Legal services for businesses and startups.",
    image: "https://images.shiksha.com/mediadata/images/articles/1633077700phpaCNJc7.jpeg",
  },
  {
    title: "Family Law",
    description: "Assistance with divorce, custody, and family matters.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_btPB59GF54UOlr5hGqnKOYhqcns_Hk6mQxdUq14ErY1i5qpyWRbhJVXjb--eh1NeAZ0&usqp=CAU",
  },
];

const Services = () => {
  return (
  <div>
      <div>
      <PagesBanner title="SERVICES" />
    </div>
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center mb-6">Our Legal Services</h2>
      <p className="text-center text-gray-600 mb-8">
        Providing expert legal solutions for individuals and businesses.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Services;
