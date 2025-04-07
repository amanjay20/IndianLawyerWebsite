import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./User/Header/Header";
import Home from "./User/Page/Home"
import Services from "./User/Page/Services"
import About from "./User/Page/About"

import Advocate from "./User/Page/Advocate"
import Navbar from "./User/Navbar/Navbar";
import Contact from "./User/Page/Contact";

import SignUp from "./Auth/SignUp";
import Login from "./Auth/Login";
import Payment from "./User/Page/Payment";

import Dashboard from "../src/Admin/Pages/DashBoard";

import ProtectedRoute from "./Routes/ProtectedRoute";


function App() {
  return (
    <Router>
      {/* Navbar ko sabhi pages par dikhane ke liye */}
     
      
        <Routes>
          
           {/* Routes with Navbar */}
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/advocate" element={<Advocate />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/payment" element={<Payment />} />
              </Routes>
            </>
          }
        />

        {/* Admin route without Navbar */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      
      
    </Router>
  );
}

export default App;
