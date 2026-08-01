'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Church, Home, GraduationCap, Scale, 
  Radio, Palette, Briefcase, ChevronDown, ChevronUp
} from 'lucide-react';

interface Mountain {
  id: string;
  number: string;
  icon: React.ReactNode;
  title: string;
  tag: string;
  objective: string;
  departments: string[];
  activities: string[];
  impact: string[];
}

const mountainsData: Mountain[] = [
  {
    id: 'm1',
    number: '01',
    icon: <Church className="w-6 h-6" />,
    title: 'Religion & Spiritual Development',
    tag: 'Spiritual Formation',
    objective: 'To cultivate spiritually mature believers, transformative leaders, and revival movements that advance God\'s Kingdom and establish biblical values within communities and nations.',
    departments: [
      'Prayer and Intercession Department',
      'Discipleship and Spiritual Formation Department',
      'Missions and Evangelism Department',
      'Worship and Revival Department',
      'Leadership Development and Ministerial Training Department'
    ],
    activities: [
      'Prayer conferences and revival gatherings',
      'Discipleship programs and leadership academies',
      'Local and international missions',
      'Evangelistic campaigns and crusades',
      'Ministerial training and credentialing',
      'Development of spiritual growth resources and publications'
    ],
    impact: [
      'Increased spiritual maturity among believers',
      'Growth of revival movements',
      'Expansion of Kingdom influence within communities',
      'Establishment of strong biblical foundations'
    ]
  },
  {
    id: 'm2',
    number: '02',
    icon: <Home className="w-6 h-6" />,
    title: 'Family & Community Development',
    tag: 'Community Resilience',
    objective: 'To strengthen families, promote healthy relationships, and foster resilient communities grounded in biblical values and social responsibility.',
    departments: [
      'Marriage and Family Affairs Department',
      'Youth and Children Development Department / Sex Education',
      'Counseling and Mentorship Department',
      'Community Outreach Department',
      'Social Welfare and Support Services Department'
    ],
    activities: [
      'Marriage enrichment programs',
      'Parenting and family life training',
      'Youth mentorship initiatives',
      'Community empowerment forums',
      'Counseling and psychosocial support services',
      'Family restoration and reconciliation programs'
    ],
    impact: [
      'Stronger family units',
      'Reduced social dysfunction',
      'Increased youth empowerment',
      'Healthier and more resilient communities'
    ]
  },
  {
    id: 'm3',
    number: '03',
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Education & Capacity Building',
    tag: 'Knowledge & Innovation',
    objective: 'To equip individuals with knowledge, skills, innovation, and values necessary for personal growth, leadership, and national development.',
    departments: [
      'Education and Scholarship Department',
      'Leadership and Capacity Development Department',
      'Research and Innovation Department',
      'Professional Development Department',
      'Knowledge Management and Publications Department'
    ],
    activities: [
      'Leadership training programs',
      'Professional development workshops',
      'Scholarships and educational support',
      'Research initiatives and policy studies',
      'Skills development and vocational training',
      'Publication of educational resources'
    ],
    impact: [
      'Improved educational outcomes',
      'Enhanced leadership capacity',
      'Increased innovation and research',
      'Greater economic and social productivity'
    ]
  },
  {
    id: 'm4',
    number: '04',
    icon: <Scale className="w-6 h-6" />,
    title: 'Governance, Leadership & Civic Engagement',
    tag: 'Ethics & Accountability',
    objective: 'To promote ethical leadership, good governance, justice, accountability, and responsible citizenship at all levels of society.',
    departments: [
      'Governance and Public Leadership Department',
      'Civic Engagement and Citizenship Department',
      'Policy and Advocacy Department',
      'Integrity and Accountability Unit',
      'Peacebuilding and Conflict Resolution Unit'
    ],
    activities: [
      'Leadership forums and summits',
      'Governance and ethics training',
      'Civic education initiatives',
      'Public policy engagement',
      'Advocacy for justice and accountability',
      'Peacebuilding and reconciliation programs'
    ],
    impact: [
      'Ethical and transformational leadership',
      'Increased civic participation',
      'Strengthened democratic values',
      'Promotion of justice and social cohesion'
    ]
  },
  {
    id: 'm5',
    number: '05',
    icon: <Radio className="w-6 h-6" />,
    title: 'Media, Communication & Information',
    tag: 'Truth & Digital Reach',
    objective: 'To utilize media and communication platforms to disseminate truth, inspire hope, influence culture, and advance Kingdom values.',
    departments: [
      'Media and Communications Department',
      'Digital Ministry Department',
      'Publications and Content Development Department',
      'Public Relations Department',
      'Broadcasting and Production Unit'
    ],
    activities: [
      'Digital evangelism campaigns',
      'Social media engagement',
      'Radio and television programming',
      'Podcasts and online broadcasts',
      'Production of publications and educational content',
      'Strategic communication initiatives'
    ],
    impact: [
      'Expanded reach and influence',
      'Positive societal narratives',
      'Increased public awareness and engagement',
      'Greater digital impact'
    ]
  },
  {
    id: 'm6',
    number: '06',
    icon: <Palette className="w-6 h-6" />,
    title: 'Arts, Culture & Creative Expression',
    tag: 'Cultural Transformation',
    objective: 'To shape culture and inspire transformation through artistic excellence, creativity, innovation, and cultural engagement.',
    departments: [
      'Creative Arts Department',
      'Music and Worship Arts Department',
      'Drama and Film Department',
      'Talent Development Department',
      'Cultural Engagement Department'
    ],
    activities: [
      'Music productions and concerts',
      'Drama and theatrical presentations',
      'Film and media productions',
      'Talent identification and mentorship',
      'Cultural festivals and exhibitions',
      'Creative entrepreneurship programs'
    ],
    impact: [
      'Positive cultural influence',
      'Development of creative talent',
      'Increased artistic excellence',
      'Promotion of Kingdom values through culture'
    ]
  },
  {
    id: 'm7',
    number: '07',
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Business, Entrepreneurship & Economic Empowerment',
    tag: 'Economic Transformation',
    objective: 'To foster economic transformation through entrepreneurship, innovation, ethical business practices, financial stewardship, and wealth creation for societal impact.',
    departments: [
      'Business Development Department',
      'Entrepreneurship and Innovation Department',
      'Marketplace Ministry Department',
      'Financial Empowerment Department',
      'Investment and Sustainability Unit'
    ],
    activities: [
      'Entrepreneurship training programs',
      'Business incubation and mentorship',
      'Financial literacy initiatives',
      'Marketplace networking forums',
      'Job creation and economic empowerment projects',
      'Strategic partnerships and investment initiatives'
    ],
    impact: [
      'Increased entrepreneurship',
      'Economic empowerment of communities',
      'Sustainable wealth creation',
      'Enhanced financial stewardship'
    ]
  }
];

