import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Star } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const chefs = [
  {
    name: "Chef Rajesh Kumar",
    role: "Executive Chef",
    experience: "20+ years",
    speciality: "North Indian Cuisine",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80"
  },
  {
    name: "Chef Priya Sharma",
    role: "Head Chef",
    experience: "15+ years",
    speciality: "South Indian Cuisine",
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80"
  },
  {
    name: "Chef Ahmed Khan",
    role: "Pastry Chef",
    experience: "12+ years",
    speciality: "Indian Desserts",
    image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&q=80"
  }
];

export function ChefSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center items-center gap-2 mb-4"
            >
              <ChefHat className="text-amber-500 w-8 h-8" />
              <span className="text-amber-500 text-lg font-medium">Our Culinary Masters</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-white mb-6">Meet Our Expert Chefs</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our team of passionate chefs brings decades of experience and creativity to every dish,
              ensuring an unforgettable dining experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {chefs.map((chef, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{chef.name}</h3>
                  <p className="text-amber-500 mb-2">{chef.role}</p>
                  <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <Star className="w-4 h-4 text-amber-500" />
                    <span>{chef.experience} Experience</span>
                  </div>
                  <p className="text-gray-400">{chef.speciality}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}