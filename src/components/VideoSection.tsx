'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
  thumbnail: string;
}

const videos: Video[] = [
  {
    id: 'launch',
    title: 'The Launch of BVoGI',
    description: '"Blow the Trumpet in Zion" — The official launch of Believers\' Voice for Global Impact (BVoGI) in December 2024. A movement for believers to speak into the nations they live in.',
    embedUrl: 'https://www.youtube.com/embed/FfJMO_MIxI0?autoplay=1&rel=0',
    thumbnail: 'https://img.youtube.com/vi/FfJMO_MIxI0/hqdefault.jpg'
  },
  {
    id: 'press-conference',
    title: 'BVOGI Press Conference',
    description: '"WITO WA MARIDHIANO NCHINI" | BVOGI PRESS CONFERENCE 1 | HON JOYCE LAY',
    embedUrl: 'https://www.youtube.com/embed/wtCQ3qItLBE?autoplay=1&rel=0',
    thumbnail: 'https://img.youtube.com/vi/wtCQ3qItLBE/hqdefault.jpg'
  }
];

export default function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const openVideo = (video: Video) => {
    setSelectedVideo(video);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">BVOGI Videos</h2>
            <div className="w-20 h-1 bg-[#D4A017] mx-auto"></div>
            <p className="text-xl text-gray-600 mt-4">Watch the journey of BVOGI</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer group"
                onClick={() => openVideo(video)}
              >
                <div className="relative aspect-video bg-gray-800">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#D4A017] rounded-full flex items-center justify-center group-hover:scale-110 transition shadow-lg">
                      <Play className="text-white ml-1" size={32} fill="white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{video.title}</h3>
                  <p className="text-gray-600 mt-1">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal / Lightbox */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeVideo}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 z-10 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition"
              aria-label="Close video"
            >
              <X size={24} />
            </button>

            {/* Video Title */}
            <div className="bg-black/80 p-4">
              <h3 className="text-white text-lg font-semibold">{selectedVideo.title}</h3>
            </div>

            {/* YouTube Embed */}
            <div className="relative aspect-video">
              <iframe
                src={selectedVideo.embedUrl}
                title={selectedVideo.title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
