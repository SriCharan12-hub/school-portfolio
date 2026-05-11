import React from "react";
import { motion } from "framer-motion";
const classroomImg =
  "https://res.cloudinary.com/sricharan/image/upload/v1778087607/classroom_bmicbe.jpg";

const images = [
  {
    src: classroomImg,
    category: "Classrooms",
    title: "Modern Smart Classroom",
  },
  {
    src: "https://res.cloudinary.com/sricharan/image/upload/v1778087589/teaching_fj4txy.jpg",
    category: "Teaching",
    title: "Interactive Learning",
  },
  {
    src: "https://res.cloudinary.com/sricharan/image/upload/v1778087595/students_nfqrqz.jpg",
    category: "Students",
    title: "Students Cricket Team",
  },
  {
    src: "https://res.cloudinary.com/sricharan/image/upload/v1778087601/ground_qli3jt.jpg",
    category: "Ground",
    title: "Vast Playground Area",
  },
  {
    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800",
    category: "Events",
    title: "Cultural Festival",
  },
  {
    src: "https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?auto=format&fit=crop&q=80&w=800",
    category: "Labs",
    title: "Computer Science Lab",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-white dark:bg-[#1E293B]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-green font-bold uppercase tracking-widest text-sm mb-4"
            >
              School Life
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black"
            >
              Captured Moments
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-48 sm:h-64 md:h-80 rounded-2xl md:rounded-[2rem] overflow-hidden cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 md:p-8">
                <span className="text-brand-green font-bold text-[10px] md:text-xs uppercase tracking-widest mb-1 md:mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {img.category}
                </span>
                <h3 className="text-white text-sm md:text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Gallery;
