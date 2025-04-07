import React from "react";

const PagesBanner = ({ title }) => {
  return (
    <div
    className="relative w-full h-48 md:h-72 flex items-center justify-center bg-center bg-cover text-white"
    style={{
      backgroundImage: "url('https://t3.ftcdn.net/jpg/04/19/11/38/360_F_419113813_sP4cDZFoHeEWdRzmrTu6Lsfll8SEzXUh.jpg')", // image from public/images folder
    }}
  >

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Title */}
      <h1 className="relative text-4xl font-bold z-10">{title}</h1>
    </div>
  );
};

export default PagesBanner;
