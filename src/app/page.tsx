'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Heart, Globe, Award, Users, ChevronRight, Video, BookOpen, TrendingUp, Shield, Volume2, FileText, School, Menu, X } from 'lucide-react';

export default function Home() {
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
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <main className="min-h-screen">
      {/* Sticky Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 shadow-md py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold">
                <span className="text-gray-900">BV</span>
                <span className="text-yellow-600">OGI</span>
              </div>
              <div className="hidden md:block text-xs text-gray-500 ml-2">
                Joel 2:1
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-yellow-600 font-medium transition duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-700 hover:text-yellow-600 transition"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="bg-yellow-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition shadow-md">
                Join Movement
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4 pb-4"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-gray-700 hover:text-yellow-600 font-medium transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="mt-3 bg-yellow-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition w-full">
                Join Movement
              </button>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Add padding to top to prevent content from hiding under navbar */}
      <div id="home" className="pt-16">
        {/* Hero Section - White background with Yellow accents */}
        <section className="relative bg-gradient-to-br from-white via-gray-50 to-yellow-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="mb-6">
                <h1 className="text-6xl md:text-8xl font-bold tracking-wider text-gray-900">BVOGI</h1>
                <p className="text-xl md:text-2xl mt-2 text-gray-600">Believer's Voice for Global Impact</p>
                <p className="text-lg md:text-xl mt-1 text-yellow-600 italic font-semibold">"A Trumpet in Zion" — Joel 2:1</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Positioned for <span className="text-yellow-600">Global Impact</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                A movement advocating for values-driven change, shaping policy with purpose, 
                and raising leaders through mentorship.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300 shadow-lg hover:shadow-xl">
                  Join the Movement
                </button>
                <button className="border-2 border-yellow-500 text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-white transition duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About BVOGI Section */}
        <section id="about" className="py-20 bg-white scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About BVOGI</h2>
              <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
            </div>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                BVOGI (Believer's Voice for Global Impact) is a Christian youth movement focused on 
                authentic worship, leadership development, systems building, community transformation, 
                and spiritual growth.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are raising a generation of young believers who will impact their communities 
                and nations for Christ through intentional discipleship, mentorship, and strategic outreach.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Vision & Mission</h2>
              <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border border-yellow-100"
              >
                <Globe className="text-yellow-600 mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
                <p className="text-xl font-semibold text-yellow-600 mb-2">Positioned for Global Impact</p>
                <p className="text-gray-700 leading-relaxed">
                  To see believers strategically positioned across nations, influencing every sphere of society 
                  for God's kingdom and global transformation.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border border-yellow-100"
              >
                <Heart className="text-yellow-600 mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To promote education, good governance, and equity in the distribution of resources 
                  for social and economic development among vulnerable communities.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Focus Areas */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Focus Areas</h2>
              <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
              <p className="text-xl text-gray-600 mt-4">#BelieversNeedAVoice</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Volume2, title: "Authentic Voice", desc: "An authentic voice for believers in society" },
                { icon: TrendingUp, title: "Values-Driven Change", desc: "Advocating for values-driven transformation" },
                { icon: FileText, title: "Policy Shaping", desc: "Shaping policy with purpose and conviction" },
                { icon: BookOpen, title: "Research", desc: "Driving research that informs impact" },
                { icon: Users, title: "Leadership", desc: "Raising leaders through mentorship" },
                { icon: School, title: "Education", desc: "Promoting holistic, faith-based education" }
              ].map((focus, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition text-center hover:border-yellow-500 border border-transparent"
                >
                  <focus.icon className="text-yellow-600 mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{focus.title}</h3>
                  <p className="text-gray-600">{focus.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Weekly Prayer Meeting - Yellow accent */}
        <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Video className="mx-auto mb-4 text-white" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Monday Online Prayer Meeting</h2>
            <p className="text-xl text-white mb-2 font-semibold">Every Monday | 7:00 PM - 8:00 PM</p>
            <p className="text-lg mb-8 text-white/90">Join us online for powerful prayer and intercession</p>
            <div className="inline-flex items-center gap-4 bg-white/20 rounded-lg px-6 py-3 backdrop-blur">
              <span className="font-mono text-white font-semibold">📱 Scan QR Code to Join</span>
            </div>
          </div>
        </section>

        {/* Leaders Selection Criteria */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leaders Selection Criteria</h2>
              <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: "Born Again", desc: "A genuine relationship with Christ" },
                { icon: Award, title: "Faithful", desc: "Proven character and faithfulness" },
                { icon: Heart, title: "Committed", desc: "Committed to the Vision and Mission" },
                { icon: Users, title: "Mobilizer", desc: "Able to mobilize others effectively" }
              ].map((criteria, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition border border-yellow-100"
                >
                  <criteria.icon className="text-yellow-600 mx-auto mb-4" size={40} />
                  <h3 className="text-lg font-bold mb-2 text-gray-800">{criteria.title}</h3>
                  <p className="text-gray-600 text-sm">{criteria.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section id="events" className="py-20 bg-white scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
              <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Chapter Meeting", date: "Every Saturday", time: "10:00 AM", venue: "Nairobi Chapter", type: "Weekly" },
                { title: "Leadership Summit", date: "Coming Soon", time: "TBA", venue: "Online", type: "Training" },
                { title: "Global Impact Conference", date: "Annual Event", time: "TBA", venue: "Multiple Locations", type: "Main Event" }
              ].map((event, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition"
                >
                  <Calendar className="text-yellow-600 mb-4" size={24} />
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{event.title}</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center gap-2"><Calendar size={16} /><span>{event.date}</span></div>
                    <div className="flex items-center gap-2"><Clock size={16} /><span>{event.time}</span></div>
                    <div className="flex items-center gap-2"><MapPin size={16} /><span>{event.venue}</span></div>
                  </div>
                  <span className="inline-block mt-3 text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">{event.type}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration CTA */}
        <section className="py-20 bg-yellow-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join the Movement Today!</h2>
            <p className="text-xl text-white mb-4 font-semibold">Be informed. Be involved. Be the impact.</p>
            <p className="text-lg mb-8 text-white/90">#BelieversNeedAVoice #BVoGI #BeTheVoice</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
                📱 Scan QR Code to Register
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition">
                Contact Us
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-gray-900 text-white py-12 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-yellow-400">BVOGI</h3>
                <p className="text-gray-400">Believer's Voice for Global Impact</p>
                <p className="text-sm text-yellow-500/80 mt-2 italic">"A Trumpet in Zion" — Joel 2:1</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-yellow-400">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#home" className="hover:text-yellow-400 transition">Home</a></li>
                  <li><a href="#about" className="hover:text-yellow-400 transition">About</a></li>
                  <li><a href="#events" className="hover:text-yellow-400 transition">Events</a></li>
                  <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-yellow-400">Connect</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Email: info@bvogi.org</li>
                  <li>Prayer Meeting: Monday 7PM</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-yellow-400">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition">Facebook</a>
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition">Instagram</a>
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition">Twitter</a>
                </div>
                <p className="text-sm text-yellow-500/80 mt-4">#BelieversNeedAVoice</p>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
              <p>&copy; 2024 BVOGI. Positioned for Global Impact.</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
