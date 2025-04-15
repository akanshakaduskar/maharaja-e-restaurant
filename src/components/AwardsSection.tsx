import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Trophy, Medal } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const awards = [
  {
    icon: <Trophy className="w-12 h-12 text-amber-500" />,
    title: "Best Fine Dining",
    year: "2024",
    organization: "Culinary Excellence Awards"
  },
  {
    icon: <Star className="w-12 h-12 text-amber-500" />,
    title: "Michelin Star",
    year: "2023",
    organization: "Michelin Guide"
  },
  {
    icon: <Medal className="w-12 h-12 text-amber-500" />,
    title: "Best Indian Restaurant",
    year: "2024",
    organization: "Food & Wine Magazine"
  },
  {
    icon: <Award className="w-12 h-12 text-amber-500" />,
    title: "Service Excellence",
    year: "2023",
    organization: "Hospitality Awards"
  }
];

export function AwardsSection() {
  return (
    <section className="awards-section py-20">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center items-center gap-2 mb-4"
            >
              <Trophy className="text-amber-500 w-8 h-8" />
              <span className="text-amber-500 text-lg font-medium">Recognition</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-white mb-6">Our Achievements</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Recognized for excellence in culinary innovation and service quality by leading industry experts.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="glass-card rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className="mb-4 flex justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {award.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">{award.title}</h3>
                <p className="text-amber-500 font-medium mb-1">{award.year}</p>
                <p className="text-gray-400 text-sm">{award.organization}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}