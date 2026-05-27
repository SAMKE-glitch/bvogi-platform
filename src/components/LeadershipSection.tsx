'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Mail, Phone, Calendar, Star } from 'lucide-react';

interface Leader {
  _id: string;
  name: string;
  title: string;
  category: string;
  role: string;
  termStart?: string;
  termEnd?: string;
  isCurrentTerm: boolean;
  biography?: string;
  photo?: any;
  email?: string;
  phone?: string;
}

// Temporary mock data until Sanity is fully connected
const mockLeaders: Leader[] = [
  {
    _id: '1',
    name: 'John Mwangi',
    title: 'Chairperson',
    category: 'nec',
    role: 'chairperson',
    isCurrentTerm: true,
    termStart: '2024',
    termEnd: '2025',
    biography: 'Leading BVOGI with vision and dedication for global impact.',
    email: 'chairperson@bvogi.org',
    phone: '+254700000000'
  },
  {
    _id: '2',
    name: 'Jane Akinyi',
    title: 'Secretary General',
    category: 'nec',
    role: 'secretary',
    isCurrentTerm: true,
    termStart: '2024',
    termEnd: '2025',
    biography: 'Committed to organizational excellence and member engagement.',
    email: 'secretary@bvogi.org'
  },
  {
    _id: '3',
    name: 'Dr. Samuel Otieno',
    title: 'Board Chair',
    category: 'trustees',
    role: 'chairperson',
    isCurrentTerm: true,
    termStart: '2023',
    termEnd: '2026',
    biography: 'Providing strategic guidance and governance oversight.'
  }
];

export default function LeadershipSection() {
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // For now, use mock data
    // Later, replace with Sanity fetch
    setTimeout(() => {
      setLeaders(mockLeaders);
      setLoading(false);
    }, 500);
  }, []);

  const categories = [
    { value: 'all', label: 'All Leadership', icon: '👥' },
    { value: 'trustees', label: 'Board of Trustees', icon: '🏛️' },
    { value: 'nec', label: 'National Executive Committee', icon: '⭐' },
    { value: 'chapter', label: 'Chapter Leadership', icon: '📋' },
    { value: 'ministry', label: 'Ministry Team', icon: '🙏' },
  ];

  const filteredLeaders = selectedCategory === 'all' 
    ? leaders 
    : leaders.filter(l => l.category === selectedCategory);

  const currentLeaders = filteredLeaders.filter(l => l.isCurrentTerm);
  const previousLeaders = filteredLeaders.filter(l => !l.isCurrentTerm);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-500"></div>
        <p className="mt-2 text-gray-500">Loading leadership...</p>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Leadership</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated team leading BVOGI towards global impact
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedCategory === cat.value
                  ? 'bg-yellow-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-yellow-100 border border-yellow-200'
              }`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Current Term Leaders */}
        {currentLeaders.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Star className="text-yellow-600" size={24} />
              Current Leadership Team
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentLeaders.map((leader, idx) => (
                <motion.div
                  key={leader._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden"
                >
                  <div className="p-6">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Users className="text-yellow-600" size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 text-center">{leader.name}</h4>
                    <p className="text-yellow-600 font-semibold text-center mb-2">{leader.title}</p>
                    <p className="text-sm text-gray-500 text-center mb-3">{leader.role?.toUpperCase()}</p>
                    {leader.biography && (
                      <p className="text-gray-600 text-sm mb-4 text-center">{leader.biography}</p>
                    )}
                    <div className="flex justify-center gap-3">
                      {leader.email && (
                        <a href={`mailto:${leader.email}`} className="text-gray-500 hover:text-yellow-600 transition">
                          <Mail size={18} />
                        </a>
                      )}
                      {leader.phone && (
                        <a href={`tel:${leader.phone}`} className="text-gray-500 hover:text-yellow-600 transition">
                          <Phone size={18} />
                        </a>
                      )}
                    </div>
                    {leader.termEnd && (
                      <p className="text-xs text-gray-400 text-center mt-3">
                        Term: {leader.termStart ? `${leader.termStart} - ` : ''}{leader.termEnd}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Previous Term Leaders */}
        {previousLeaders.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Calendar className="text-gray-500" size={24} />
              Previous Leadership (Past Terms)
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-75">
              {previousLeaders.map((leader, idx) => (
                <motion.div
                  key={leader._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-xl shadow-md p-6"
                >
                  <h4 className="text-lg font-semibold text-gray-900 text-center">{leader.name}</h4>
                  <p className="text-yellow-600 text-sm text-center mb-1">{leader.title}</p>
                  <p className="text-xs text-gray-400 text-center">
                    {leader.termStart && `${leader.termStart} - `}{leader.termEnd}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
