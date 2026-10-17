'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* ========================================================= */}
      {/* 🔍 HIGHLIGHTED CHANGE: TRANSPARENT GREEN HAMBURGER BUTTON */}
      {/* ========================================================= */}
      <button 
        onClick={toggleSidebar}
        aria-label="Toggle Menu"
        className="p-2 bg-transparent rounded-lg hover:bg-gray-100 transition flex flex-col justify-center items-center gap-1.5 cursor-pointer focus:outline-none"
      >
        {/* Top Line */}
        <span 
          className={`w-6 h-0.5 bg-[#33A259] rounded-full transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`} 
        />
        {/* Middle Line */}
        <span 
          className={`w-6 h-0.5 bg-[#33A259] rounded-full transition-all duration-300 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`} 
        />
        {/* Bottom Line */}
        <span 
          className={`w-6 h-0.5 bg-[#33A259] rounded-full transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`} 
        />
      </button>
      {/* ========================================================= */}

      {/* Backdrop Overlay */}
      {isOpen && (
        <div 
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        />
      )}

      {/* Sliding Sidebar Panel (Anchored to Right) */}
      <div 
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col justify-between ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Upper Menu Content */}
        <div>
          <div className="p-5 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-800">Menu</h2>
            <button 
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-gray-800 text-xl font-bold p-1"
            >
              ✕
            </button>
          </div>

          <nav className="p-6 flex flex-col space-y-4">
            <Link 
              href="/" 
              onClick={toggleSidebar}
              className="text-gray-700 hover:text-[#33A259] font-medium transition py-2 border-b border-gray-50"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              onClick={toggleSidebar}
              className="text-gray-700 hover:text-[#33A259] font-medium transition py-2 border-b border-gray-50"
            >
              About
            </Link>
            <Link 
              href="/services" 
              onClick={toggleSidebar}
              className="text-gray-700 hover:text-[#33A259] font-medium transition py-2 border-b border-gray-50"
            >
              Services
            </Link>
          </nav>
        </div>

        {/* Bottom Section: Contact Button Inside Menu */}
        <div className="p-6 border-t border-gray-100 bg-gray-50">
          <Link
            href="/contact"
            onClick={toggleSidebar}
            className="block w-full text-center text-white bg-[#33A259] hover:bg-[#33A259]/90 font-bold py-3 px-6 rounded-lg transition shadow-md"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}