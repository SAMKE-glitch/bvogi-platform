'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Heart, Globe, Award, Users, ChevronRight, Video, BookOpen, TrendingUp, Shield, Volume2, FileText, School, Menu, X } from 'lucide-react';
import Image from 'next/image';
import LeadershipSection from '../components/LeadershipSection';
import { client } from '../sanity/lib/client';
import { urlFor } from '../sanity/lib/image';
import GallerySection from '../components/GallerySection';

interface Settings {
  logo?: any;
  heroBackground?: any;
  heroOverlayOpacity?: number;
  siteTitle: string;
  tagline: string;
  scripture: string;
}

interface RegistrationLinks {
  registrationLink?: string;
  qrCodeImage?: any;
  prayerMeetingLink?: string;
  prayerMeetingQrCode?: any;
  whatsappGroupLink?: string;
  contactEmail?: string;
  contactPhone?: string;
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [settings, setSettings] = useState<Settings | null>(null);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [heroUrl, setHeroUrl] = useState<string | null>(null);
  const [registrationLinks, setRegistrationLinks] = useState<RegistrationLinks | null>(null);
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);
  const [prayerQrCodeUrl, setPrayerQrCodeUrl] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const settingsData = await client.fetch(`*[_type == "settings"][0] {
          logo,
          heroBackground,
          heroOverlayOpacity,
          siteTitle,
          tagline,
          scripture
        }`);
        setSettings(settingsData);
        
        if (settingsData?.logo) {
          setLogoUrl(urlFor(settingsData.logo).url());
        }
        if (settingsData?.heroBackground) {
          setHeroUrl(urlFor(settingsData.heroBackground).url());
        }

        const registrationData = await client.fetch(`*[_type == "registration"][0] {
          registrationLink,
          qrCodeImage,
          prayerMeetingLink,
          prayerMeetingQrCode,
          whatsappGroupLink,
          contactEmail,
          contactPhone
        }`);
        setRegistrationLinks(registrationData);
        
        if (registrationData?.qrCodeImage) {
          setQrCodeUrl(urlFor(registrationData.qrCodeImage).url());
        }
        if (registrationData?.prayerMeetingQrCode) {
          setPrayerQrCodeUrl(urlFor(registrationData.prayerMeetingQrCode).url());
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Seven Mountains', href: '/seven-mountains' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleRegisterClick = () => {
    if (registrationLinks?.registrationLink) {
      window.open(registrationLinks.registrationLink, '_blank');
    } else {
      alert('Registration link coming soon!');
    }
  };

  const handleLearnMoreClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHome = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Split the tagline to color "Global Impact" in gold
  const tagline = settings?.tagline || 'Positioned for Global Impact';
  const taglineParts = tagline.split('Global Impact');
  const beforeGlobal = taglineParts[0];
  const hasGlobalImpact = tagline.includes('Global Impact');

  return (
    <main className="min-h-screen">
      {/* Navbar - White/Light like before */}
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
            </div>

            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-700 hover:text-[#D4A017] font-medium transition">
                  {link.name}
                </a>
              ))}
            </div>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-gray-700 hover:text-[#D4A017] transition">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden md:block">
              <button 
                onClick={handleRegisterClick}
                className="bg-[#D4A017] text-[#0D1B2A] px-5 py-2 rounded-lg font-semibold hover:bg-[#E8B830] transition shadow-md"
              >
                Join Movement
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden mt-4 pb-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="block py-2 text-gray-700 hover:text-[#D4A017] font-medium transition" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </a>
              ))}
              <button 
                onClick={handleRegisterClick}
                className="mt-3 bg-[#D4A017] text-[#0D1B2A] px-5 py-2 rounded-lg font-semibold hover:bg-[#E8B830] transition w-full"
              >
                Join Movement
              </button>
            </motion.div>
          )}
        </div>
      </nav>

      <div id="home" className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[90vh] flex items-center">
          {heroUrl ? (
            <>
              <div className="absolute inset-0">
                <img src={heroUrl} alt="BVOGI Hero Background" className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-black" style={{ opacity: settings?.heroOverlayOpacity || 0.4 }}></div>
              </div>
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A] via-[#1A2E45] to-[#243B55]"></div>
          )}
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <div className="mb-6">
                <h1 className="text-5xl md:text-7xl font-bold tracking-wider text-white">
                  <span className="text-white">BV</span>
                  <span className="text-[#D4A017]">OGI</span>
                </h1>
                <p className="text-xl md:text-2xl mt-3 text-white/90">Believer's Voice for Global Impact</p>
                <p className="text-md md:text-lg mt-2 text-[#D4A017] italic font-semibold">{settings?.scripture || '"A Trumpet in Zion" — Joel 2:1'}</p>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                {hasGlobalImpact ? (
                  <>
                    {beforeGlobal}
                    <span className="text-[#D4A017]">Global Impact</span>
                  </>
                ) : (
                  tagline
                )}
              </h2>
              
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12">
                A movement advocating for values-driven change, shaping policy with purpose, and raising leaders through mentorship.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleRegisterClick}
                  className="bg-[#D4A017] hover:bg-[#E8B830] text-[#0D1B2A] px-8 py-3 rounded-lg font-semibold transition shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Join the Movement
                </button>
                <button 
                  onClick={handleLearnMoreClick}
                  className="border-2 border-[#D4A017] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#D4A017] hover:text-[#0D1B2A] transition"
                >
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
              <div className="w-20 h-1 bg-[#D4A017] mx-auto"></div>
            </div>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                BVOGI (Believer's Voice for Global Impact) is a Christian youth movement focused on 
                authentic worship, leadership development, systems building, community transformation, and spiritual growth.
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
              <div className="w-20 h-1 bg-[#D4A017] mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4A017]/20">
                <Globe className="text-[#D4A017] mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
                <p className="text-xl font-semibold text-[#D4A017] mb-2">Positioned for Global Impact</p>
                <p className="text-gray-700">To see believers strategically positioned across nations, influencing every sphere of society for God's kingdom and global transformation.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4A017]/20">
                <Heart className="text-[#D4A017] mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
                <p className="text-gray-700">To promote education, good governance, and equity in the distribution of resources for social and economic development among vulnerable communities.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Focus Areas */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Focus Areas</h2>
              <div className="w-20 h-1 bg-[#D4A017] mx-auto"></div>
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
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl text-center hover:border-[#D4A017] border border-transparent">
                  <focus.icon className="text-[#D4A017] mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{focus.title}</h3>
                  <p className="text-gray-600">{focus.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leaders Selection Criteria - Navy/Gold theme */}
        <section className="py-20 bg-[#0D1B2A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Leaders Selection Criteria</h2>
              <div className="w-20 h-1 bg-[#D4A017] mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: "Born Again", desc: "A genuine relationship with Christ" },
                { icon: Award, title: "Faithful", desc: "Proven character and faithfulness" },
                { icon: Heart, title: "Committed", desc: "Committed to the Vision and Mission" },
                { icon: Users, title: "Mobilizer", desc: "Able to mobilize others effectively" }
              ].map((criteria, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="text-center p-6 bg-[#1A2E45] rounded-xl shadow-lg hover:shadow-xl border border-[#D4A017]/20">
                  <criteria.icon className="text-[#D4A017] mx-auto mb-4" size={40} />
                  <h3 className="text-lg font-bold mb-2 text-white">{criteria.title}</h3>
                  <p className="text-[#8A9BB0] text-sm">{criteria.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <LeadershipSection />

        {/* Upcoming Events - Navy/Gold theme */}
        <section id="events" className="py-20 bg-white scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
              <div className="w-20 h-1 bg-[#D4A017] mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Chapter Meeting", date: "Every Saturday", time: "10:00 AM", venue: "Nairobi Chapter", type: "Weekly" },
                { title: "Leadership Summit", date: "Coming Soon", time: "TBA", venue: "Online", type: "Training" },
                { title: "Global Impact Conference", date: "Annual Event", time: "TBA", venue: "Multiple Locations", type: "Main Event" }
              ].map((event, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                  <Calendar className="text-[#D4A017] mb-4" size={24} />
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{event.title}</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center gap-2"><Calendar size={16} /><span>{event.date}</span></div>
                    <div className="flex items-center gap-2"><Clock size={16} /><span>{event.time}</span></div>
                    <div className="flex items-center gap-2"><MapPin size={16} /><span>{event.venue}</span></div>
                  </div>
                  <span className="inline-block mt-3 text-sm bg-[#D4A017]/10 text-[#D4A017] px-2 py-1 rounded-full">{event.type}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration CTA - Navy/Gold theme */}
        <section className="py-20 bg-[#0D1B2A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Join the Movement Today!</h2>
            <p className="text-xl text-[#8A9BB0] mb-4 font-semibold">Be informed. Be involved. Be the impact.</p>
            <p className="text-lg mb-8 text-[#D4A017]">#BelieversNeedAVoice #BVoGI #BeTheVoice</p>
            
            {qrCodeUrl && (
              <div className="mb-6">
                <img src={qrCodeUrl} alt="Registration QR Code" className="w-40 h-40 mx-auto bg-white p-2 rounded-xl shadow-lg" />
                <p className="text-[#8A9BB0] text-sm mt-2">Scan to register</p>
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleRegisterClick}
                className="bg-[#D4A017] text-[#0D1B2A] px-8 py-3 rounded-lg font-semibold hover:bg-[#E8B830] transition shadow-lg transform hover:scale-105"
              >
                📱 Register Now
              </button>
              <a 
                href={`mailto:${registrationLinks?.contactEmail || 'info@bvogi.org'}`}
                className="border-2 border-[#D4A017] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#D4A017] hover:text-[#0D1B2A] transition text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        <GallerySection />

        {/* Footer - Navy theme matching Seven Mountains */}
        <footer id="contact" className="bg-[#0D1B2A] text-white py-12 border-t border-[#D4A017]/20 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                {logoUrl ? (
                  <img src={logoUrl} alt="BVOGI Logo" className="h-12 w-auto mb-3 object-contain" />
                ) : (
                  <div className="cursor-pointer hover:opacity-80 transition" onClick={scrollToHome}>
                    <div className="text-2xl font-bold">
                      <span className="text-white">BV</span>
                      <span className="text-[#D4A017]">OGI</span>
                    </div>
                  </div>
                )}
                <p className="text-[#8A9BB0] mt-2">Believer's Voice for Global Impact</p>
                <p className="text-sm text-[#D4A017]/80 mt-2 italic">{settings?.scripture || '"A Trumpet in Zion" — Joel 2:1'}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-[#D4A017]">Quick Links</h4>
                <ul className="space-y-2 text-[#8A9BB0]">
                  <li><a href="#home" className="hover:text-[#D4A017] transition">Home</a></li>
                  <li><a href="#about" className="hover:text-[#D4A017] transition">About</a></li>
                  <li><a href="/seven-mountains" className="hover:text-[#D4A017] transition">Seven Mountains</a></li>
                  <li><a href="#events" className="hover:text-[#D4A017] transition">Events</a></li>
                  <li><a href="#contact" className="hover:text-[#D4A017] transition">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-[#D4A017]">Connect</h4>
                <ul className="space-y-2 text-[#8A9BB0]">
                  <li>Email: {registrationLinks?.contactEmail || 'info@bvogi.org'}</li>
                  {registrationLinks?.whatsappGroupLink && (
                    <li><a href={registrationLinks.whatsappGroupLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#D4A017] transition">WhatsApp Group</a></li>
                  )}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-[#D4A017]">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-[#8A9BB0] hover:text-[#D4A017] transition">Facebook</a>
                  <a href="#" className="text-[#8A9BB0] hover:text-[#D4A017] transition">Instagram</a>
                  <a href="#" className="text-[#8A9BB0] hover:text-[#D4A017] transition">X</a>
                </div>
                <p className="text-sm text-[#D4A017]/80 mt-4">#BelieversNeedAVoice</p>
              </div>
            </div>
            <div className="border-t border-[#D4A017]/20 mt-8 pt-8 text-center text-[#8A9BB0]">
              <p>
                © 2024{' '}
                <button onClick={scrollToHome} className="hover:opacity-80 transition">
                  <span className="text-white">BV</span>
                  <span className="text-[#D4A017]">OGI</span>
                </button>
                . Positioned for Global Impact.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
