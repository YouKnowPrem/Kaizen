/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
  ArrowRight,
  Brain,
  Rocket,
  BookOpen,
  School,
  Users,
  Zap,
  Award,
  CheckCircle2,
  ChevronRight,
  Menu,
  X,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-3 left-3 right-3 md:top-4 md:left-4 md:right-4 lg:left-auto lg:right-auto lg:w-[calc(100%-6rem)] lg:mx-12 z-50 glass-dark rounded-full py-3 px-5 md:py-4 md:px-8 flex justify-between items-center shadow-2xl transition-all duration-300">
      <div className="text-2xl font-bold tracking-tighter text-gold">KAIZEN</div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8 font-medium">
        {['Home', 'Programs', 'Books', 'Schools', 'About', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-gold transition-colors duration-300">
            {item}
          </a>
        ))}
        <button className="px-6 py-2 bg-gold text-navy rounded-full font-bold hover:scale-105 transition-transform duration-300">
          Enroll Now
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-gold" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full mt-4 left-0 w-full glass-dark rounded-3xl py-8 flex flex-col items-center gap-6 md:hidden shadow-2xl"
          >
            {['Home', 'Programs', 'Books', 'Schools', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-gold">
                {item}
              </a>
            ))}
            <button className="px-8 py-3 bg-gold text-navy rounded-full font-bold">
              Enroll Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.hero-text', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power4.out'
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="z-10"
      >
        <h1 className="hero-text text-5xl sm:text-7xl md:text-9xl font-bold mb-4 tracking-tighter text-gold">
          KAIZEN
        </h1>
        <p className="hero-text text-xl md:text-3xl text-gold font-light mb-8 italic">
          Building minds that build the future, redefined
        </p>
        <p className="hero-text max-w-2xl text-lg md:text-xl text-cream/80 mb-12 leading-relaxed">
          A world's first student led innovation and entrepreneurship ecosystem shaping future problem-solvers.
        </p>
        <div className="hero-text flex flex-col md:flex-row gap-4 justify-center">
          <button className="btn-primary flex items-center justify-center gap-2">
            Enroll Now <ArrowRight size={20} />
          </button>
          <button className="btn-secondary">
            Explore Programs
          </button>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-gold/50"
      >
        <div className="w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gold/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

