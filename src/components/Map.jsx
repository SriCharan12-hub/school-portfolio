import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Map = () => {
  return (
    <section id="location" className="section-padding bg-white relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-green font-bold uppercase tracking-widest text-sm mb-4"
          >
            Our Location
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black mb-6 leading-tight"
          >
            Visit Our Campus
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-blue/60"
          >
            Conveniently located in the heart of Kalwakurthy, our campus is easily accessible and provides a safe, serene environment for learning.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-slate-50 group mx-4 md:mx-0"
        >
          {/* Google Maps Iframe for Kalwakurthy location */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.234394014902!2d78.48912837583606!3d16.1417533845453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb9f7831885f82f%3A0xc47b97368e7b9e76!2sCKR%20FUNCTION%20HALL!5e0!3m2!1sen!2sin!4v1714840000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%"
            style={{ border: 0, minHeight: '350px' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="BrainSeed School Location"
            className="grayscale group-hover:grayscale-0 transition-all duration-700 contrast-125 h-[350px] md:h-[500px]"
          ></iframe>

          {/* Address Card */}
          <div className="absolute bottom-6 left-6 right-6 md:left-10 md:right-auto md:bottom-10">
            <div className="glass p-6 md:p-8 rounded-3xl shadow-2xl max-w-sm border border-white/40">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-brand-green flex items-center justify-center text-white shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-brand-blue mb-1 md:mb-2">BrainSeed School</h3>
                  <p className="text-xs md:text-base text-brand-blue/60 leading-relaxed">
                    Ramachandra Residency, Hyderabad Road,<br />
                    Beside CKR Function Hall, Kalwakurthy.
                  </p>
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=CKR+FUNCTION+HALL+Kalwakurthy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-3 md:mt-4 text-brand-green font-bold text-sm md:text-base hover:underline"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Map;
