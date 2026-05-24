import React from 'react';
import { ShieldCheck, Mail } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

const Footer = () => {
  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 112;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="w-full bg-[#07080d] border-t border-white/5 py-12 px-4 sm:px-6 relative overflow-hidden select-none font-sans">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(99,102,241,0.015),transparent_60%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Side: Tagline and branding */}
        <div className="text-left space-y-1">
          <div className="flex items-center space-x-2 text-slate-100 cursor-pointer hover:text-indigo-400 transition-colors" onClick={() => handleNavClick('hero')}>
            <ShieldCheck className="w-5 h-5 text-indigo-500" />
            <span className="font-display font-bold tracking-tight text-base text-slate-100">Sahil Kawale</span>
          </div>
          <p className="text-sm text-slate-400 font-normal">
            Aspiring Cybersecurity & Backend Developer. Mumbai, India.
          </p>
        </div>

        {/* Center: System statistics log */}
        <div className="text-center font-mono text-xs text-slate-300 bg-white/[0.01] border border-white/5 px-4.5 py-2.5 rounded-lg max-w-sm">
          <span>System Status: <span className="font-semibold text-emerald-400">100% Operational</span></span>
          <br />
          <span className="text-[10px] text-slate-500">Secure TLS connections verified</span>
        </div>

        {/* Right Side: Social links */}
        <div className="flex items-center space-x-3.5">
          <a 
            href="mailto:sahil.kawale911@gmail.com" 
            className="p-2 border border-white/5 hover:border-white/10 bg-white/[0.01] hover:bg-white/[0.04] text-slate-400 hover:text-white rounded-lg transition-all duration-200"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a 
            href="https://linkedin.com/in/sahil-kawale" 
            target="_blank" 
            rel="noreferrer"
            className="p-2 border border-white/5 hover:border-white/10 bg-white/[0.01] hover:bg-white/[0.04] text-slate-400 hover:text-white rounded-lg transition-all duration-200"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a 
            href="https://github.com/Divoke911" 
            target="_blank" 
            rel="noreferrer"
            className="p-2 border border-white/5 hover:border-white/10 bg-white/[0.01] hover:bg-white/[0.04] text-slate-400 hover:text-white rounded-lg transition-all duration-200"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Copy log copyright */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 font-mono gap-2 relative z-10">
        <span>EST. 2026 // Production Environment</span>
        <span>© 2026 Sahil Kawale. All rights reserved.</span>
      </div>

    </footer>
  );
};

export default Footer;
