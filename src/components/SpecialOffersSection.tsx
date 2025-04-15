import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Calendar, Clock, Users } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const offers = [
  {
    title: "Weekend Brunch Special",
    description: "Unlimited brunch buffet with live stations",
    price: "INR 1200",
    timing: "Sat-Sun, 11:00 AM - 3:00 PM",
    includes: ["Live Cooking Stations", "Champagne", "Dessert Bar"]
  },
  {
    title: "Business Lunch",
    description: "Three-course executive lunch menu",
    price: "INR 2200",
    timing: "Mon-Fri, 12:00 PM - 3:00 PM",
    includes: ["Appetizer", "Main Course", "Dessert"]
  },
  {
    title: "Family Feast",
    description: "Special family-style dining experience",
    price: "$INR 3000",
    timing: "Daily, 6:00 PM - 10:00 PM",
    includes: ["4 Starters", "4 Main Courses", "2 Desserts"]
  }
];

export function SpecialOffersSection() {
  return (
    <section className="special-offers py-20">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center items-center gap-2 mb-4"
            >
              <Gift className="text-amber-500 w-8 h-8" />
              <span className="text-amber-500 text-lg font-medium">Special Offers</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-white mb-6">Exclusive Dining Experiences</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover our carefully curated special offers designed to enhance your dining experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <motion.div
                key={index}
                className="glass-card rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">{offer.title}</h3>
                  <p className="text-amber-500 text-3xl font-bold mb-4">{offer.price}</p>
                  <p className="text-gray-400 mb-4">{offer.description}</p>
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <Clock className="w-4 h-4" />
                    <span>{offer.timing}</span>
                  </div>
                  <div className="space-y-2">
                    {offer.includes.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <motion.button
                    className="mt-6 w-full bg-amber-500 text-white py-3 rounded-lg font-medium hover:bg-amber-600 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}