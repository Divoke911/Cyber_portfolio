import React, { useState } from 'react';
import { Award, BookOpen, Briefcase, Flame, Shield, Check, Lock } from 'lucide-react';

const AboutIntel = () => {
  // Service Hardening Simulator State
  const [securityConfig, setSecurityConfig] = useState({
    jwt: true,
    csrfGuard: true,
    hashSalt: true,
    rateLimiting: false,
    distroless: false,
  });

  const handleToggle = (key) => {
    setSecurityConfig(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Calculate Hardening Level
  const activeCount = Object.values(securityConfig).filter(Boolean).length;
  const totalCount = Object.keys(securityConfig).length;
  const score = Math.round((activeCount / totalCount) * 100);

  let grade = "Moderate";
  let gradeColor = "text-indigo-400 bg-indigo-500/5 border-indigo-500/10";
  
  if (score === 100) {
    grade = "Fully Hardened";
    gradeColor = "text-emerald-400 bg-emerald-500/5 border-emerald-500/10";
  } else if (score >= 80) {
    grade = "Highly Secure";
    gradeColor = "text-indigo-400 bg-indigo-500/5 border-indigo-500/10";
  } else if (score < 60) {
    grade = "Vulnerable";
    gradeColor = "text-rose-400 bg-rose-500/5 border-rose-500/10";
  }

  const items = [
    { key: 'jwt', label: 'Stateless JWT Auth', desc: 'Prevents session hijacking via bearer tokens' },
    { key: 'csrfGuard', label: 'CSRF Token Validation', desc: 'Blocks malicious cross-site executions' },
    { key: 'hashSalt', label: 'BCrypt Hashing (12 Rounds)', desc: 'Secures user identity state persistence' },
    { key: 'rateLimiting', label: 'Sliding Ingress Limits', desc: 'Shields endpoints from brute-force token scans' },
    { key: 'distroless', label: 'Non-Root Container Base', desc: 'Restricts host privileges inside Docker runtimes' },
  ];

  const intelDetails = [
    {
      icon: <BookOpen className="w-4 h-4 text-indigo-400" />,
      title: "Academic Background",
      value: "Computer Engineering Student",
      desc: "University of Mumbai. High focus on computer networking architectures, operating systems, and core cryptographic paradigms."
    },
    {
      icon: <Briefcase className="w-4 h-4 text-indigo-400" />,
      title: "Academic Experience",
      value: "Trainee Developer",
      desc: "Techpaathshala. Gaining practical industry exposure to backend logic, API routing structures, and secure coding practices."
    },
    {
      icon: <Flame className="w-4 h-4 text-indigo-400" />,
      title: "Lab Scripting",
      value: "Custom Security Tools",
      desc: "Leveraging Python to build lightweight asynchronous network port scanners and automated packet analysis scripts."
    },
    {
      icon: <Shield className="w-4 h-4 text-indigo-400" />,
      title: "Research Focus",
      value: "AppSec & Vulnerabilities",
      desc: "Studying web security guidelines (OWASP Top 10), cryptographic protocols, and learning active threat mitigation methodologies."
    }
  ];

  return (
    <section id="about" className="py-10 sm:py-12 scroll-mt-28 px-4 sm:px-6 max-w-7xl mx-auto space-y-12 relative">
      
      {/* Section Header */}
      <div className="text-left space-y-1.5 border-b border-white/5 pb-5">
        <div className="text-indigo-400 text-xs font-mono font-semibold tracking-wider uppercase">
          Biography
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          About Sahil Kawale
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column (ColSpan 5): Unique Architecture Hardening Sandbox */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          
          <div className="w-full premium-card p-6 relative overflow-hidden flex flex-col justify-between h-full bg-card-dark/40 border border-white/5">
            
            {/* Header info */}
            <div className="space-y-1.5 text-left border-b border-white/5 pb-4 mb-4">
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
                <span>SECURITY ARCHITECTURE SANDBOX</span>
                <span className="text-indigo-400 font-semibold uppercase font-mono">v1.2.0</span>
              </div>
              <h3 className="font-display font-bold text-base text-slate-200">
                Service Hardening Simulator
              </h3>
              <p className="text-xs text-slate-400 leading-normal font-sans">
                Interactively toggle security policies to evaluate application resilience metrics against potential threat models.
              </p>
            </div>

            {/* Scoreboard display */}
            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] flex items-center justify-between mb-5 select-none">
              <div className="space-y-1 text-left">
                <span className="text-[9px] font-mono text-slate-500 uppercase font-semibold">Resilience Index</span>
                <div className="font-display text-2xl font-extrabold text-white">
                  {score}%
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full border text-[10px] font-mono font-semibold uppercase tracking-wider ${gradeColor}`}>
                {grade}
              </div>
            </div>

            {/* Config policies selection checklist */}
            <div className="space-y-2.5 flex-1">
              {items.map((item) => {
                const isActive = securityConfig[item.key];
                return (
                  <button
                    key={item.key}
                    onClick={() => handleToggle(item.key)}
                    className="w-full text-left p-3 rounded-xl border border-white/5 bg-white/[0.01] hover:border-indigo-500/20 hover:bg-white/[0.02] flex items-start gap-3 transition-all duration-200 cursor-pointer group"
                  >
                    <div className={`w-5 h-5 rounded border mt-0.5 shrink-0 flex items-center justify-center transition-all ${
                      isActive 
                        ? 'border-indigo-500 bg-indigo-500 text-white' 
                        : 'border-white/10 bg-transparent group-hover:border-white/20'
                    }`}>
                      {isActive && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
                        {item.label}
                      </div>
                      <div className="text-[10px] text-slate-400 font-sans leading-normal">
                        {item.desc}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom confirmation details */}
            <div className="mt-5 pt-3.5 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-slate-500">
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3 text-slate-500" />
                Stateless Guards Active
              </span>
              <span className="text-slate-400">Scorecard Verified</span>
            </div>

          </div>

        </div>

        {/* Right Column (ColSpan 7): Summary & Highlights */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="premium-card rounded-2xl border border-white/5 bg-card-dark/40 p-6 sm:p-8 h-full flex flex-col justify-between">
            
            <div className="space-y-4">
              <h3 className="font-display font-bold text-xl text-slate-100 tracking-tight text-left">
                Bridging Software Engineering & Information Security
              </h3>
              <p className="text-slate-400 text-sm sm:text-base text-left leading-relaxed font-normal">
                I am a passionate Computer Engineering student and aspiring Cybersecurity Analyst based in Mumbai, India. I leverage my strong software engineering background to perform secure source code reviews, analyze OWASP Top 10 vulnerabilities, and script custom security scanning utilities. I am actively seeking a cybersecurity internship where I can apply my coding foundation to add immediate value to security operations.
              </p>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {intelDetails.map((intel, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-xl border border-white/5 bg-white/[0.01] flex items-start space-x-3 text-left hover:border-indigo-500/15 transition-all duration-300"
                >
                  <div className="p-2.5 bg-white/[0.02] rounded-lg mt-0.5 border border-white/5 shrink-0">
                    {intel.icon}
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-semibold tracking-wider text-slate-500 block">
                      {intel.title}
                    </span>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-200 tracking-tight">
                      {intel.value}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed font-normal">
                      {intel.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom metadata */}
            <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center text-[10px] font-mono text-slate-500 gap-2">
              <span className="flex items-center gap-1.5 font-semibold">
                <Award className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                Focus Area: Aspiring Cybersecurity Analyst & AppSec Intern
              </span>
              <span className="text-indigo-400 font-semibold">
                Framework Focus: OWASP, CWE, MITRE ATT&CK, NIST
              </span>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};

export default AboutIntel;
