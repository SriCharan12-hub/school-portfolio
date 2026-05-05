import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Camera, Share2, MessageCircle, Briefcase } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
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
              className="text-lg text-brand-blue/60 mb-12"
            >
              Have questions? We're here to help you. Reach out to us through any of these channels.
            </motion.p>

            <div className="space-y-8">
              {[
                { icon: <Phone />, title: 'Call Us', value: '9492279868 | 9063413958' },
                { icon: <MapPin />, title: 'Location', value: 'Hyderabad Road, Beside CKR Function Hall, Kalwakurthy.' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="flex items-center gap-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-blue border border-slate-100">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-brand-blue/40 uppercase tracking-widest">{item.title}</div>
                    <div className="text-lg font-bold text-brand-blue">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4 mt-12">
              {[Camera, Share2, MessageCircle, Briefcase].map((Icon, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center hover:bg-brand-green transition-colors duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
