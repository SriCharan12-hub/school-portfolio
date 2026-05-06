import React from "react";
import { motion } from "framer-motion";
import { Calendar, Users, PhoneCall, MessageCircle } from "lucide-react";

const Admissions = () => {
  return (
    <section
      id="admissions"
      className="section-padding bg-white relative overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="bg-gradient-to-br from-brand-blue to-blue-900 rounded-[4rem] p-12 md:p-20 relative overflow-hidden text-center text-white shadow-2xl">
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
            <div className="inline-block px-6 py-2 mt-16 rounded-full bg-brand-orange text-white font-bold text-sm uppercase tracking-widest mb-8 animate-pulse">
              Admissions Open 2026-27
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              Start Your Journey <br />
              to <span className="text-brand-green">Excellence</span> Today.
            </h2>

            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Limited seats available for the upcoming academic session. Ensure
              your child's future in the most advanced learning environment.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto mb-16">
              {/* Call Button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+919492279868"
                className="w-full sm:w-auto px-10 py-5 bg-white text-brand-blue rounded-full font-black flex items-center justify-center gap-3 shadow-xl hover:bg-slate-50 transition-all duration-300 group"
              >
                <PhoneCall size={24} className="text-brand-green group-hover:rotate-12 transition-transform" />
                <span className="text-lg">Call Us Now</span>
              </motion.a>

              {/* WhatsApp Button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/919492279868?text=Hello"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-[#25D366] text-white rounded-full font-black flex items-center justify-center gap-3 shadow-xl hover:bg-[#20ba5a] transition-all duration-300"
              >
                <MessageCircle size={24} fill="currentColor" />
                <span className="text-lg">WhatsApp Us</span>
              </motion.a>
            </div>

            <div className="text-white/60 font-bold tracking-widest uppercase text-xs">
              Direct Admission Help: +91 9492279868
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
