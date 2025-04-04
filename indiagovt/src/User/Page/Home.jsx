import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Section/Hero'
import Footer from '../Footer/Footer'
import Dashboard from '../Section/Dashboard'
import { motion } from "framer-motion";
import ServiceSection from '../Section/ServiceSection'
import ContactSection from '../Section/ContactSection'

const banners = [
  "https://png.pngtree.com/thumb_back/fh260/background/20240913/pngtree-a-lawyer-is-sitting-at-his-desk-writing-on-the-book-image_16185992.jpg",
  "https://st.depositphotos.com/20363444/55766/i/450/depositphotos_557668174-stock-photo-close-view-wooden-judge-gavel.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa-MB4oZ-cMq82wngJBCccrsD_IdS5ok7OdqYtS7ww2r7LzfQv2VQDgSDcoKY7grsYjh8&usqp=CAU",
];
const Home = () => {
  return (
    <div>
      <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex"
        animate={{
          x: ["0%", "-100%", "-200%", "0%"],
        }}
        transition={{
          ease: "linear",
          duration: 12,
          repeat: Infinity,
        }}
      >
        {banners.concat(banners).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Banner ${index + 1}`}
            className="w-screen h-[400px] object-cover"
          />
        ))}
      </motion.div>
    </div>
    <Dashboard />
    <ServiceSection />
    <ContactSection />
 <Footer />
    </div>
  )
}

export default Home