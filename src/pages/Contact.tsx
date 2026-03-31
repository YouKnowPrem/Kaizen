import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[80vh] flex flex-col items-center justify-center">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-gold"
        >
          Contact Us
        </motion.h1>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass p-10 md:p-16 rounded-[40px] max-w-2xl w-full relative overflow-hidden border border-gold/10"
      >
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-50 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col gap-10">
          
          <div className="text-center pb-8 border-b border-white/5">
            <h2 className="text-3xl font-bold text-white mb-2">Get in Touch</h2>
            <p className="text-cream/60">We'd love to hear from you. Reach out via email or phone.</p>
          </div>

          <div className="space-y-8">
            <motion.a 
              href="mailto:hello@kaizen.edu"
              whileHover={{ x: 10 }}
              className="flex items-center gap-6 p-6 rounded-2xl bg-navy/40 border border-transparent hover:border-gold/20 hover:bg-navy/70 transition-all cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                <Mail size={28} />
              </div>
              <div>
                <p className="text-sm font-medium text-cream/50 uppercase tracking-widest mb-1">Email</p>
                <p className="text-xl font-bold text-white">hello@kaizen.edu</p> // Replace with actual email
              </div>
            </motion.a>

            <motion.a 
              href="tel:+919876543210"
              whileHover={{ x: 10 }}
              className="flex items-center gap-6 p-6 rounded-2xl bg-navy/40 border border-transparent hover:border-gold/20 hover:bg-navy/70 transition-all cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                <Phone size={28} />
              </div>
              <div>
                <p className="text-sm font-medium text-cream/50 uppercase tracking-widest mb-1">Phone 1</p>
                <p className="text-xl font-bold text-white">+91 98765 43210</p>
              </div>
            </motion.a>

            <motion.a 
              href="tel:+918765432109"
              whileHover={{ x: 10 }}
              className="flex items-center gap-6 p-6 rounded-2xl bg-navy/40 border border-transparent hover:border-gold/20 hover:bg-navy/70 transition-all cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                <Phone size={28} />
              </div>
              <div>
                <p className="text-sm font-medium text-cream/50 uppercase tracking-widest mb-1">Phone 2</p>
                <p className="text-xl font-bold text-white">+91 87654 32109</p>
              </div>
            </motion.a>
          </div>
          
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