const TrustStrip = () => {
  return (
    <div className="glass-dark mx-3 my-6 md:mx-4 md:my-8 lg:mx-auto max-w-[96%] xl:max-w-7xl rounded-3xl md:rounded-[40px] py-8 md:py-12 border border-gold/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between gap-8 md:gap-4 items-center opacity-70">
        {[
          { icon: <Award className="text-gold" />, text: "National & International Award Winners" },
          { icon: <Users className="text-gold" />, text: "Mentored by Industry Experts" },
          { icon: <School className="text-gold" />, text: "Students from Multiple Schools" },
          { icon: <Brain className="text-gold" />, text: "Innovation-led Learning Framework" }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 text-sm md:text-base font-medium">
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="section-cream">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-8"
        >
          What is Kaizen?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl leading-relaxed mb-10 text-navy/80"
        >
          Kaizen is an innovation-first learning platform where students don’t just learn concepts — they build, test, and think like real-world innovators.
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-2 mx-auto text-gold font-bold text-lg hover:underline"
        >
          Learn Our Philosophy <ChevronRight size={20} />
        </motion.button>
      </div>
    </section>
  );
};

const Programs = () => {
  const programs = [
    { icon: <Brain size={40} />, title: "Innovation Bootcamps", desc: "Intensive workshops to spark creative problem-solving skills." },
    { icon: <Rocket size={40} />, title: "Entrepreneurship Programs", desc: "Turning ideas into viable business models with expert guidance." },
    { icon: <BookOpen size={40} />, title: "Kaizen Learning Books", desc: "Curated resources for Junior & Senior levels to master innovation." },
    { icon: <School size={40} />, title: "School Collaborations", desc: "Integrating innovation culture into institutional frameworks." }
  ];

  return (
    <section id="programs" className="section-navy">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">What We Do</h2>
          <p className="text-gold text-xl italic">Empowering the next generation of leaders</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl hover:bg-gold/10 transition-colors duration-500 group cursor-pointer"
            >
              <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300">{p.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
              <p className="text-cream/70 mb-8 leading-relaxed">{p.desc}</p>
              <button className="flex items-center gap-2 text-gold font-semibold group-hover:gap-4 transition-all">
                Know more <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TargetAudience = () => {
  const audiences = [
    "Students (Grade 1–8)",
    "Students (Grade 8–12)",
    "Schools & Institutions",
    "Young Innovators & Aspiring Founders"
  ];

  return (
    <section className="section-cream">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Who Is It For?</h2>
          <p className="text-xl text-navy/70 mb-8">Our programs are designed to cater to diverse groups looking to redefine their future through innovation.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {audiences.map((a, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 10 }}
              className="p-6 border border-navy/10 rounded-2xl flex items-center gap-4 bg-white shadow-sm"
            >
              <div className="w-3 h-3 rounded-full bg-gold" />
              <span className="font-bold text-lg">{a}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyKaizen = () => {
  const reasons = [
    "Student-led, not textbook-led",
    "Focus on thinking, not rote learning",
    "Real-world problem solving",
    "Mentorship-driven growth",
    "National & international exposure"
  ];

  return (
    <section className="section-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 skew-x-12 transform translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">Why Kaizen?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 text-xl md:text-2xl font-light"
              >
                <CheckCircle2 className="text-gold flex-shrink-0" size={28} />
                <span>{r}</span>
              </motion.div>
            ))}
          </div>
          <div className="glass p-12 rounded-3xl flex flex-col justify-center items-center text-center">
            <Zap size={64} className="text-gold mb-6 animate-bounce" />
            <h3 className="text-3xl font-bold mb-4 text-gold italic">The Differentiator</h3>
            <p className="text-lg text-cream/80">We don't just teach entrepreneurship; we cultivate an innovator's mindset that lasts a lifetime.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const KaizenMethod = () => {
  const steps = [
    { title: "Empathy", desc: "Understanding the problem deeply" },
    { title: "Ideas", desc: "Brainstorming creative solutions" },
    { title: "Prototypes", desc: "Building tangible models" },
    { title: "Reflection", desc: "Analyzing results and feedback" },
    { title: "Improvement", desc: "Continuous refinement (Kaizen)" }
  ];

  return (
    <section className="section-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-20 text-center">The Kaizen Method</h2>

        <div className="relative flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gold/20 -translate-y-1/2 z-0" />

          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-navy text-gold flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                {i + 1}
              </div>
              <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
              <p className="text-navy/60 max-w-[150px]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const team = [
    { 
      name: "Founder Name", 
      role: "Visionary & Lead Mentor", 
      philosophy: "Empowering students to lead with empathy.", 
      icon: <Brain size={48} className="text-gold" />,
      tag: "Main Character",
      emoji: "✨"
    },
    { 
      name: "Core Member", 
      role: "Innovation Strategist", 
      philosophy: "Ideas are cheap, execution is everything.", 
      icon: <Zap size={48} className="text-gold" />,
      tag: "Let 'em Cook",
      emoji: "🔥"
    },
    { 
      name: "Core Member", 
      role: "Program Director", 
      philosophy: "Learning should be an adventure, not a chore.", 
      icon: <Rocket size={48} className="text-gold" />,
      tag: "Big Brains",
      emoji: "🧠"
    }
  ];

  return (
    <section id="team" className="section-navy">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((t, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="text-center p-8 glass rounded-3xl relative group"
            >
              <div className="relative w-36 h-36 mx-auto mb-10">
                {/* Slow spinning aesthetic blob border */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gold to-gold/10 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-1 bg-navy rounded-[40%_60%_70%_30%/40%_50%_60%_50%] flex items-center justify-center animate-[spin_10s_linear_infinite_reverse]">
                  <div className="animate-[spin_10s_linear_infinite]">
                    {t.icon}
                  </div>
                </div>
                
                {/* Gen Z Floating sticker tag */}
                <motion.div 
                  initial={{ rotate: -12 }}
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="absolute -bottom-4 right-0 md:-right-6 bg-cream text-navy font-black text-xs px-3 py-1.5 rounded-md shadow-[4px_4px_0px_#C5A059] border-2 border-navy z-10 whitespace-nowrap uppercase tracking-widest transition-transform cursor-default"
                >
                  {t.tag} {t.emoji}
                </motion.div>

                {/* Decorative Y2K Star */}
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-1 -left-1 text-gold text-2xl"
                >
                  ✦
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold mb-1">{t.name}</h3>
              <p className="text-gold font-medium mb-4">{t.role}</p>
              <p className="text-cream/60 italic">"{t.philosophy}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Impact = () => {
  const stats = [
    { value: "1000+", label: "Students Mentored" },
    { value: "50+", label: "Workshops Conducted" },
    { value: "20+", label: "Partner Schools" },
    { value: "10+", label: "Innovation Awards" }
  ];

  return (
    <section className="section-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-bold text-navy mb-2"
              >
                {s.value}
              </motion.div>
              <p className="text-gold font-bold uppercase tracking-widest text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="section-navy py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gold/5 animate-pulse" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-8xl font-bold mb-8 tracking-tighter">Ready to Build, Not Just Learn?</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center mt-12">
          <button className="btn-primary text-xl px-12 py-5">Enroll Now</button>
          <button className="btn-secondary text-xl px-12 py-5">Partner With Us</button>
          <button className="btn-secondary text-xl px-12 py-5">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

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
            <li><a href="#" className="hover:text-gold transition-colors">Home</a></li>
            <li><a href="#programs" className="hover:text-gold transition-colors">Programs</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Books</a></li>
            <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Contact Info</h4>
          <ul className="space-y-4 text-cream/60">
            <li className="flex items-center gap-3"><Mail size={18} className="text-gold" /> info@kaizen.edu</li>
            <li className="flex items-center gap-3"><Phone size={18} className="text-gold" /> +91 98765 43210</li>
            <li className="flex items-center gap-3"><MapPin size={18} className="text-gold" /> Innovation Hub, New Delhi</li>
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
        <p>© {new Date().getFullYear()} KAIZEN. All rights reserved. Future Redefined.</p>
      </div>
    </footer>
  );
};

// --- Main App ---

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: onComplete
    });

    tl.to('.loading-logo', {
      y: -20,
      duration: 1.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: 1
    }, 0);

    tl.to('.loading-bar-fill', {
      width: '100%',
      duration: 2.5,
      ease: "power2.inOut"
    }, 0);

    tl.to(container.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
      delay: 0.2
    });
  }, { scope: container });

  return (
    <div ref={container} className="fixed inset-0 z-[100] bg-navy flex flex-col items-center justify-center pointer-events-none">
      <div className="flex flex-col items-center max-w-sm w-full px-6 text-center">
        <img 
          src="/logo.png" 
          alt="Kaizen Logo" 
          className="loading-logo w-32 h-32 md:w-48 md:h-48 mb-6 object-contain drop-shadow-[0_0_15px_rgba(197,160,89,0.5)]"
        />
        <h2 className="text-gold font-light italic text-base md:text-lg mb-10 opacity-80">
          Building minds that build the future, redefined
        </h2>
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="loading-bar-fill w-0 h-full bg-gold shadow-[0_0_10px_rgba(197,160,89,0.8)]" />
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const scrollRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading]);

  return (
    <>
    {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
    <div ref={scrollRef} className={`relative bg-navy min-h-screen text-cream selection:bg-gold selection:text-navy overflow-hidden font-sans transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
      {/* Dynamic Ambient Background - Optimized for performance */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-gold/10 opacity-60 blur-[120px] animate-[orb_20s_ease-in-out_infinite]" />
        <div className="absolute top-[40%] -right-[20%] w-[60vw] h-[60vw] rounded-full bg-[#002B61]/80 opacity-60 blur-[120px] animate-[orb_25s_ease-in-out_infinite_reverse]" />
        <div className="absolute -bottom-[20%] left-[20%] w-[80vw] h-[80vw] rounded-full bg-[#001B3D] opacity-80 blur-[140px] animate-[orb_30s_ease-in-out_infinite]" />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10 pb-4">
        <Navbar />
        <Hero />
        <TrustStrip />
        <About />
        <Programs />
        <TargetAudience />
        <WhyKaizen />
        <KaizenMethod />
        <Team />
        <Impact />
        <FinalCTA />
        <Footer />
      </div>
    </div>
    </>
  );
}
