import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star } from 'lucide-react';
const heroBg = "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1920&auto=format&fit=crop";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with animated overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero Background" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-brand-light"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(34,197,94,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 text-brand-green border border-brand-green/20 mb-8"
          >
            <Star size={16} fill="currentColor" />
            <span className="text-sm font-bold tracking-wider uppercase">Admissions Open 2026-27</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-brand-blue/40 font-bold text-xs tracking-[0.2em] mb-4 uppercase"
          >
            Recognized by Govt. of Telangana
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[1.1] mb-8 gradient-text"
          >
            Give Your Child the <br />
            <span className="text-brand-orange">Future</span> They Deserve
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-brand-blue/60 mb-12 max-w-2xl mx-auto font-medium"
          >
            At BrainSeed, we combine traditional discipline with futuristic learning to nurture the leaders of tomorrow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="btn-primary group w-full sm:w-auto flex items-center justify-center gap-2">
              Enroll Your Child
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button className="btn-secondary group w-full sm:w-auto flex items-center justify-center gap-2">
              <span className="w-8 h-8 rounded-full bg-brand-blue/5 flex items-center justify-center transition-colors group-hover:bg-brand-blue/10">
                <Play size={16} fill="currentColor" />
              </span>
              Book a School Visit
            </button>
          </motion.div>
          
      </div>
    </section>
  );
};

export default Hero;
