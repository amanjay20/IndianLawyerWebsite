import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./User/Header/Header";
import Home from "./User/Page/Home"
import Services from "./User/Page/Services"
import About from "./User/Page/About"

import Advocate from "./User/Page/Advocate"
import Navbar from "./User/Navbar/Navbar";
import Contact from "./User/Page/Contact";

import SignUp from "./Auth/signup";
import Payment from "./User/Page/Payment";


function App() {
  return (
    <Router>
      {/* Navbar ko sabhi pages par dikhane ke liye */}
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/advocate" element={<Advocate />} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
