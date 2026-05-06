import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Cpu, Trophy, Users } from "lucide-react";

const programs = [
  {
    icon: <BookOpen size={32} />,
    title: "IIT-JEE & NEET Foundation",
    desc: "Rigorous academic foundation from the early years to prepare for future success.",
    color: "from-blue-500 to-indigo-600",
    lightBg: "bg-blue-100/40",
    iconBg: "bg-blue-100",
    accent: "text-blue-600",
  },
  {
    icon: <Cpu size={32} />,
    title: "Tech-Enabled Classrooms",
    desc: "Smart digital classrooms with technology that inspires modern learning.",
    color: "from-cyan-500 to-blue-600",
    lightBg: "bg-cyan-100/40",
    iconBg: "bg-cyan-100",
    accent: "text-cyan-600",
  },
  {
    icon: <Users size={32} />,
    title: "Activity-Based Learning",
    desc: "Hands-on experiences through sports, arts, and creative clubs.",
    color: "from-brand-green to-emerald-600",
    lightBg: "bg-emerald-100/40",
    iconBg: "bg-emerald-100",
    accent: "text-brand-green",
  },
  {
    icon: <Trophy size={32} />,
    title: "Sports & Fitness",
    desc: "Focus on physical well-being and teamwork through professional sports training.",
    color: "from-brand-orange to-red-600",
    lightBg: "bg-orange-100/40",
    iconBg: "bg-orange-100",
    accent: "text-brand-orange",
  },
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
            className="text-lg text-brand-blue/90"
          >
            We offer a diverse range of programs designed to cater to the unique
            interests and strengths of every student.
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
              className={`relative group p-8 rounded-[2.5rem] ${program.lightBg} border border-slate-100 transition-all duration-500 hover:shadow-2xl overflow-hidden`}
            >
              <div className="relative z-10">
                <div
                  className={`w-16 h-16 rounded-2xl ${program.iconBg} shadow-sm flex items-center justify-center mb-6 ${program.accent}`}
                >
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-blue">
                  {program.title}
                </h3>
                <p className="text-brand-blue/85 leading-relaxed mb-8">
                  {program.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
