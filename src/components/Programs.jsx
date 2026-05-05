import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Cpu, Trophy, Users } from 'lucide-react';

const programs = [
  {
    icon: <BookOpen size={32} />,
    title: 'IIT & NEET Foundation',
    desc: 'Rigorous academic preparation from early years to ensure success in competitive exams.',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    icon: <Cpu size={32} />,
    title: 'Digital Classrooms',
    desc: 'Interactive smart boards and 1:1 tablet integration for a modern learning experience.',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    icon: <Users size={32} />,
    title: 'Activity-Based Learning',
    desc: 'Learning by doing through projects, labs, and collaborative workshops.',
    color: 'from-brand-green to-emerald-600'
  },
  {
    icon: <Trophy size={32} />,
    title: 'Sports & Life Skills',
    desc: 'Holistic development through professional sports coaching and leadership training.',
    color: 'from-brand-orange to-red-600'
  }
];

const Programs = () => {
  return (
    <section id="programs" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-green font-bold uppercase tracking-widest text-sm mb-4"
          >
            Academic Excellence
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            Our Specialized Programs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-blue/60"
          >
            We offer a diverse range of programs designed to cater to the unique interests and strengths of every student.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all duration-500 hover:shadow-2xl overflow-hidden"
            >
              {/* Hover Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-brand-blue group-hover:bg-transparent group-hover:text-white group-hover:shadow-none transition-all duration-500">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-blue group-hover:text-white transition-colors duration-500">
                  {program.title}
                </h3>
                <p className="text-brand-blue/60 leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                  {program.desc}
                </p>
                <div className="mt-8 flex items-center gap-2 text-brand-blue font-bold group-hover:text-white transition-colors duration-500 cursor-pointer">
                  Learn More
                  <div className="w-6 h-0.5 bg-brand-blue group-hover:bg-white transition-all duration-500"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
