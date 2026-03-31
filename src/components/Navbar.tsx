import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Our Vision', path: '/vision' },
    { name: 'Our Team', path: '/team' },
    { name: 'For Schools & Institutions', path: '/schools' },
    { name: 'For Individuals', path: '/individual-mentorship' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <nav className="fixed top-3 left-3 right-3 md:top-4 md:left-4 md:right-4 lg:left-auto lg:right-auto lg:w-[calc(100%-6rem)] lg:mx-12 z-50 glass-dark rounded-full py-3 px-5 md:py-4 md:px-8 flex justify-between items-center shadow-2xl transition-all duration-300">
      <Link to="/" className="text-2xl font-bold tracking-tighter text-gold">KAIZEN</Link>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium">
        {navItems.map((item) => (
          <Link 
            key={item.name} 
            to={item.path} 
            className={`transition-colors duration-300 ${location.pathname === item.path ? 'text-gold' : 'hover:text-gold'}`}
          >
            {item.name}
          </Link>
        ))}
        <Link to="/individual-mentorship" className="px-6 py-2 bg-gold text-navy rounded-full font-bold hover:scale-105 transition-transform duration-300">
          Enroll Now
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="lg:hidden text-gold" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full mt-4 left-0 w-full glass-dark rounded-3xl py-8 flex flex-col items-center gap-6 lg:hidden shadow-2xl"
          >
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                onClick={() => setIsOpen(false)} 
                className={`text-lg font-medium ${location.pathname === item.path ? 'text-gold' : 'hover:text-gold'}`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/individual-mentorship" onClick={() => setIsOpen(false)} className="px-8 py-3 bg-gold text-navy rounded-full font-bold">
              Enroll Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
