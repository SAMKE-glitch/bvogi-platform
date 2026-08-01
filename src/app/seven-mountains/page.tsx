'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { client } from '../../sanity/lib/client';
import { urlFor } from '../../sanity/lib/image';
import SevenMountains from '../../components/SevenMountains';
import { Menu, X } from 'lucide-react';

interface Settings {
  logo?: any;
  scripture?: string;
}

export default function SevenMountainsPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [settings, setSettings] = useState<Settings | null>(null);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    async function fetchSettings() {
      try {
        const data = await client.fetch(`*[_type == "settings"][0] {
          logo,
          scripture
        }`);
        setSettings(data);
        if (data?.logo) {
          setLogoUrl(urlFor(data.logo).url());
        }
      } catch (error) {
        console.error('Error fetching settings:', error);
      }
    }
    fetchSettings();
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Seven Mountains', href: '/seven-mountains' },
    { name: 'Events', href: '/#events' },
    { name: 'Contact', href: '/#contact' },
  ];

  const scrollToHome = () => {
    window.location.href = '/';
  };

  return (
    <main className="min-h-screen">
      {/* Navbar - Same as main page */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white/80 backdrop-blur-sm shadow-md py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              {logoUrl ? (
                <>
                  <img src={logoUrl} alt="BVOGI Logo" className="h-10 w-auto object-contain" />
                  <span className="text-xl font-bold hidden sm:inline">
                    <span className="text-gray-800">BV</span>
                    <span className="text-yellow-600">OGI</span>
                  </span>
                </>
              ) : (
                <div className="text-2xl font-bold">
                  <span className="text-gray-900">BV</span>
                  <span className="text-yellow-600">OGI</span>
                </div>
              )}
              <div className="hidden md:block text-xs text-gray-500 ml-1">Joel 2:1</div>
            </div>

            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-700 hover:text-yellow-600 font-medium transition">
                  {link.name}
                </a>
              ))}
            </div>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-gray-700 hover:text-yellow-600 transition">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden md:block">
              <a href="/#contact" className="bg-yellow-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition shadow-md">
                Join Movement
              </a>
            </div>
          </div>

          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden mt-4 pb-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="block py-2 text-gray-700 hover:text-yellow-600 font-medium transition" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </a>
              ))}
              <a href="/#contact" className="mt-3 bg-yellow-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition w-full block text-center">
                Join Movement
              </a>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Seven Mountains Component */}
      <div className="pt-16">
        <SevenMountains />
      </div>

      {/* Footer - Same as main page */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              {logoUrl ? (
                <img src={logoUrl} alt="BVOGI Logo" className="h-12 w-auto mb-3 object-contain" />
              ) : (
                <div className="cursor-pointer hover:opacity-80 transition" onClick={scrollToHome}>
                  <div className="text-2xl font-bold">
                    <span className="text-white">BV</span>
                    <span className="text-yellow-400">OGI</span>
                  </div>
                </div>
              )}
              <p className="text-gray-400 mt-2">Believer's Voice for Global Impact</p>
              <p className="text-sm text-yellow-500/80 mt-2 italic">{settings?.scripture || '"A Trumpet in Zion" — Joel 2:1'}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-yellow-400">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-yellow-400 transition">Home</a></li>
                <li><a href="/#about" className="hover:text-yellow-400 transition">About</a></li>
                <li><a href="/seven-mountains" className="hover:text-yellow-400 transition">Seven Mountains</a></li>
                <li><a href="/#events" className="hover:text-yellow-400 transition">Events</a></li>
                <li><a href="/#contact" className="hover:text-yellow-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-yellow-400">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@bvogi.org</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-yellow-400">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition">X</a>
              </div>
              <p className="text-sm text-yellow-500/80 mt-4">#BelieversNeedAVoice</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>
              © 2024{' '}
              <button onClick={scrollToHome} className="hover:opacity-80 transition">
                <span className="text-white">BV</span>
                <span className="text-yellow-400">OGI</span>
              </button>
              . Positioned for Global Impact.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
