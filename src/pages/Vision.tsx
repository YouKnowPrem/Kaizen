import React from 'react';
import { motion } from 'motion/react';

const Vision = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-32">
      
      {/* Our Vision Section */}
      <section className="text-center max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-8 text-gold"
        >
          Our Vision
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass p-8 md:p-12 rounded-[40px] border border-gold/10 relative"
        >
          <p className="text-xl md:text-2xl leading-relaxed text-cream/90 font-light italic">
            "To be the world's most accessible and impactful student-led innovation ecosystem, seamlessly bridging the gap between traditional education and real-world entrepreneurship, and cultivating the problem-solvers of tomorrow."
          </p>
        </motion.div>
      </section>

      {/* Founder's Vision Section */}
      <section>
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-cream"
          >
            Founder's Vision
          </motion.h2>
          <div className="w-24 h-1 bg-gold mx-auto mt-6 rounded-full opacity-50" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mx-auto w-full max-w-md aspect-square"
          >
            {/* Liquid glass aesthetic frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gold to-gold/10 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-[spin_15s_linear_infinite] blur-md opacity-50" />
            <div className="absolute inset-2 overflow-hidden rounded-[30%_70%_70%_30%/30%_30%_70%_70%] border-4 border-navy shadow-[0_0_30px_rgba(197,160,89,0.3)]">
              <img 
                src="/Aarush_G.jpeg" 
                alt="Aarush G - Founder"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 md:p-14 rounded-3xl"
          >
            <h3 className="text-3xl font-bold mb-2">Aarush Arya</h3>
            <p className="text-gold font-medium mb-8 text-lg">Founder & President <br>15 TIMES IIT INVITEE</p>
            <p className="text-lg text-cream/80 leading-relaxed mb-6">
              When we started Kaizen, the goal wasn't just to teach students how to start businesses. The goal was to fundamentally shift how students think about the problems around them.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              We envision a world where every young mind is empowered with the tools, the mentorship, and the freedom to experiment. Building the future shouldn't wait until after graduation—it starts today. Let's redefine learning through action.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Vision;
