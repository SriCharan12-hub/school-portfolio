import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Camera, Share2, MessageCircle, Briefcase } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info */}
          <div className="lg:w-1/3">
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
                { icon: <Phone />, title: 'Call Us', value: '+1 (234) 567-890' },
                { icon: <Mail />, title: 'Email Us', value: 'hello@brainseed.edu' },
                { icon: <MapPin />, title: 'Location', value: '123 Education Lane, Science City, SC 54321' }
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

          {/* Form */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-slate-100"
            >
              <form className="grid sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-brand-blue/60 uppercase tracking-widest px-1">Parent Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:bg-white transition-all font-medium"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-brand-blue/60 uppercase tracking-widest px-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:bg-white transition-all font-medium"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-brand-blue/60 uppercase tracking-widest px-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+1 (234) 567-890" 
                    className="bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:bg-white transition-all font-medium"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-brand-blue/60 uppercase tracking-widest px-1">Grade of Interest</label>
                  <select className="bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:bg-white transition-all font-medium appearance-none">
                    <option>Select Grade</option>
                    <option>Primary School</option>
                    <option>Middle School</option>
                    <option>High School</option>
                  </select>
                </div>
                <div className="sm:col-span-2 flex flex-col gap-2">
                  <label className="text-sm font-bold text-brand-blue/60 uppercase tracking-widest px-1">Message</label>
                  <textarea 
                    rows="4" 
                    placeholder="Tell us about your child's needs..." 
                    className="bg-slate-50 border border-slate-100 rounded-[2rem] px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:bg-white transition-all font-medium"
                  ></textarea>
                </div>
                <div className="sm:col-span-2">
                  <button className="btn-primary w-full py-5 flex items-center justify-center gap-3">
                    Send Inquiry
                    <Send size={20} />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
