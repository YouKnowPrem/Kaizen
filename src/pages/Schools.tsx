import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Schools = () => {
  const programs = [
    {
      title: "Bootcamp",
      description: "Our entrepreneurship courses provide students with a unique opportunity to learn from actual entrepreneurs, build their own entrepreneurial strengths.",
    },
    {
      title: "E-Hub",
      description: "Our unique graded curriculum, online platform and teacher training enables schools to integrate entrepreneurship education into their school system.",
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-gold"
        >
          Schools & Institutions
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-cream/70 mt-6 max-w-2xl mx-auto"
        >
          Explore our foundational programs designed to integrate seamlessly into educational systems.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 max-w-6xl mx-auto">
        {programs.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="flex flex-col h-full glass rounded-[40px] overflow-hidden group hover:border-gold/30 transition-colors"
          >
            {/* Image Placeholder */}
            <div className="w-full h-80 bg-navy/50 relative overflow-hidden flex-shrink-0">
              <div className="absolute inset-0 flex items-center justify-center text-cream/20 text-lg font-medium tracking-widest uppercase">
                Image Placeholder
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050b18] to-transparent" />
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-10 flex flex-col flex-grow">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-gold transition-colors">{p.title}</h3>
              <p className="text-base md:text-lg text-cream/70 leading-relaxed flex-grow mb-8 md:mb-10">
                {p.description}
              </p>
              
              <Link to="/contact" className="self-start flex items-center gap-2 text-gold font-bold px-6 py-3 border border-gold/20 rounded-full hover:bg-gold hover:text-navy transition-all duration-300">
                Know More <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Schools;
