import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample lawyer data (replace with your actual data and image URLs)
const lawyersData = [
  {
    name: "Advocate Ramesh Kumar",
    image: "https://images.unsplash.com/photo-1662104935762-707db0439ecd?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    expertise: "Criminal Law, Civil Litigation",
  },
  {
    name: "Advocate Priya Sharma",
    image: "https://images.unsplash.com/photo-1662104935883-e9dd0619eaba?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    expertise: "Family Law, Divorce Cases",
  },
  {
    name: "Advocate Sanjay Verma",
    image: "https://images.unsplash.com/photo-1662104935741-3feec65ddf3f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    expertise: "Corporate Law, Commercial Disputes",
  },
  {
    name: "Advocate Anjali Gupta",
    image: "https://images.unsplash.com/photo-1662104935541-aa5b6e02886d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    expertise: "Property Law, Real Estate",
  },
  {
    name: "Advocate Vivek Singh",
    image: "https://via.placeholder.com/400/FF9800/000000?Text=Lawyer+5",
    expertise: "Cyber Law, Intellectual Property",
  },
  {
    name: "Advocate Neha Desai",
    image: "https://images.unsplash.com/photo-1662104935703-b4e193c3a852?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    expertise: "Constitutional Law, Human Rights",
  },
  // Add more lawyer data as needed
];

const LawyerCard = ({ lawyer }) => (
  <div className="bg-white rounded-md shadow-md p-4 flex flex-col items-center">
    <div className="flex justify-center w-full mb-2">
      <img
        src={lawyer.image}
        alt={lawyer.name}
        className="rounded-md w-full h-96 object-cover"
      />
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mb-1 text-center">{lawyer.name}</h3>
    <p className="text-sm text-gray-600 text-center">{lawyer.expertise}</p>
  </div>
);

const OurLawyersPage = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth < 1024); // Adjust breakpoint as needed
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-amber-50 py-1 mb-10 lg:min-h-screen flex justify-center items-center">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Experienced Lawyers</h1>

        {isMobileOrTablet ? (
          <div className="relative flex justify-center"> {/* Center the Slider container */}
            <div className="w-full max-w-md"> {/* Limit the width of the slider */}
              <Slider ref={sliderRef} {...sliderSettings}>
                {lawyersData.map((lawyer) => (
                  <div key={lawyer.name} className="px-2 flex justify-center">
                    <div className="w-full"> {/* Let the card take full width within the limited slider */}
                      <LawyerCard lawyer={lawyer} />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lawyersData.slice(0, 4).map((lawyer) => (
              <LawyerCard key={lawyer.name} lawyer={lawyer} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OurLawyersPage;