import React from 'react';
import { Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="glass-dark mx-3 mb-6 md:mx-4 md:mb-8 lg:mx-auto max-w-[96%] xl:max-w-7xl rounded-3xl md:rounded-[40px] pt-12 pb-8 md:pt-16 md:pb-10 px-5 md:px-12 border border-gold/10 relative overflow-hidden shadow-2xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div>
          <h3 className="text-2xl font-bold text-gold mb-6">KAIZEN</h3>
          <p className="text-cream/60 mb-6">A world's first student led innovation and entrepreneurship ecosystem shaping future problem-solvers.</p>
          <div className="flex gap-4">
            <Instagram className="text-gold cursor-pointer hover:scale-110 transition-transform" />
            <Linkedin className="text-gold cursor-pointer hover:scale-110 transition-transform" />
            <Twitter className="text-gold cursor-pointer hover:scale-110 transition-transform" />
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-cream/60">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/vision" className="hover:text-gold transition-colors">Our Vision</Link></li>
            <li><Link to="/team" className="hover:text-gold transition-colors">Our Team</Link></li>
            <li><Link to="/schools" className="hover:text-gold transition-colors">For Schools & Institutions</Link></li>
            <li><Link to="/individual-mentorship" className="hover:text-gold transition-colors">For Individuals</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Contact Info</h4>
          <ul className="space-y-4 text-cream/60">
            <li className="flex items-center gap-3 break-all"><Mail size={18} className="text-gold flex-shrink-0" />thekaizenquestofficial@gmail.com</li>
            <li className="flex items-center gap-3"><Phone size={18} className="text-gold" />+91 73009 01958</li>
            <li className="flex items-center gap-3"><Phone size={18} className="text-gold" />+91 78897 28350</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Legal</h4>
          <ul className="space-y-4 text-cream/60">
            <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-gold/5 text-center text-cream/30 text-sm">
        <p>© {new Date().getFullYear()} All rights reserved | Made with 💖 | By Prem</p>
      </div>
    </footer>
  );
};

export default Footer;