const crossCuttingFunctions = [
  'Prayer and Spiritual Covering',
  'Leadership Development and Mentorship',
  'Research, Monitoring and Evaluation',
  'Partnerships and Stakeholder Engagement',
  'Resource Mobilization and Sustainability',
  'Advocacy and Public Engagement',
  'Innovation and Technology Integration',
  'Monitoring, Learning and Continuous Improvement'
];

export default function SevenMountains() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const mountainPills = [
    { id: 'm1', label: 'Religion' },
    { id: 'm2', label: 'Family' },
    { id: 'm3', label: 'Education' },
    { id: 'm4', label: 'Governance' },
    { id: 'm5', label: 'Media' },
    { id: 'm6', label: 'Arts & Culture' },
    { id: 'm7', label: 'Business' }
  ];

  const scrollToMountain = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      if (expandedId !== id) {
        setExpandedId(id);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D1B2A] to-[#1A2E45] text-white">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(212,160,23,0.08)_0%,transparent_70%)] pointer-events-none" />
        
        <p className="text-xs tracking-[0.25em] uppercase text-[#D4A017] font-semibold mb-4">
          BVOGI Operational Structure
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-4">
          Seven Mountains<br />
          <span className="text-[#D4A017]">of Influence</span>
        </h1>
        <p className="text-base md:text-lg text-[#8A9BB0] max-w-lg mx-auto font-light leading-relaxed mb-4">
          Transforming communities, institutions, and nations through Kingdom principles — one mountain at a time.
        </p>
        <p className="text-sm text-[#D4A017] italic mb-8">
          Joel 2:1 — "Blow the Trumpet in Zion"
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {mountainPills.map((pill) => (
            <button
              key={pill.id}
              onClick={() => scrollToMountain(pill.id)}
              className="px-4 py-1.5 border border-[rgba(212,160,23,0.2)] rounded-full text-xs text-[#8A9BB0] hover:border-[#D4A017] hover:text-[#D4A017] hover:bg-[rgba(212,160,23,0.06)] transition-all duration-200"
            >
              {pill.label}
            </button>
          ))}
        </div>
      </section>

      <hr className="border-[rgba(212,160,23,0.2)]" />

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-[#D4A017] font-semibold mb-2">
          About BVOGI
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          Believers Voice<br />for Global Impact
        </h2>
        <p className="text-[#8A9BB0] text-base leading-relaxed max-w-2xl mx-auto">
          BVOGI is a Christian movement intentionally identifying, equipping, mentoring, and deploying leaders into each mountain of influence — advancing God's Kingdom through servant leadership, integrity, excellence, compassion, and innovation.
        </p>
      </section>

      <hr className="border-[rgba(212,160,23,0.2)]" />

      {/* Mountains Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-[#D4A017] font-semibold mb-2">
            Operational Structure
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">
            The Seven Mountains
          </h2>
          <p className="text-[#8A9BB0] text-base max-w-lg mx-auto">
            Each mountain represents a sphere of societal influence. Click any card to explore its full structure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mountainsData.map((mountain) => {
            const isExpanded = expandedId === mountain.id;
            return (
              <motion.div
                key={mountain.id}
                id={mountain.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`bg-[#0D1B2A] border rounded-xl overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'border-[#D4A017]' : 'border-[rgba(212,160,23,0.2)]'
                } hover:border-[#D4A017] hover:-translate-y-1 cursor-pointer`}
                onClick={() => toggleExpand(mountain.id)}
              >
                <div className="p-5 flex items-start gap-3 border-b border-[rgba(212,160,23,0.1)]">
                  <span className="font-serif text-2xl font-black text-[#D4A017] opacity-40 leading-none w-8 flex-shrink-0">
                    {mountain.number}
                  </span>
                  <div>
                    <div className="text-xl mb-0.5">{mountain.icon}</div>
                    <h3 className="font-serif text-base font-bold leading-tight">
                      {mountain.title}
                    </h3>
                  </div>
                </div>
                <div className="p-5">
                  <span className="inline-block bg-[rgba(212,160,23,0.08)] border border-[rgba(212,160,23,0.2)] text-[#D4A017] text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded mb-3">
                    {mountain.tag}
                  </span>
                  <p className="text-sm text-[#8A9BB0] leading-relaxed mb-3">
                    {mountain.objective}
                  </p>
                  <button className="text-[#D4A017] text-xs font-semibold flex items-center gap-1 bg-transparent border-none cursor-pointer">
                    {isExpanded ? 'Hide Structure' : 'View Structure'}
                    {isExpanded ? (
                      <ChevronUp className="w-3 h-3" />
                    ) : (
                      <ChevronDown className="w-3 h-3" />
                    )}
                  </button>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-[rgba(212,160,23,0.1)] px-5 pb-5"
                  >
                    <div className="pt-4">
                      <p className="text-[10px] tracking-[0.15em] uppercase text-[#D4A017] font-semibold mb-2">
                        Departments
                      </p>
                      <ul className="space-y-0.5 mb-3">
                        {mountain.departments.map((dept, i) => (
                          <li key={i} className="text-xs text-[#8A9BB0] pl-3 relative before:content-['—'] before:absolute before:left-0 before:text-[#D4A017] before:opacity-50">
                            {dept}
                          </li>
                        ))}
                      </ul>

                      <p className="text-[10px] tracking-[0.15em] uppercase text-[#D4A017] font-semibold mb-2">
                        Key Activities
                      </p>
                      <ul className="space-y-0.5 mb-3">
                        {mountain.activities.map((activity, i) => (
                          <li key={i} className="text-xs text-[#8A9BB0] pl-3 relative before:content-['—'] before:absolute before:left-0 before:text-[#D4A017] before:opacity-50">
                            {activity}
                          </li>
                        ))}
                      </ul>

                      <p className="text-[10px] tracking-[0.15em] uppercase text-[#D4A017] font-semibold mb-2">
                        Expected Impact
                      </p>
                      <ul className="space-y-0.5">
                        {mountain.impact.map((item, i) => (
                          <li key={i} className="text-xs text-[#8A9BB0] pl-3 relative before:content-['—'] before:absolute before:left-0 before:text-[#D4A017] before:opacity-50">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Cross-Cutting Strategy */}
      <section className="max-w-4xl mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-8">
          <p className="text-xs tracking-[0.2em] uppercase text-[#D4A017] font-semibold mb-2">
            Cross-Cutting Strategy
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">
            Supporting All Seven Mountains
          </h2>
          <p className="text-[#8A9BB0] text-base max-w-lg mx-auto">
            The following strategic functions operate across every mountain to ensure cohesion, accountability, and lasting impact.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto text-left">
          {crossCuttingFunctions.map((func, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] mt-1.5 flex-shrink-0" />
              <span className="text-sm text-[#8A9BB0]">{func}</span>
            </div>
          ))}
        </div>

        {/* Implementation Principle */}
        <div className="mt-8 bg-gradient-to-br from-[#243B55] to-[#1A2E45] border border-[rgba(212,160,23,0.2)] rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-[#D4A017] font-semibold mb-3">
            Implementation Principle
          </p>
          <p className="text-sm text-[#8A9BB0] leading-relaxed">
            BVOGI shall intentionally identify, equip, mentor, and deploy leaders into each mountain of influence with the objective of transforming communities, institutions, systems, and nations through Kingdom principles, servant leadership, integrity, excellence, compassion, and innovation.
          </p>
        </div>

        {/* Overarching Outcome */}
        <div className="mt-6 border border-[#D4A017] rounded-xl p-6 max-w-2xl mx-auto">
          <h3 className="font-serif text-lg text-[#D4A017] font-bold mb-2">
            Overarching Outcome
          </h3>
          <p className="text-sm text-[#8A9BB0] leading-relaxed">
            The ultimate outcome of this framework shall be the transformation of individuals, institutions, communities, and nations through the practical demonstration of God's Kingdom — resulting in spiritual renewal, social impact, economic empowerment, ethical leadership, and sustainable development.
          </p>
        </div>
      </section>

      {/* CTA Section - Simplified, no footer */}
      <section className="bg-[#1A2E45] py-16 px-4 text-center">
        <div className="max-w-lg mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-[#D4A017] font-semibold mb-2">
            Join the Movement
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight">
            Be Informed.<br />Be Involved.<br />Be the Impact.
          </h2>
          <p className="text-[#8A9BB0] text-sm my-4">
            #BelieversNeedAVoice · #BVoGI · #BeTheVoice
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:info@bvogi.org"
              className="inline-block px-6 py-3 bg-[#D4A017] text-[#0D1B2A] font-semibold rounded-lg hover:bg-[#E8B830] transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/"
              className="inline-block px-6 py-3 border border-[rgba(212,160,23,0.3)] text-white font-semibold rounded-lg hover:border-[#D4A017] hover:text-[#D4A017] transition-colors"
            >
              Visit Website
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
