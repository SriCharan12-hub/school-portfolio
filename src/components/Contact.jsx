import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Camera,
  Share2,
  MessageCircle,
  Briefcase,
} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="section-padding bg-slate-50 dark:bg-slate-900 relative overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h4
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-brand-green font-bold uppercase tracking-widest text-sm mb-4"
          >
            Contact Us
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-black mb-8"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-blue/90 dark:text-slate-300 mb-12"
          >
            Have questions? We're here to help you. Reach out to us through
            any of these channels.
          </motion.p>

          <div className="space-y-8 max-w-lg mx-auto">
            {[
              {
                icon: <Phone />,
                title: "Call Us",
                value: "9492279868 | 9063413958",
              },
              {
                icon: <MapPin />,
                title: "Location",
                value: "Hyderabad Road, Beside CKR Function Hall, Kalwakurthy.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="flex items-center gap-6 text-left"
              >
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#1E293B] shadow-sm flex items-center justify-center text-brand-blue dark:text-slate-100 border border-slate-100 dark:border-slate-800">
                  {item.icon}
                </div>
                <div>
                  <div className="text-sm font-bold text-brand-blue/75 dark:text-slate-300 uppercase tracking-widest">
                    {item.title}
                  </div>
                  <div className="text-lg font-bold text-brand-blue dark:text-slate-100">
                    {item.value}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
