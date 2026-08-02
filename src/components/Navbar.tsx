'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  logoUrl?: string | null;
  onRegisterClick?: () => void;
}

export default function Navbar({ logoUrl, onRegisterClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Mission & Vision', href: '#mission-vision' },
    { name: 'What We Do', href: '#what-we-do' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToHome = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white/80 backdrop-blur-sm shadow-md py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Clickable */}
          <button 
            onClick={scrollToHome}
            className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition group"
            aria-label="Go to Home"
          >
            {logoUrl ? (
              <>
                <img 
                  src={logoUrl} 
                  alt="BVOGI Logo" 
                  className="h-10 w-auto object-contain group-hover:scale-105 transition duration-300" 
                />
                <span className="text-xl font-bold hidden sm:inline">
                  <span className="text-gray-800">BV</span>
                  <span className="text-[#D4A017]">OGI</span>
                </span>
              </>
            ) : (
              <div className="text-2xl font-bold">
                <span className="text-gray-900">BV</span>
                <span className="text-[#D4A017]">OGI</span>
              </div>
            )}
            <div className="hidden md:block text-xs text-gray-500 ml-1">Joel 2:1</div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-700 hover:text-[#D4A017] font-medium transition">
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-gray-700 hover:text-[#D4A017] transition">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Register Button */}
          <div className="hidden md:block">
            <button 
              onClick={onRegisterClick}
              className="bg-[#D4A017] text-[#0D1B2A] px-5 py-2 rounded-lg font-semibold hover:bg-[#E8B830] transition shadow-md"
            >
              Register as Member
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden mt-4 pb-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="block py-2 text-gray-700 hover:text-[#D4A017] font-medium transition" onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <button 
              onClick={onRegisterClick}
              className="mt-3 bg-[#D4A017] text-[#0D1B2A] px-5 py-2 rounded-lg font-semibold hover:bg-[#E8B830] transition w-full"
            >
              Register as Member
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
