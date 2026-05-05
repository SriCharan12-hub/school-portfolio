import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, PhoneCall } from 'lucide-react';

const Admissions = () => {
  return (
    <section id="admissions" className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto">
        <div className="bg-gradient-to-br from-brand-blue to-blue-900 rounded-[4rem] p-12 md:p-20 relative overflow-hidden text-center text-white">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="inline-block px-6 py-2 rounded-full bg-brand-orange text-white font-bold text-sm uppercase tracking-widest mb-8 animate-pulse">
              Admissions Open 2026-27
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              Start Your Journey <br />
              to <span className="text-brand-green">Excellence</span> Today.
            </h2>
            
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Limited seats available for the upcoming academic session. Ensure your child's future in the most advanced learning environment.
            </p>

            <div className="grid sm:grid-cols-1 gap-8 max-w-sm mx-auto mb-16">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10">
                <PhoneCall className="mx-auto mb-4 text-brand-green" />
                <div className="text-2xl font-bold mb-1 tracking-tight">9492279868</div>
                <div className="text-xs text-white/50 uppercase tracking-widest font-bold">Admission Help</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="btn-accent px-12 py-5 text-lg w-full sm:w-auto">
                Apply for Admission
              </button>
              <button className="bg-white/10 hover:bg-white/20 transition-colors border border-white/20 px-12 py-5 rounded-full font-bold text-lg w-full sm:w-auto">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
