import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Robert Wilson',
    role: 'Parent',
    content: "Choosing BrainSeed was the best decision for my son. The individual attention and focus on concepts have transformed his approach to learning.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150'
  },
  {
    name: 'Emily Davis',
    role: 'Grade 10 Student',
    content: "The teachers here don't just teach; they inspire. The digital classrooms and activity-based learning make every day exciting.",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150'
  },
  {
    name: 'David Thompson',
    role: 'Alumni (IIT Delhi)',
    content: "The IIT Foundation program at BrainSeed gave me the competitive edge I needed. I am grateful for the mentorship and discipline.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-green font-bold uppercase tracking-widest text-sm mb-4"
          >
            Testimonials
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            What Our Community Says
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm relative group hover:shadow-2xl transition-all duration-500"
            >
              <Quote className="absolute top-8 right-8 text-brand-green/10 w-16 h-16 group-hover:scale-110 transition-transform duration-500" />
              
              <div className="flex gap-1 mb-6 text-brand-orange">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-brand-blue/70 leading-relaxed mb-8 relative z-10">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-green/20"
                />
                <div>
                  <div className="font-bold text-brand-blue">{t.name}</div>
                  <div className="text-sm text-brand-blue/50">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
