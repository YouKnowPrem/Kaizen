import React from 'react';
import { motion } from 'motion/react';
import { Compass, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Individual = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[80vh] flex flex-col items-center justify-center">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-gold"
        >
          For Individuals
        </motion.h1>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="glass p-8 md:p-16 rounded-3xl md:rounded-[40px] max-w-3xl w-full text-center relative overflow-hidden group border border-gold/10 hover:border-gold/30 transition-all shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-3xl group-hover:bg-gold/10 transition-colors" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 blur-3xl" />
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-8 group-hover:scale-110 transition-transform">
            <Compass size={40} />
          </div>
          
          <h2 className="text-4xl font-bold mb-6 text-white">1:1 Mentorship</h2>
          
          <p className="text-xl md:text-2xl text-cream/80 leading-relaxed italic font-light mb-12">
            "Our 1:1 mentorship program is made to develop the necessary skills that are a must in modern-day entrepreneurs."
          </p>
          
          <Link to="/contact" className="flex items-center gap-3 bg-gold text-navy px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(197,160,89,0.3)]">
            Apply Now <ArrowRight size={24} />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Individual;
