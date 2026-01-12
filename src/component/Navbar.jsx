import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";

import { Facebook, Youtube, Menu, X } from "lucide-react"; // Added Menu & X icons

import { FaWhatsapp } from "react-icons/fa";

import logo from "../assets/Osrtrips_logo.png";

import whatsappimg from "../assets/whatsappimg.jpeg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false); // for hamburger toggle

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Home", path: "/" },

    { name: "Our Services", path: "/OurServices" },

    { name: "Travel Moments", path: "/TravelMomentd" },

    { name: "Get in Touch", path: "/GetInTouch" },
  ];

  return (
    <div>
      {/* Main Navbar */}

      <div
        className={`flex justify-between items-center fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300 px-6 text-[#e8700e]  ${
          scrolled ? "h-16" : "h-28"
        }`}
      >
        {/* Left side - Logo */}

        <div className="flex items-center gap-5">
          <NavLink to="/">
            <img className="h-16 md:h-20" src={logo} alt="logo" />
          </NavLink>

          <NavLink to="/">
            <h1 className="text-2xl md:text-3xl font-extralight text-[#e8700e]">OSR Trips</h1>
          </NavLink>
        </div>

        {/* Desktop Links */}

        <div className="hidden md:flex gap-6 items-center text-[#e8700e]">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `${
                  isActive ? "underline" : ""
                } text-xl hover:underline font-extralight`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Social Icons */}

        <div className="hidden md:flex gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=61559202380153"
            target="_blank"
          >
            <Facebook />
          </a>

          <a href="https://www.youtube.com/@OSRTrips" target="_blank">
            <Youtube />
          </a>

          <a href="https://wa.me/9779816940114" target="_blank">
            <FaWhatsapp size={23} />
          </a>
        </div>

        {/* Hamburger Menu Icon */}

        <div className="md:hidden flex items-center ">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col items-center justify-center gap-8 text-[#e8700e]">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)} // close menu on click
              className={({ isActive }) =>
                `${
                  isActive ? "underline" : ""
                } text-2xl hover:underline font-extralight`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="flex gap-6 mt-4">
            <a
              href="https://www.facebook.com/profile.php?id=61559202380153"
              target="_blank"
            >
              <Facebook />
            </a>

            <a href="https://www.youtube.com/@OSRTrips" target="_blank">
              <Youtube />
            </a>

            <a href="https://wa.me/9779816940114" target="_blank">
              <FaWhatsapp size={28} />
            </a>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}

      <a href="https://wa.me/9779816940114" target="_blank">
        <img
          src={whatsappimg}
          alt="WhatsApp"
          className="h-14 w-14 fixed bottom-10 right-5 rounded-full z-50 shadow-lg"
        />
      </a>
    </div>
  );
};

export default Navbar;
