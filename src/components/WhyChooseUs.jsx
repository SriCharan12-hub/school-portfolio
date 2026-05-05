import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Heart, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    title: 'Strong Concepts from the Roots',
    desc: 'We build a strong foundation for lifelong success from the very beginning.',
    icon: <Zap className="text-brand-orange" />
  },
  {
    title: 'Regular Assessments & Progress',
    desc: 'Parents stay informed through regular tracking, ensuring children stay ahead.',
    icon: <ShieldCheck className="text-brand-blue" />
  },
  {
    title: 'Focus on Discipline & Values',
    desc: 'Building confidence, character, and leadership through core values.',
    icon: <ShieldCheck className="text-brand-blue" />
  },
  {
    title: 'Encouraging Extra-Curriculars',
    desc: 'Sports, creativity, and life skills beyond academics for holistic growth.',
    icon: <Zap className="text-brand-orange" />
  },
  {
    title: 'Individual Attention',
    desc: 'Every child is unique, and every child matters in our specialized classrooms.',
    icon: <Heart className="text-brand-green" />
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
            
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/10 flex items-center justify-center text-brand-green">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 leading-tight">{reason.title}</h3>
                    <p className="text-white/40 leading-relaxed text-sm">
                      {reason.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-white/5 aspect-[4/5]"
            >
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop" 
                alt="Student Success"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12">
                <div className="text-3xl font-black mb-4 leading-tight italic">"The best way to predict the future is to create it."</div>
                <div className="text-brand-green font-bold tracking-widest uppercase text-sm">— BrainSeed Philosophy</div>
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
