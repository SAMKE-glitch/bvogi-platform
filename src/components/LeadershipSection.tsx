'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Mail, Phone, Calendar, Star } from 'lucide-react';
import Image from 'next/image';
import { client } from '../sanity/lib/client';
import { urlFor } from '../sanity/lib/image';

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

// BVOGI Leadership Team - All 7 members under NEC (2025-2028)
const mockLeaders: Leader[] = [
  // National Executive Committee (NEC) - Term 2025-2028
  {
    _id: '1',
    name: 'Joyce Wanjalah Lay',
    title: 'Chairperson',
    category: 'nec',
    role: 'chairperson',
    isCurrentTerm: true,
    termStart: '2025',
    termEnd: '2028',
    biography: 'Passionate leader committed to empowering believers for global impact.',
    email: 'chairperson@bvogi.org',
    phone: '+254700000001'
  },
  {
    _id: '2',
    name: 'David Ben Jesse',
    title: 'Secretary',
    category: 'nec',
    role: 'secretary',
    isCurrentTerm: true,
    termStart: '2025',
    termEnd: '2028',
    biography: 'Dedicated servant with a heart for governance and documentation.',
    email: 'secretary@bvogi.org'
  },
  {
    _id: '3',
    name: 'Rozina Wawuda Mwakideu',
    title: 'Treasurer',
    category: 'nec',
    role: 'treasurer',
    isCurrentTerm: true,
    termStart: '2025',
    termEnd: '2028',
    biography: 'Financial steward with a passion for accountability and transparency.',
    email: 'treasurer@bvogi.org'
  },
  {
    _id: '4',
    name: 'Stephen Isaiah James',
    title: 'Board Member',
    category: 'nec',
    role: 'member',
    isCurrentTerm: true,
    termStart: '2025',
    termEnd: '2028',
    biography: 'Visionary leader with a heart for governance and strategic direction.'
  },
  {
    _id: '5',
    name: 'Allan Kimonge',
    title: 'Board Member',
    category: 'nec',
    role: 'member',
    isCurrentTerm: true,
    termStart: '2025',
    termEnd: '2028',
    biography: 'Bringing experience in community development and organizational management.'
  },
  {
    _id: '6',
    name: 'Elsie Newa',
    title: 'Board Member',
    category: 'nec',
    role: 'member',
    isCurrentTerm: true,
    termStart: '2025',
    termEnd: '2028',
    biography: 'Passionate about youth empowerment and community transformation.'
  },
  {
    _id: '7',
    name: 'Ann Murathe',
    title: 'Board Member',
    category: 'nec',
    role: 'member',
    isCurrentTerm: true,
    termStart: '2025',
    termEnd: '2028',
    biography: 'Seasoned professional dedicated to serving the community and advancing Kingdom values.'
  }
];

export default function LeadershipSection() {
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    async function fetchLeaders() {
      try {
        const data = await client.fetch(`*[_type == "team" && published == true] | order(category asc, order asc) {
          _id,
          name,
          title,
          category,
          role,
          termStart,
          termEnd,
          isCurrentTerm,
          biography,
          photo,
          email,
          phone
        }`);
        if (data && data.length > 0) {
          setLeaders(data);
        } else {
          setLeaders(mockLeaders);
        }
      } catch (error) {
        console.error('Error fetching leaders:', error);
        setLeaders(mockLeaders);
      } finally {
        setLoading(false);
      }
    }
    fetchLeaders();
  }, []);

  const categories = [
    { value: 'all', label: 'All Leadership', icon: '👥' },
    { value: 'nec', label: 'National Executive Committee', icon: '⭐' },
    { value: 'trustees', label: 'Board of Trustees', icon: '🏛️' },
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
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#D4A017]"></div>
        <p className="mt-2 text-gray-500">Loading leadership...</p>
      </div>
    );
  }

  // Check if the selected category has any leaders
  const hasLeaders = filteredLeaders.length > 0;

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Leadership</h2>
          <div className="w-20 h-1 bg-[#D4A017] mx-auto mb-3"></div>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated team leading BVOGI towards global impact
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-1.5 text-sm rounded-full font-medium transition ${
                selectedCategory === cat.value
                  ? 'bg-[#D4A017] text-[#0D1B2A]'
                  : 'bg-white text-gray-700 hover:bg-[#D4A017]/10 border border-[#D4A017]/30'
              }`}
            >
              <span className="mr-1">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Show message when a category has no leaders */}
        {!hasLeaders && selectedCategory !== 'all' && (
          <div className="text-center py-12 bg-white rounded-lg border border-dashed border-[#D4A017]/30">
            <p className="text-gray-500 text-sm">No leaders added to this category yet.</p>
            <p className="text-xs text-gray-400 mt-1">Check back soon.</p>
          </div>
        )}

        {/* National Executive Committee - All 7 members - Term 2025-2028 */}
        {currentLeaders.filter(l => l.category === 'nec').length > 0 && (
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Star className="text-[#D4A017]" size={18} />
              National Executive Committee
              <span className="text-xs font-normal text-gray-400 ml-2">(2025 - 2028)</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {currentLeaders
                .filter(l => l.category === 'nec')
                .map((leader, idx) => (
                  <motion.div
                    key={leader._id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#D4A017]/40 hover:-translate-y-1 cursor-default"
                  >
                    {leader.photo ? (
                      <div className="relative h-48 w-full bg-gray-100">
                        <Image
                          src={urlFor(leader.photo).url()}
                          alt={leader.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="h-32 w-full bg-gray-100 flex items-center justify-center">
                        <Users className="text-gray-400" size={40} />
                      </div>
                    )}
                    <div className="p-3 text-center">
                      <h4 className="text-sm font-bold text-gray-900 leading-tight">{leader.name}</h4>
                      <p className="text-[#D4A017] font-semibold text-xs">{leader.title}</p>
                      {leader.biography && (
                        <p className="text-gray-500 text-xs mt-1 line-clamp-2">{leader.biography}</p>
                      )}
                      <div className="flex justify-center gap-2 mt-2">
                        {leader.email && (
                          <a href={`mailto:${leader.email}`} className="text-gray-400 hover:text-[#D4A017] transition">
                            <Mail size={14} />
                          </a>
                        )}
                        {leader.phone && (
                          <a href={`tel:${leader.phone}`} className="text-gray-400 hover:text-[#D4A017] transition">
                            <Phone size={14} />
                          </a>
                        )}
                      </div>
                      <p className="text-[10px] text-gray-400 mt-1">
                        Term: {leader.termStart} - {leader.termEnd}
                      </p>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        )}

        {/* Previous Term Leaders */}
        {previousLeaders.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Calendar className="text-gray-400" size={18} />
              Previous Leadership
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 opacity-70">
              {previousLeaders.map((leader, idx) => (
                <motion.div
                  key={leader._id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-white rounded-lg shadow-sm p-3 text-center border border-gray-100"
                >
                  <div className="flex justify-center mb-1">
                    <Users className="text-gray-300" size={20} />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900">{leader.name}</h4>
                  <p className="text-[#D4A017] text-xs">{leader.title}</p>
                  <p className="text-[10px] text-gray-400">
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
