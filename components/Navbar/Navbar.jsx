"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // npm i lucide-react
import { motion, AnimatePresence } from "framer-motion"; // npm i framer-motion

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle link click
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm px-6 md:px-20 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-semibold text-blue-900">
          GraphiXPro
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#portfolio" className="hover:text-blue-600">Portfolio</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#service" className="hover:text-blue-600">Service</a>
          <a href="#testimonial" className="hover:text-blue-600">Testimonial</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>

          <a
            href="#blog"
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Mobile Nav with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="mt-4 flex flex-col space-y-4 bg-gray-50 rounded-xl shadow-md p-6">
              <a href="#home" onClick={handleLinkClick} className="hover:text-blue-600">Home</a>
              <a href="#about" onClick={handleLinkClick} className="hover:text-blue-600">About</a>
              <a href="#portfolio" onClick={handleLinkClick} className="hover:text-blue-600">Portfolio</a>
              <a href="#skills" onClick={handleLinkClick} className="hover:text-blue-600">Skills</a>
              <a href="#service" onClick={handleLinkClick} className="hover:text-blue-600">Service</a>
              <a href="#testimonial" onClick={handleLinkClick} className="hover:text-blue-600">Testimonial</a>
              <a href="#contact" onClick={handleLinkClick} className="hover:text-blue-600">Contact</a>

              <a
                href="#blog"
                onClick={handleLinkClick}
                className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 w-max"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
