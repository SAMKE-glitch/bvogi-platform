'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Heart, Globe, Award, Users, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                BVOGI
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              Believers Voice for Global Impact
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-12">
              A movement for believers called to authentic worship, systems building, 
              influence, transformation, and impact across communities and nations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl">
                Join Our Movement
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About BVOGI Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About BVOGI</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              BVOGI (Believers Voice for Global Impact) is a Christian youth movement focused on 
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
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
            >
              <Globe className="text-blue-600 mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To see a generation of young believers transformed and empowered to impact their 
                communities and nations for Christ through authentic worship and intentional systems building.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
            >
              <Heart className="text-orange-600 mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To build a movement that develops authentic worshippers, raises systems-building leaders, 
                and creates sustainable impact across communities through strategic discipleship and mentorship.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Values</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-4">What drives the BVOGI movement</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Authentic Worship", desc: "Genuine praise and fellowship in spirit and truth" },
              { icon: Users, title: "Community", desc: "Building strong, supportive relationships" },
              { icon: Award, title: "Leadership", desc: "Developing next-generation leaders" },
              { icon: Globe, title: "Global Impact", desc: "Reaching nations with transformative message" }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <value.icon className="text-blue-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-4">Join us in these life-changing gatherings</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "BVOGI Worship Encounter 2026", date: "August 15, 2026", time: "9:00 AM - 6:00 PM", venue: "Nairobi, Kenya", type: "Main Event" },
              { title: "Leadership Development Summit", date: "September 20, 2026", time: "10:00 AM - 4:00 PM", venue: "Online (Zoom)", type: "Training" },
              { title: "Weekly Youth Fellowship", date: "Every Friday", time: "5:00 PM - 7:00 PM", venue: "Various Locations", type: "Weekly" }
            ].map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <Calendar className="text-blue-600" size={24} />
                  <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded-full">{event.type}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center gap-2"><Calendar size={16} /><span>{event.date}</span></div>
                  <div className="flex items-center gap-2"><Clock size={16} /><span>{event.time}</span></div>
                  <div className="flex items-center gap-2"><MapPin size={16} /><span>{event.venue}</span></div>
                </div>
                <button className="mt-4 text-blue-600 font-semibold flex items-center gap-1 hover:gap-2 transition">
                  Learn More <ChevronRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join the Movement?</h2>
          <p className="text-xl mb-8 opacity-90">Become part of a growing family of believers making an impact</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              Register Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">BVOGI</h3>
              <p className="text-gray-400">Believers Voice for Global Impact</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Home</a></li>
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Events</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@bvogi.org</li>
                <li>Phone: +254 XXX XXX XXX</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BVOGI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
