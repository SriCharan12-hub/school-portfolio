import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star, ShieldCheck } from "lucide-react";

const heroBg =
  "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1920&auto=format&fit=crop";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 md:pt-40 overflow-hidden">
      {/* Background with animated overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/90 via-brand-blue/60 to-brand-blue"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(34,197,94,0.15),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-[0_4px_20px_rgba(34,197,94,0.15)]  border border-brand-green/20 mb-8"
          >
            <Star size={16} fill="currentColor" className="animate-pulse" />
            <span className="text-sm font-black tracking-widest uppercase">
              Admissions Open 2026-27
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center"
          >
            <div className="inline-flex items-center gap-2  font-black text-xs tracking-[0.25em] mb-8 uppercase bg-white/90 px-5 py-2 rounded-full border border-brand-green/30 shadow-xl backdrop-blur-sm">
              <ShieldCheck size={14} strokeWidth={3} />
              Recognized by Govt. of Telangana
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[1.1] mb-8 gradient-text-light"
          >
            Give Your Child the <br />
            <span className="text-brand-orange">Future</span> They Deserve
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-bold"
          >
            At brainseed nextgen school, we combine traditional discipline with
            futuristic learning to nurture the leaders of tomorrow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
          >
            <a
              href="#admissions"
              className="btn-accent group flex items-center gap-2"
            >
              Apply Now
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#programs"
              className="btn-secondary flex items-center gap-2"
            >
              Explore Programs
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="pt-10 border-t border-slate-300/50 flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500"
          >
            {[
              "IIT FOUNDATION",
              "NEET COACHING",
              "SPORTS EXCELLENCE",
              "LIFE SKILLS",
            ].map((item) => (
              <div
                key={item}
                className="font-display font-black text-sm tracking-widest text-white/90 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-20 left-10 md:left-20 animate-float hidden lg:block">
        <div className="glass p-5 rounded-3xl flex items-center gap-5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-white/40">
          <div className="w-14 h-14 rounded-2xl bg-brand-green/20 flex items-center justify-center text-brand-green shadow-inner">
            <Star fill="currentColor" size={24} />
          </div>
          <div>
            <div className="font-black text-black">Top Rated</div>
            <div className="text-xs font-bold text-black/80">
              NextGen School 2025
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
