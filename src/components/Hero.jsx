import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, Download, Mail } from 'lucide-react';

const Hero = () => {
  const handleScrollTo = (id) => {
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

  // Option B + C: Custom AppSec Scanner Typing Simulation State
  const [typedCommand, setTypedCommand] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);

  const fullCommand = "python3 sahil_scanner.py --target 192.168.1.15";

  // Typewriter effect for the custom scanner command
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullCommand.length) {
        setTypedCommand(fullCommand.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        // Press enter simulated delay
        setTimeout(() => {
          setShowResults(true);
        }, 400);
      }
    }, 60); // slightly faster typing speed for longer command

    return () => clearInterval(typingInterval);
  }, []);

  // Staggered output lines effect
  useEffect(() => {
    if (showResults) {
      const lineInterval = setInterval(() => {
        setVisibleLines((prev) => {
          if (prev < 10) {
            return prev + 1;
          } else {
            clearInterval(lineInterval);
            return prev;
          }
        });
      }, 150); // 150ms per line output load

      return () => clearInterval(lineInterval);
    }
  }, [showResults]);

  return (
    <section id="hero" className="pt-28 pb-10 sm:pt-32 sm:pb-12 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10">
        
        {/* Left Side: Spacious Premium Typography */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          <div className="space-y-3.5">
            <motion.h1 
              className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05]"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Hi, I'm <span className="text-gradient-sky">Sahil Kawale</span> <br />
              Aspiring Cybersec Professional
            </motion.h1>
          </div>

          <motion.p 
            className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed font-normal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Aspiring cybersecurity professional with hands-on experience in vulnerability assessment, network analysis, and ethical hacking labs. Skilled in Linux, Python, Java, networking fundamentals, and security tools including Kali Linux, Bettercap, and Wireshark. Passionate about application security, threat analysis, and identifying security weaknesses through practical security-focused projects.
          </motion.p>

          {/* Clean Action Buttons */}
          <motion.div 
            className="flex flex-wrap gap-3.5 pt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <button
              onClick={() => handleScrollTo('operations')}
              className="px-6 py-3 bg-white text-bg-dark hover:bg-slate-200 font-semibold text-xs sm:text-sm tracking-wide rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-lg shadow-white/5 active:scale-95"
            >
              <span>View Security Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="/cybersecurity resume.pdf"
              download="Sahil_Kawale_Cybersecurity_Resume.pdf"
              className="px-6 py-3 bg-white/[0.03] border border-white/10 text-slate-200 hover:text-white hover:bg-white/[0.07] hover:border-white/20 font-semibold text-xs sm:text-sm tracking-wide rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Download className="w-4 h-4 text-slate-400" />
              <span>Download Resume</span>
            </a>

            <button
              onClick={() => handleScrollTo('contact')}
              className="px-6 py-3 bg-transparent text-slate-400 hover:text-slate-200 hover:bg-white/[0.02] font-semibold text-xs sm:text-sm tracking-wide rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
            </button>
          </motion.div>

        </div>

        {/* Right Side: Authentic Kali Linux Style Monospace Terminal Emulator Mockup */}
        <motion.div 
          className="lg:col-span-5 flex justify-center items-center w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          <div className="w-full max-w-[480px] rounded-xl border border-white/5 bg-[#08090d]/90 backdrop-blur-xl shadow-2xl overflow-hidden font-mono text-[10px] sm:text-xs">
            {/* Terminal Header Controls */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0d0e14]/80 border-b border-white/5 select-none">
              <div className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70 border border-rose-600/30"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 border border-amber-600/30"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 border border-emerald-600/30"></span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono">root@kali: ~</span>
              <div className="w-10"></div> {/* spacer */}
            </div>
            
            {/* Terminal Log Console Block */}
            <div className="p-5 text-slate-300 space-y-1.5 text-left leading-relaxed select-text font-mono min-h-[295px] flex flex-col justify-between">
              
              <div className="space-y-1.5">
                {/* Typed Command Line Prompt */}
                <div className="flex items-start">
                  <span className="text-emerald-400 font-bold mr-2">root@kali:~#</span>
                  <span className="text-slate-100">{typedCommand}</span>
                  {!showResults && <span className="w-1.8 h-3.5 bg-indigo-500 animate-pulse ml-0.5 inline-block shrink-0"></span>}
                </div>

                {/* Simulated Custom AppSec Scanner Output (Staggered) */}
                {showResults && (
                  <div className="space-y-1.5 transition-all duration-200">
                    {visibleLines >= 1 && <div className="text-indigo-400 font-semibold">[+] Initializing SecOps Vulnerability Scanner v1.2...</div>}
                    {visibleLines >= 2 && <div className="text-slate-400">[+] Target Node: 192.168.1.15 (Gateway SSL API)</div>}
                    {visibleLines >= 3 && <div className="text-slate-400">[+] Auditing host SSL/TLS cipher suites...</div>}
                    
                    {visibleLines >= 4 && (
                      <div className="text-rose-400 bg-rose-500/5 border border-rose-500/10 px-2 py-0.5 rounded text-[9px] font-mono leading-normal">
                        [!] ALERT: Weak cipher TLS_RSA_WITH_AES_256_CBC_SHA detected (CVE-2016-2183)
                      </div>
                    )}
                    
                    {visibleLines >= 5 && <div className="text-slate-400 mt-1">[+] Performing REST API secure header inspection...</div>}
                    
                    {visibleLines >= 6 && (
                      <div className="text-amber-400 bg-amber-500/5 border border-amber-500/10 px-2 py-0.5 rounded text-[9px] font-mono leading-normal">
                        [!] WARNING: Missing X-Frame-Options (Clickjacking vulnerability)
                      </div>
                    )}
                    
                    {visibleLines >= 7 && (
                      <div className="text-amber-400 bg-amber-500/5 border border-amber-500/10 px-2 py-0.5 rounded text-[9px] font-mono leading-normal">
                        [!] WARNING: Missing Content-Security-Policy (XSS threat vector)
                      </div>
                    )}
                    
                    {visibleLines >= 8 && (
                      <div className="text-slate-400">
                        [+] Scanning database identity persistence... <span className="text-emerald-400 font-semibold">BCrypt Check [PASSED]</span>
                      </div>
                    )}
                    
                    {visibleLines >= 9 && (
                      <div className="text-indigo-300 font-bold border-t border-white/5 pt-1.5 mt-2">
                        [+] Audit complete: 1 Alert, 2 Warnings, 1 Check Passed.
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Awaiting Active Prompt at bottom */}
              {showResults && visibleLines >= 9 && (
                <div className="flex items-center pt-2.5 border-t border-white/5 mt-3">
                  <span className="text-emerald-400 font-bold mr-2">root@kali:~#</span>
                  <span className="w-2 h-4 bg-indigo-500 animate-pulse inline-block"></span>
                </div>
              )}

            </div>
            
            {/* Terminal status bar */}
            <div className="px-4 py-2 bg-[#0c0d12] border-t border-white/5 flex items-center justify-between text-[9px] text-slate-500 font-mono">
              <span>Terminal: /dev/pts/0</span>
              <span>Shell: Python 3.11</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
