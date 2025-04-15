import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Parallax } from 'react-parallax';
import { 
  Menu, Clock, MapPin, Phone, Instagram, Facebook, Twitter, 
  Star, Users, ChefHat, Utensils, Award, Calendar, Gift,
  Soup, Coffee, Wine, Music, ArrowRight, X
} from 'lucide-react';
import { AnimatedSection } from './components/AnimatedSection';


// Lazy load components to improve initial load performance
const ChefSection = lazy(() => import('./components/ChefSection').then(module => ({ default: module.ChefSection })));
const GallerySection = lazy(() => import('./components/GallerySection').then(module => ({ default: module.GallerySection })));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection').then(module => ({ default: module.TestimonialsSection })));
const AwardsSection = lazy(() => import('./components/AwardsSection').then(module => ({ default: module.AwardsSection })));
const SpecialOffersSection = lazy(() => import('./components/SpecialOffersSection').then(module => ({ default: module.SpecialOffersSection })));

function App() {
  const [activeTab, setActiveTab] = useState('lunch');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const menuItems = {
    lunch: [
      { name: "Butter Chicken", price: "$24", description: "Tender chicken in rich tomato gravy", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80" },
      { name: "Dal Makhani", price: "$18", description: "Creamy black lentils", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80" },
      { name: "Vegetable Biryani", price: "$22", description: "Fragrant rice with mixed vegetables", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80" }
    ],
    dinner: [
      { name: "Rogan Josh", price: "$28", description: "Kashmiri lamb curry", image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&q=80" },
      { name: "Tandoori Mixed Grill", price: "$32", description: "Assortment of grilled meats", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80" },
      { name: "Paneer Tikka Masala", price: "$24", description: "Cottage cheese in spiced gravy", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80" }
    ],
    dessert: [
      { name: "Gulab Jamun", price: "$8", description: "Sweet milk dumplings", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80" },
      { name: "Kulfi", price: "$7", description: "Traditional Indian ice cream", image: "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&q=80" },
      { name: "Rasmalai", price: "$9", description: "Cheese patties in sweet milk", image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80" }
    ]
  };

  const events = [
    {
      title: "Diwali Celebration",
      date: "November 12, 2024",
      description: "Join us for a festive evening of lights, traditional music, and special menu",
      image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&q=80"
    },
    {
      title: "Wine Pairing Night",
      date: "Every Thursday",
      description: "Experience our curated selection of wines paired with Indian cuisine",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80"
    },
    {
      title: "Live Music Evening",
      date: "Every Saturday",
      description: "Enjoy classical Indian music while dining",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80"
    }
  ];

  const heroImages = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80"
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-y-0 right-0 w-full sm:w-80 bg-white shadow-2xl z-50 p-6"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMenuOpen(false)} className="p-2">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="mt-8">
              {["Home", "Menu", "Events", "About", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-4 text-xl font-medium border-b border-gray-100 hover:text-amber-500 transition-colors"
                  whileHover={{ x: 10 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="relative min-h-screen">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="relative h-full"
            >
              <img 
                src={heroImages[activeImage]}
                alt="Restaurant ambiance" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Navigation */}
        <motion.nav
          className={`fixed w-full z-10 transition-all duration-300 ${
            scrollY > 50 ? 'bg-black/80 backdrop-blur-md py-4' : 'py-6'
          }`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", damping: 20 }}
        >
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <Utensils className="text-amber-500 w-8 h-8" />
              <h1 className="text-white text-3xl font-bold tracking-wider">MAHARAJA</h1>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["Menu", "Events", "Experience", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-amber-500 transition-colors relative group"
                  whileHover={{ scale: 1.1 }}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </motion.a>
              ))}
            </div>
            <motion.button
              className="md:hidden text-white"
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={24} />
            </motion.button>
          </div>
        </motion.nav>

        {/* Hero Content */}
        <div className="relative z-10 h-[calc(100vh-80px)] flex items-center px-6">
          <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-left"
            >
              <div className="flex items-center space-x-4 mb-6">
                <Award className="text-amber-500 w-8 h-8 animate-spin-slow" />
                <span className="text-amber-500 font-medium tracking-wider">AWARD WINNING RESTAURANT</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Experience the{" "}
                <span className="text-amber-500 relative">
                  Royal
                  <span className="absolute -inset-1 animate-shimmer"></span>
                </span>{" "}
                Taste of India
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-lg">
                Embark on a culinary journey through the finest Indian cuisine, 
                where traditional recipes meet modern gastronomy.
              </p>
              <div className="flex space-x-6">
                <motion.a
                  href="#reservation"
                  className="bg-amber-500 text-white px-8 py-4 rounded-full font-medium hover:bg-amber-600 transition-all transform hover:scale-105 shadow-lg group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Your Table
                  <ArrowRight className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="#menu"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-amber-500 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Menu
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden md:block"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <motion.img
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80"
                    alt="Signature Dish 1"
                    className="w-full h-48 object-cover rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  />
                  <motion.img
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80"
                    alt="Signature Dish 2"
                    className="w-full h-64 object-cover rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <motion.img
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80"
                    alt="Signature Dish 3"
                    className="w-full h-64 object-cover rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  />
                  <motion.img
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80"
                    alt="Signature Dish 4"
                    className="w-full h-48 object-cover rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="relative z-10 px-6 -mt-20 mb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { value: "25+", label: "Years of Excellence" },
                { value: "150+", label: "Unique Dishes" },
                { value: "12", label: "Master Chefs" },
                { value: "4.9", label: "Customer Rating" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center hover-trigger"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.p
                    className="text-4xl font-bold text-amber-500 mb-2"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-white hover-target">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </header>

      {/* Menu Section */}
      <Parallax
        blur={0}
        bgImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80"
        strength={200}
        className="py-20"
      >
        <div className="parallax-overlay py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <motion.h2
                className="text-4xl font-bold text-center mb-12 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Our Culinary Delights
              </motion.h2>
              <div className="flex justify-center space-x-4 mb-12">
                {['lunch', 'dinner', 'dessert'].map((tab) => (
                  <motion.button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-full font-medium transition-all ${
                      activeTab === tab 
                        ? 'bg-amber-500 text-white' 
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </motion.button>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-3 gap-8"
                >
                  {menuItems[activeTab as keyof typeof menuItems].map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <div className="relative h-48">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-xl font-semibold text-white mb-1">{item.name}</h3>
                          <p className="text-amber-500 font-bold">{item.price}</p>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </AnimatedSection>
          </div>
        </div>
      </Parallax>

      {/* Events Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">Upcoming Events</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg group"
                  whileHover={{ y: -10 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <motion.div
                    className="p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-amber-500 mb-2">{event.date}</p>
                    <p className="text-gray-600">{event.description}</p>
                    <motion.button
                      className="mt-4 text-amber-500 font-medium flex items-center group"
                      whileHover={{ x: 5 }}
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Awards Section */}
      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
        <AwardsSection />
      </Suspense>

      {/* Special Offers Section */}
      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
        <SpecialOffersSection />
      </Suspense>

      {/* Chef Section */}
      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
        <ChefSection />
      </Suspense>

      {/* Gallery Section */}
      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
        <GallerySection />
      </Suspense>

      {/* Testimonials Section */}
      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
        <TestimonialsSection />
      </Suspense>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">MAHARAJA</h3>
              <p className="text-gray-400">Experience the royal flavors of India in an elegant dining atmosphere.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Hours</h4>
              <p className="text-gray-400">Monday - Sunday</p>
              <p className="text-gray-400">Lunch: 11:30 - 15:00</p>
              <p className="text-gray-400">Dinner: 18:00 - 23:00</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">Shop no :111 ,Nehru Nagar </p>
              <p className="text-gray-400">Durg, CD 54321</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 MAHARAJA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;