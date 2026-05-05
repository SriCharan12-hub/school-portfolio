import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const logo = "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=100&auto=format&fit=crop";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500 ${
          isScrolled ? 'shadow-xl' : 'bg-white/40'
        }`}>
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="BrainSeed Logo" 
              className="w-10 h-10 object-contain transition-transform duration-500 group-hover:rotate-12" 
            />
            <span className="text-xl font-display font-bold tracking-tight text-brand-blue">
              Brain<span className="text-brand-green">Seed</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-semibold text-brand-blue/70 hover:text-brand-blue transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm font-bold text-brand-blue px-4 py-2 hover:text-brand-green transition-colors">
              <Phone size={16} />
              <span>+1 (234) 567-890</span>
            </button>
            <a 
              href="#admissions" 
              className="bg-brand-blue text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-brand-blue/90 transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-brand-blue p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 md:hidden"
          >
            <div className="glass rounded-3xl p-6 flex flex-col gap-4 shadow-2xl">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-bold text-brand-blue border-b border-slate-100 pb-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <button className="btn-secondary w-full py-3 flex justify-center items-center gap-2">
                  <Phone size={18} />
                  Book a Visit
                </button>
                <button className="btn-primary w-full py-3">
                  Enroll Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
