import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const Map = () => {
  return (
    <section
      id="location"
      className="section-padding bg-white relative overflow-hidden"
    >
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
            Conveniently located in the heart of Science City, our campus is
            easily accessible and provides a safe, serene environment for
            learning.
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.868642834722!2d78.499972169401!3d16.68197260222709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bca5c9fa437dc47%3A0xd0772a430cff62a7!2sRamachandra%20Residency!5e0!3m2!1sen!2sin!4v1778042819307!5m2!1sen!2sin"
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
                  <h3 className="text-xl font-bold text-brand-blue mb-2">
                    BrainSeed School
                  </h3>
                  <p className="text-brand-blue/60 leading-relaxed">
                    Ramachandra Residency, Hyderabad Road,
                    <br />
                    Beside CKR Function Hall, Kalwakurthy.
                  </p>

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
