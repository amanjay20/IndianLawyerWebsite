import React, { } from "react";
import Navbar from '../Navbar/Navbar';
import Hero from '../Section/Hero';
import Footer from '../Footer/Footer';
import Dashboard from '../Section/Dashboard';
// import { motion } from "framer-motion";
import ServiceSection from '../Section/ServiceSection';
import ContactSection from '../Section/ContactSection';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurLawyersPage from "../Section/OurLawyersPage";

const banners = [
  "https://png.pngtree.com/thumb_back/fh260/background/20240913/pngtree-a-lawyer-is-sitting-at-his-desk-writing-on-the-book-image_16185992.jpg",
  "https://st.depositphotos.com/20363444/55766/i/450/depositphotos_557668174-stock-photo-close-view-wooden-judge-gavel.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa-MB4oZ-cMq82wngJBCccrsD_IdS5ok7OdqYtS7ww2r7LzfQv2VQDgSDcoKY7grsYjh8&usqp=CAU",
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  

  

  return (
    <div className="relative w-full">
     <div className="relative w-full bg-gary-500">
      <Slider {...settings}>
        {banners.map((image, index) => (
          <div key={index} className="relative w-full">
         <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full object-contain h-auto"
              />
              {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}
            <div className="absolute top-1/3 inset-0 flex flex-col items-center md:items-start text-white container mx-auto px-6 lg:px-24 mt-8 lg:mt-12 md:mt-16">
              <h1 className="text-xl lg:text-5xl md:text-4xl font-bold md:text-left bg-opacity-50 px-1 lg:px-4 lg:py-2 rounded">
                {index === 0 }
                {index === 1 }
                {index === 2 }
              </h1>
              <h2 className="text-sm lg:text-3xl md:text-2xl  md:text-left font-bold bg-opacity-50 px-2 lg:px-4 py-2 rounded">
                {index === 0}
                {index === 1 }
                {index === 2 }
              </h2>
              <div className="w-full flex justify-left md:justify-start px-4  mt-4">
                {/* <button className="bg-green-500 text-black px-4 py-1 rounded-lg hover:bg-white  hover:border-2 transition duration-300">
                  Learn More
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
      <Dashboard />
      <OurLawyersPage/>
      <ServiceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;