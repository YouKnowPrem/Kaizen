import React from 'react';
import { motion } from 'motion/react';
import { Brain, Rocket, Zap, Crown, Target, Lightbulb, Users, Compass, Anchor } from 'lucide-react';

const Team = () => {
  const coreTeam = [
    { 
      name: "Aarush Arya", 
      role: "Founder and President", 
      image: "/Aarush_g.avif",
      icon: <Brain size={48} className="text-gold" />,
      emoji: "✨"
    },
    { 
      name: "Sarvi Sharma", 
      role: "General Manager (Creation and Design)", 
      icon: <Zap size={48} className="text-gold" />,
      emoji: "🖌️"
    },
    { 
      name: "Prem Singh", 
      role: "Chief Technology Officer (CTO)", 
      image: "/Prem_singh.avif",
      icon: <Rocket size={48} className="text-gold" />,
      emoji: "🔥"
    }
  ];

  const mentors = [
    { name: "Dr. Elena Vance", role: "AI & Tech Mentor", icon: <Target size={32} /> },
    { name: "James Carter", role: "Business Strategy", icon: <Crown size={32} /> },
    { name: "Sarah Jenkins", role: "Product Design", icon: <Lightbulb size={32} /> },
    { name: "Michael Chen", role: "Venture Financing", icon: <Users size={32} /> },
    { name: "Anita Kumar", role: "Marketing & Growth", icon: <Compass size={32} /> },
    { name: "David Alaba", role: "Leadership Coach", icon: <Anchor size={32} /> },
  ];

  return (
    <div className="pt-32 pb-20">
      
      {/* Core Team Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-gold"
          >
            Our Core Team
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-cream/70 mt-4 max-w-2xl mx-auto"
          >
            The visionaries behind Kaizen.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {coreTeam.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="text-center p-8 glass rounded-3xl relative group"
            >
              <div className="relative w-40 h-40 mx-auto mb-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-gold to-gold/10 rounded-3xl" />
                <div className="absolute inset-1 bg-navy rounded-3xl flex items-center justify-center overflow-hidden border border-navy shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                  {t.image ? (
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  ) : (
                    <div>
                      {t.icon}
                    </div>
                  )}
                </div>
                
                <motion.div 
                  initial={{ rotate: -12 }}
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="absolute -bottom-4 right-0 bg-cream text-navy font-black text-xs px-3 py-1.5 rounded-md shadow-[4px_4px_0px_#C5A059] border-2 border-navy z-10 whitespace-nowrap uppercase tracking-widest transition-transform cursor-default"
                >
                  {t.tag} {t.emoji}
                </motion.div>

                <motion.div 
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-1 -left-1 text-gold text-2xl"
                >
                  ✦
                </motion.div>
              </div>
              <h3 className="text-3xl font-bold mb-2">{t.name}</h3>
              <p className="text-gold font-medium text-lg">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Deep Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-20 md:mb-32" />

      {/* Mentors Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-cream mb-4"
          >
            Our Mentors
          </motion.h2>
          <p className="text-xl text-cream/60 max-w-2xl mx-auto">
            Industry experts guiding the next generation of innovators.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass p-6 rounded-2xl flex items-center gap-6 group border border-white/5 hover:border-gold/30 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-navy/50 flex items-center justify-center text-gold border border-gold/20 group-hover:bg-gold/10 transition-colors">
                {m.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">{m.name}</h4>
                <p className="text-sm text-gold mt-1">{m.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Team;

