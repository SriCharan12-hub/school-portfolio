import React from 'react';
const logo = "https://res.cloudinary.com/sricharan/image/upload/v1777995576/IMG-20260324-WA0038_3.jpg_vfcycl.jpg";

const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white pt-24 pb-12 overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-green via-brand-orange to-brand-blue"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/20">
                <img src={logo} alt="BrainSeed Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-2xl font-display font-bold tracking-tight">
                Brain<span className="text-brand-green">Seed</span>
              </span>
            </div>
            <p className="text-white/50 leading-relaxed mb-8 max-w-xs">
              Empowering students with strong concepts, discipline, and futuristic skills to lead the next generation.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Programs', 'Admissions', 'Gallery', 'Location'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/50 hover:text-brand-green transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-brand-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Programs</h4>
            <ul className="space-y-4">
              {['IIT Foundation', 'NEET Prep', 'Digital Learning', 'Sports Academy', 'Creative Arts'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/50 hover:text-brand-green transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-brand-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Newsletter</h4>
            <p className="text-white/50 text-sm mb-6 leading-relaxed">
              Subscribe to get latest updates about admissions and events.
            </p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-1 focus:ring-brand-green transition-all"
              />
              <button className="bg-brand-green text-brand-blue font-bold py-4 rounded-2xl hover:bg-brand-green/90 transition-all active:scale-95">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/30 text-sm">
            © 2026 BrainSeed NextGen School. All rights reserved.
          </div>
          <div className="flex gap-8 text-white/30 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
