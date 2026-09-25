import React from 'react';
import { Facebook, Youtube } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/Osrtrips_Logo.png";

const Footer = () => {
  return (
    <footer className='w-full bg-black text-white py-8 px-4 sm:px-8 md:px-16'>
      {/* Top Section */}
      <div className='flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-6'>
        {/* Logo */}
        <div className='flex items-center gap-3'>
          <a href="/">
            <img className="h-16 sm:h-20" src={logo} alt="logo" />
          </a>
          <h1 className='text-lg sm:text-xl md:text-2xl font-semibold'>OSR Trips</h1>
        </div>

        {/* Contact Info */}
        <div className='text-center md:text-left'>
          <ul className='flex flex-col gap-1'>
            <li>Kathmandu</li>
            <li>+977-9816940114</li>
            <li>osrtrips@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-600 pt-4'>
        <div className='text-sm sm:text-base text-center md:text-left'>
          <h2>@ 2026 OSR Trips. All Rights Reserved</h2>
        </div>

        {/* Social Icons */}
        <div className='flex gap-4'>
          <a href="https://www.facebook.com/profile.php?id=61559202380153&rdid=2IW3lYpsW4B7SRtG&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AJo64zX65%2F#" target="_blank">
            <Facebook size={24} />
          </a>
          <a href="https://www.youtube.com/@OSRTrips" target="_blank">
            <Youtube size={24} />
          </a>
          <a href="https://wa.me/9779816940114" target="_blank">
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
