import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Quote } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Target className="text-brand-green" />,
      title: 'Our Mission',
      desc: 'To provide a transformative learning experience that cultivates intellectual curiosity, character, and leadership.'
    },
    {
      icon: <Eye className="text-brand-orange" />,
      title: 'Our Vision',
      desc: 'To be the global benchmark for excellence in education, where every child realizes their full potential.'
    },
    {
      icon: <Award className="text-brand-blue" />,
      title: 'Core Values',
      desc: 'Innovation, Discipline, Integrity, and Compassion are the pillars that support our academic community.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-slate-50/50 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-brand-green font-bold uppercase tracking-widest text-sm mb-4">About BrainSeed</h4>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                Cultivating Minds, <br />
                <span className="text-brand-orange">Inspiring</span> Futures.
              </h2>
              <p className="text-lg text-brand-blue/60 mb-10 leading-relaxed max-w-xl">
                Founded on the principles of holistic growth and academic rigor, BrainSeed is more than just a school. We are a community dedicated to nurturing the next generation of thinkers, doers, and leaders.
              </p>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative mb-10">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-brand-green/20" />
                <p className="text-brand-blue/80 font-display font-bold text-xl mb-6">
                  "Your Vision. Your Commitment. Your Child's Bright Future."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200"></div>
                  <div>
                    <div className="font-bold text-brand-blue">K. Ramesh</div>
                    <div className="text-sm text-brand-blue/50">Founder / Director</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Cards Grid */}
          <div className="lg:w-1/2 grid gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-premium flex items-start gap-6"
              >
                <div className="p-4 rounded-2xl bg-slate-50">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-brand-blue/60 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
