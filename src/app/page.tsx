'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Heart, Globe, Award, Users, ChevronRight, Video, BookOpen, TrendingUp, Shield, Volume2, FileText, School, Menu, X, Church, Home as HomeIcon, GraduationCap, Scale, Radio, Palette, Briefcase } from 'lucide-react';
import Image from 'next/image';
import { client } from '../sanity/lib/client';
import { urlFor } from '../sanity/lib/image';
import GallerySection from '../components/GallerySection';
import VideoSection from '../components/VideoSection';
import LeadershipSection from '../components/LeadershipSection';

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
          const logo = urlFor(settingsData.logo).width(200).height(200).url();
          setLogoUrl(logo);
        }
        if (settingsData?.heroBackground) {
          setHeroUrl(urlFor(settingsData.heroBackground).url());
        }

        const registrationData = await client.fetch(`*[_type == "registration"][0] {
          registrationLink,
          qrCodeImage,
          contactEmail,
          contactPhone
        }`);
        setRegistrationLinks(registrationData);
        
        if (registrationData?.qrCodeImage) {
          setQrCodeUrl(urlFor(registrationData.qrCodeImage).url());
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Mission & Vision', href: '#mission-vision' },
    { name: 'What We Do', href: '#what-we-do' },
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
    const missionSection = document.getElementById('mission-vision');
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHome = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tagline = settings?.tagline || 'Positioned for Global Impact';
  const taglineParts = tagline.split('Global Impact');
  const beforeGlobal = taglineParts[0];
  const hasGlobalImpact = tagline.includes('Global Impact');

  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white/80 backdrop-blur-sm shadow-md py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <button 
              onClick={scrollToHome}
              className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition group"
              aria-label="Go to Home"
            >
              {logoUrl ? (
                <>
                  <Image 
                    src={logoUrl} 
                    alt="BVOGI Logo" 
                    width={40}
                    height={40}
                    className="h-10 w-auto object-contain group-hover:scale-105 transition duration-300" 
                    priority
                    unoptimized
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
                Register as Member
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
                Register as Member
              </button>
            </motion.div>
          )}
        </div>
      </nav>

      <div id="home" className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[90vh] flex items-end pb-20">
          {heroUrl ? (
            <>
              <div className="absolute inset-0">
                <img 
                  src={heroUrl} 
                  alt="BVOGI Hero Background" 
                  className="w-full h-full object-cover object-center" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-white/0"></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
              </div>
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A] via-[#1A2E45] to-[#243B55]"></div>
          )}
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <div className="mb-6">
                <p className="text-sm md:text-base text-[#D4A017] uppercase tracking-[0.25em] font-semibold mb-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                  A Trumpet in Zion — Joel 2:1
                </p>
                <h1 className="text-5xl md:text-7xl font-bold tracking-wider text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                  <span className="text-white">BV</span>
                  <span className="text-[#D4A017]">OGI</span>
                  <span className="text-white text-3xl md:text-4xl block mt-2 drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
                    — Believers' Voice for Global Impact
                  </span>
                </h1>
              </div>
              
              <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                A platform for believers across Kenya, and eventually the globe, to speak into the nations they live in — through advocacy, research, and policy development.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleRegisterClick}
                  className="bg-[#D4A017] hover:bg-[#E8B830] text-[#0D1B2A] px-8 py-3 rounded-lg font-semibold transition shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Register as Member
                </button>
                <button 
                  onClick={handleLearnMoreClick}
                  className="border-2 border-[#D4A017] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#D4A017] hover:text-[#0D1B2A] transition drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section id="mission-vision" className="py-20 bg-white scroll-mt-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mission & Vision</h2>
              <div className="w-20 h-1 bg-[#D4A017] mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-[#D4A017]/20">
                <Heart className="text-[#D4A017] mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To contribute towards social & economic development for marginalized communities by promoting good governance, holistic education & peace through advocacy, research and policy development.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-[#D4A017]/20">
                <Globe className="text-[#D4A017] mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Vision</h3>
                <p className="text-xl font-semibold text-[#D4A017] mb-2">To be Positioned for Global Impact.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Believe & Do Section */}
        <section id="what-we-do" className="py-20 bg-gray-50 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Believe & Do</h2>
              <div className="w-20 h-1 bg-[#D4A017] mx-auto"></div>
            </div>
            
            <div className="max-w-4xl mx-auto text-center mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A Christian program to contribute towards social & economic development for marginalized communities by promoting good governance, holistic education & peace through advocacy, research and policy development.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are believers, men and women who believe in the Gospel of Christ, are saved and Spirit-filled, called not just to feel transformed but to live a life of impact. Our work is to organise that calling into action: research, advocacy, and leadership that shapes real outcomes in the communities and nations we belong to.
              </p>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800">We pursue this through seven interconnected areas of influence:</h3>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { icon: Church, title: "Religion & Spiritual Development", desc: "Cultivating spiritually mature believers and transformative leaders who advance biblical values in communities and nations." },
                { icon: HomeIcon, title: "Family & Community Development", desc: "Strengthening families and building resilient, socially responsible communities." },
                { icon: GraduationCap, title: "Education & Capacity Building", desc: "Equipping believers with the knowledge, skills, and research needed for leadership and national development." },
                { icon: Scale, title: "Governance, Leadership & Civic Engagement", desc: "Promoting ethical leadership, good governance, justice, accountability, and responsible citizenship." },
                { icon: Radio, title: "Media, Communication & Information", desc: "Using media platforms to inform, inspire, and shape culture with truth and clarity." },
                { icon: Palette, title: "Arts, Culture & Creative Expression", desc: "Shaping culture and inspiring transformation through creativity." },
                { icon: Briefcase, title: "Business, Entrepreneurship & Economic Empowerment", desc: "Fostering economic transformation through entrepreneurship, ethical business, and financial stewardship." }
              ].map((area, idx) => {
                const IconComponent = area.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition text-center hover:border-[#D4A017] border border-transparent"
                  >
                    <IconComponent className="text-[#D4A017] mx-auto mb-4" size={40} />
                    <h3 className="text-base font-bold mb-2 text-gray-800">{area.title}</h3>
                    <p className="text-sm text-gray-600">{area.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <LeadershipSection />

        <GallerySection />
        <VideoSection />

        {/* Registration CTA */}
        <section className="py-20 bg-[#0D1B2A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Join the Movement Today</h2>
            <p className="text-xl text-[#8A9BB0] mb-4 font-semibold">Be informed. Be involved. Be the impact.</p>
            
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
                Register as Member
              </button>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-6 text-[#8A9BB0] text-sm">
              <span className="text-[#D4A017] font-semibold">Coming Soon:</span>
              <span>Facebook</span>
              <span>Instagram</span>
              <span>X</span>
              <span>Online Portal</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-[#0D1B2A] text-white py-12 border-t border-[#D4A017]/20 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center space-x-4">
                {logoUrl ? (
                  <button onClick={scrollToHome} className="cursor-pointer hover:opacity-80 transition">
                    <Image 
                      src={logoUrl} 
                      alt="BVOGI Logo" 
                      width={40}
                      height={40}
                      className="h-10 w-auto object-contain" 
                      unoptimized
                    />
                  </button>
                ) : (
                  <button onClick={scrollToHome} className="text-2xl font-bold cursor-pointer hover:opacity-80 transition">
                    <span className="text-white">BV</span>
                    <span className="text-[#D4A017]">OGI</span>
                  </button>
                )}
                <p className="text-[#8A9BB0] text-sm">Believer's Voice for Global Impact</p>
              </div>
              
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <a href="#home" className="text-[#8A9BB0] hover:text-[#D4A017] transition">Home</a>
                <a href="#mission-vision" className="text-[#8A9BB0] hover:text-[#D4A017] transition">Mission & Vision</a>
                <a href="#what-we-do" className="text-[#8A9BB0] hover:text-[#D4A017] transition">What We Do</a>
                <a href="#contact" className="text-[#8A9BB0] hover:text-[#D4A017] transition">Contact</a>
                <a href={`mailto:${registrationLinks?.contactEmail || 'info@bvogi.org'}`} className="text-[#8A9BB0] hover:text-[#D4A017] transition">
                  {registrationLinks?.contactEmail || 'info@bvogi.org'}
                </a>
              </div>
            </div>
            
            {/* Social Media & YouTube Section */}
            <div className="border-t border-[#D4A017]/20 mt-6 pt-6">
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
                <span className="text-[#8A9BB0]">Follow Us:</span>
                <a href="#" className="text-[#8A9BB0] hover:text-[#D4A017] transition">Facebook</a>
                <a href="#" className="text-[#8A9BB0] hover:text-[#D4A017] transition">Instagram</a>
                <a href="#" className="text-[#8A9BB0] hover:text-[#D4A017] transition">X</a>
                <a 
                  href="https://www.youtube.com/@BVOGI" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#8A9BB0] hover:text-[#D4A017] transition flex items-center gap-1"
                >
                  <span>▶</span> YouTube
                </a>
              </div>
              <p className="text-xs text-[#8A9BB0] mt-3 text-center">Subscribe to our YouTube channel for updates</p>
            </div>

            <div className="border-t border-[#D4A017]/20 mt-6 pt-6 text-center text-[#8A9BB0] text-sm">
              <button onClick={scrollToHome} className="hover:opacity-80 transition">
                <span className="text-white">BV</span>
                <span className="text-[#D4A017]">OGI</span>
              </button>
              <span> . Positioned for Global Impact.</span>
              <br />
              <span className="text-xs text-[#8A9BB0] mt-2 block">
                Developed by <a href="https://samke.tech" target="_blank" rel="noopener noreferrer" className="text-[#D4A017] hover:underline">SAMKE.tech</a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
