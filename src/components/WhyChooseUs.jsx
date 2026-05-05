import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Heart, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    title: 'Strong Concepts',
    desc: 'Focus on foundational understanding before moving to complex topics.',
    icon: <Zap className="text-brand-orange" />
  },
  {
    title: 'Strict Discipline',
    desc: 'Maintaining a structured environment conducive to learning and focus.',
    icon: <ShieldCheck className="text-brand-blue" />
  },
  {
    title: 'Individual Attention',
    desc: 'Small batch sizes to ensure every student gets the support they need.',
    icon: <Heart className="text-brand-green" />
  },
  {
    title: 'Expert Mentorship',
    desc: 'Faculty from top institutions like IITs and IIMs to guide students.',
    icon: <CheckCircle2 className="text-blue-500" />
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-brand-blue text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <motion.h4
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-green font-bold uppercase tracking-widest text-sm mb-4"
            >
              Why BrainSeed?
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black mb-8 leading-tight"
            >
              Excellence is not an act, <br />
              but a <span className="text-brand-green">habit</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/60 mb-12"
            >
              We believe in creating an environment where excellence is the standard, and growth is inevitable.
            </motion.p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-bold">{reason.title}</h3>
                  <p className="text-white/50 leading-relaxed">
                    {reason.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/5"
            >
              <img 
                src="https://images.unsplash.com/photo-1523050353050-0b01b5e9d2aa?auto=format&fit=crop&q=80&w=800" 
                alt="Student Success"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <div className="text-3xl font-black mb-2 italic">"The best way to predict the future is to create it."</div>
                <div className="text-brand-green font-bold">— Peter Drucker</div>
              </div>
            </motion.div>
            
            {/* Decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-orange/20 rounded-full blur-2xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
