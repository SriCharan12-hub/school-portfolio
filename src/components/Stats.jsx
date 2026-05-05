import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Total Students', value: '1,200+' },
  { label: 'Excellence Years', value: '15+' },
  { label: 'Success Rate', value: '98%' },
  { label: 'Skilled Faculty', value: '85+' },
];

const Stats = () => {
  return (
    <section className="bg-brand-blue py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-2">
                {stat.value}
              </div>
              <div className="text-brand-green/80 font-bold uppercase tracking-widest text-xs md:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
