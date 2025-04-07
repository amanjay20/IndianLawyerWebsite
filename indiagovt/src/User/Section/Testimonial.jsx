import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Ravi Sharma",
    title: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "Their legal team helped me resolve a critical business dispute efficiently. Truly professional and trustworthy!",
  },
  {
    name: "Anita Verma",
    title: "HR Manager",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "I was impressed by their attention to detail and the way they explained every step of the legal process clearly.",
  },
  {
    name: "Sunil Mehta",
    title: "Real Estate Investor",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    feedback:
      "Exceptional service and great results. Highly recommended for any property-related legal issues.",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // 1 slide per view on mobile
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768, // <768px (mobile)
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // <1024px (tablet)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 3000, // >1024px (desktop)
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">What Our Clients Say</h2>
        <p className="mb-12 text-yellow-600">Trusted by clients across various sectors</p>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 h-full">
                <div className="flex flex-col items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-yellow-500 mb-4"
                  />
                  <p className="italic text-gray-600 mb-4">“{testimonial.feedback}”</p>
                  <div>
                    <p className="font-semibold text-yellow-700">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
