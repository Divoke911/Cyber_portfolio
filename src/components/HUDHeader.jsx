import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Palette } from 'lucide-react';

const HUDHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  
  const [activeTheme, setActiveTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'default';
  });

  const themes = [
    { name: 'Slate Violet', value: 'default', color: 'bg-[#6366f1]' },
    { name: 'Cyber Blue', value: 'cyber-blue', color: 'bg-[#3b82f6]' },
    { name: 'Tactical Emerald', value: 'emerald-matrix', color: 'bg-[#10b981]' },
    { name: 'Stealth Crimson', value: 'crimson-stealth', color: 'bg-[#f43f5e]' }
  ];

  useEffect(() => {
    if (activeTheme === 'default') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', activeTheme);
    }
    localStorage.setItem('portfolio-theme', activeTheme);
  }, [activeTheme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 112; // slightly adjusted for floating margin
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed top-4 left-0 right-0 z-50 w-full px-4 sm:px-6 pointer-events-none select-none">
      <header className={`mx-auto max-w-7xl w-full rounded-2xl border transition-all duration-300 pointer-events-auto ${
        scrolled 
          ? 'py-4 bg-[#090a0f]/90 backdrop-blur-md border-indigo-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.5),0_0_15px_rgba(99,102,241,0.12)]' 
          : 'py-5 bg-[#090a0f]/50 backdrop-blur-sm border-white/5 shadow-[0_0_15px_rgba(99,102,241,0.05)]'
      }`}>
        <div className="px-4 sm:px-6 flex items-center justify-between">
          
          {/* Left Side: Modern Premium Console Branding */}
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => handleNavClick('hero')}>
            <div className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
              <span className="font-mono text-[10px] font-bold text-slate-500 tracking-wider uppercase shrink-0 hidden xs:inline">
                NODE_ACTIVE
              </span>
            </div>
            <span className="h-3 w-[1px] bg-white/10 hidden sm:block"></span>
            <span className="font-display font-extrabold text-base sm:text-lg text-slate-200 group-hover:text-indigo-400 transition-colors duration-200 tracking-tight flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-indigo-400" />
              Sahil Kawale
            </span>
          </div>
 
          {/* Center: Monospace Navigation Tabs */}
          <nav className="hidden md:flex items-center space-x-1 border border-white/5 bg-white/[0.01] p-1 rounded-xl">
            {[
              { label: 'Overview', id: 'dashboard' },
              { label: 'About', id: 'about' },
              { label: 'Skills', id: 'skills' },
              { label: 'Projects', id: 'operations' },
              { label: 'Credentials', id: 'certs' },
              { label: 'Resume', id: 'resume' },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.id)}
                className="px-4 py-2 text-[11px] sm:text-xs font-mono tracking-wider uppercase text-slate-400 hover:text-slate-200 hover:bg-white/[0.03] transition-all duration-200 rounded-lg cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>
 
          {/* Right CTA: Access Gate and connection init */}
          <div className="flex items-center space-x-3.5">
            {/* Dynamic Theme Switcher Dropdown */}
            <div className="relative pointer-events-auto flex items-center">
              <button 
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="p-2 border border-white/5 hover:border-white/10 bg-white/[0.01] hover:bg-white/[0.04] text-slate-400 hover:text-white rounded-lg transition-all duration-200 cursor-pointer flex items-center justify-center"
                title="Switch Color Theme"
              >
                <Palette className="w-4 h-4 text-indigo-400" />
              </button>

              {themeDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40 cursor-default pointer-events-auto"
                    onClick={() => setThemeDropdownOpen(false)}
                  />
                  <div className="absolute right-0 top-full mt-2.5 w-48 bg-[#090a0f]/95 backdrop-blur-xl border border-white/5 rounded-xl p-1.5 shadow-2xl z-50 flex flex-col space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
                    {themes.map((theme) => (
                      <button
                        key={theme.value}
                        onClick={() => {
                          setActiveTheme(theme.value);
                          setThemeDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-xs font-mono tracking-wider rounded-lg flex items-center justify-between hover:bg-white/[0.04] transition-colors cursor-pointer ${
                          activeTheme === theme.value ? 'text-white bg-white/[0.03] border border-white/5' : 'text-slate-400 border border-transparent'
                        }`}
                      >
                        <span>{theme.name}</span>
                        <span className={`w-2.5 h-2.5 rounded-full ${theme.color} border border-white/10 shadow-[0_0_8px_rgba(255,255,255,0.05)]`}></span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <span className="hidden lg:inline-block font-mono text-[10px] tracking-wider uppercase bg-[#090a0f]/50 border border-rose-500/25 shadow-[0_0_10px_rgba(244,63,94,0.15)] px-2.5 py-1 rounded-md select-none">
              <span className="text-rose-500 font-bold">SECURE_SSL</span>
              <span className="text-white mx-1.5 font-bold">//</span>
              <span className="text-amber-400 font-bold">AES_256</span>
            </span>
            <button 
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase text-indigo-400 hover:text-white bg-indigo-500/10 hover:bg-indigo-500/25 border border-indigo-500/20 hover:border-indigo-500/35 rounded-lg transition-all duration-200 cursor-pointer"
            >
              <span>Initialize_Conn &rarr;</span>
            </button>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white bg-white/[0.02] border border-white/5 rounded-lg cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Drawer (Styled as floating dropdown) */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-[#090a0f]/95 backdrop-blur-xl border border-white/5 rounded-2xl py-4 px-6 md:hidden flex flex-col space-y-3 z-45 animate-in fade-in slide-in-from-top-2 duration-200">
            {[
              { label: 'Overview', id: 'dashboard' },
              { label: 'About', id: 'about' },
              { label: 'Skills', id: 'skills' },
              { label: 'Projects', id: 'operations' },
              { label: 'Credentials', id: 'certs' },
              { label: 'Resume', id: 'resume' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.id)}
                className="w-full text-left py-2 text-sm text-slate-400 hover:text-slate-100 font-semibold cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>
    </div>
  );
};

export default HUDHeader;
