'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { client } from '../sanity/lib/client';
import { urlFor } from '../sanity/lib/image';
import { X } from 'lucide-react';

interface GalleryImage {
  _id: string;
  title: string;
  images: any[];
  category?: string;
}

export default function GallerySection() {
  const [galleries, setGalleries] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchGalleries() {
      try {
        const data = await client.fetch(`
          *[_type == "gallery" && published == true] {
            _id,
            title,
            images,
            category
          }
        `);
        setGalleries(data);
      } catch (error) {
        console.error('Error fetching galleries:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchGalleries();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-500"></div>
        <p className="mt-2 text-gray-500">Loading gallery...</p>
      </div>
    );
  }

  if (galleries.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-4">Capturing moments of worship, fellowship, and impact</p>
        </div>

        {galleries.map((gallery) => (
          <div key={gallery._id} className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{gallery.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {gallery.images?.map((image, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                  onClick={() => setSelectedImage(urlFor(image).url())}
                >
                  <Image
                    src={urlFor(image).url()}
                    alt={image.alt || 'Gallery image'}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition"></div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Full size" className="max-w-[90vw] max-h-[90vh] object-contain" />
          <button
            className="absolute top-4 right-4 text-white hover:text-yellow-500 transition"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
        </div>
      )}
    </section>
  );
}
