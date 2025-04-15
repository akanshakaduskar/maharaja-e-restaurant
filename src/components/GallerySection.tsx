import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80",
    title: "Signature Curry"
  },
  {
    url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80",
    title: "Traditional Thali"
  },
  {
    url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80",
    title: "Biryani Special"
  },
  {
    url: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80",
    title: "Tandoori Platter"
  },
  {
    url: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80",
    title: "Dessert Selection"
  },
  {
    url: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80",
    title: "Royal Feast"
  }
];

export function GallerySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center items-center gap-2 mb-4"
            >
              <Camera className="text-amber-500 w-8 h-8" />
              <span className="text-amber-500 text-lg font-medium">Our Gallery</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Culinary Artistry</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our gallery of exquisite dishes, each telling a story of tradition, innovation, and passion.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}