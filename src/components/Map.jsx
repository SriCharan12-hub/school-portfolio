import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Map = () => {
  return (
    <section id="location" className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
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
            className="text-4xl md:text-5xl font-black mb-6"
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
            Conveniently located in the heart of Science City, our campus is easily accessible and provides a safe, serene environment for learning.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50 group"
        >
          {/* Google Maps Iframe for Kalwakurthy location */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.234394014902!2d78.48912837583606!3d16.1417533845453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb9f7831885f82f%3A0xc47b97368e7b9e76!2sCKR%20FUNCTION%20HALL!5e0!3m2!1sen!2sin!4v1714840000000!5m2!1sen!2sin" 
            width="100%" 
            height="500" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="BrainSeed School Location"
            className="grayscale group-hover:grayscale-0 transition-all duration-700 contrast-125"
          ></iframe>

          {/* Floating Address Card */}
          <div className="absolute bottom-10 left-10 hidden md:block">
            <div className="glass p-8 rounded-3xl shadow-2xl max-w-sm border border-white/40">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-green flex items-center justify-center text-white shrink-0">
                  <MapPin />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-blue mb-2">BrainSeed School</h3>
                  <p className="text-brand-blue/60 leading-relaxed">
                    Ramachandra Residency, Hyderabad Road,<br />
                    Beside CKR Function Hall, Kalwakurthy.
                  </p>
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=CKR+FUNCTION+HALL+Kalwakurthy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-brand-green font-bold hover:underline"
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
