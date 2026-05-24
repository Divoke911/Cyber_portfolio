import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Wrench, Server, Code, Activity, CheckCircle2 } from 'lucide-react';

const SkillsRadar = () => {
  const [selectedSkill, setSelectedSkill] = useState({
    name: "Spring Boot",
    val: 87,
    log: "Enterprise REST architectural framework, secure transaction scopes, custom filter chains, and database mapping."
  });
  const [activeCategory, setActiveCategory] = useState('CYBERSECURITY');

  const categories = {
    CYBERSECURITY: {
      icon: <Shield className="w-4 h-4" />,
      skills: [
        { name: "Vulnerability Assessment", val: 92, log: "DAST & SAST diagnostics, secure application audits, credentials scanning." },
        { name: "Ethical Hacking", val: 88, log: "Adversarial simulations, software defense checks, sandbox analysis, payload reviews." },
        { name: "Threat Detection", val: 85, log: "SIEM log integrations, anomalous packet inspection, host intrusion signatures." },
        { name: "Penetration Testing", val: 86, log: "OWASP Top 10 evaluation, network routing checks, authorization testing." },
        { name: "OSINT Reconnaissance", val: 90, log: "Target metadata harvesting, credential dumps audit, public security footprinting." },
        { name: "Network Security", val: 91, log: "Wireless security configurations, virtual private networks, firewall restrictions." },
        { name: "Packet Analysis", val: 93, log: "Inspecting Wireshark captures, TCP handshake negotiations, payload header decodes." }
      ]
    },
    TOOLS: {
      icon: <Wrench className="w-4 h-4" />,
      skills: [
        { name: "Kali Linux", val: 95, log: "Primary security suite platform configured for penetration testing and system audits." },
        { name: "Wireshark", val: 93, log: "Deep packet inspection tool utilized for verifying TLS payloads and TLS headers." },
        { name: "Bettercap", val: 85, log: "Network analyzer framework used to diagnose security flaws in wireless routing." },
        { name: "Burp Suite", val: 82, text: "local proxy proxy tool.", log: "Local proxy utility used to review REST validation rules and token claims." },
        { name: "Nmap", val: 90, log: "Core network mapper. Custom scripts (NSE) for identifying active hosts and OS versions." }
      ]
    },
    BACKEND: {
      icon: <Server className="w-4 h-4" />,
      skills: [
        { name: "Java", val: 89, log: "Core backend language for building highly scalable systems and multi-threaded gateways." },
        { name: "Spring Boot", val: 87, log: "Enterprise Java framework. Dependency injection, secure configurations, and JPA database layers." },
        { name: "REST APIs", val: 91, log: "Stateless JSON microservices, standardized response protocols, secure endpoint structures." },
        { name: "MySQL", val: 84, log: "Relational database schema layouts, secure key indexes, stored routines, and safe query configurations." },
        { name: "Authentication Systems", val: 88, log: "Stateless authorization using JWT, Spring Security Filters, and cryptographically hashed credentials." }
      ]
    },
    PROGRAMMING: {
      icon: <Code className="w-4 h-4" />,
      skills: [
        { name: "Python", val: 90, log: "SecOps scripting. Automated port auditing, API log monitors, and parsing custom payloads." },
        { name: "Java", val: 89, log: "Core application development. Thread pools, collections structures, and secure networking APIs." },
        { name: "C Language", val: 78, log: "Lower-level systems exploration, core thread models, and low-level socket APIs." },
        { name: "SQL", val: 85, log: "Database query writing, indices analysis, and schema integration audits." },
        { name: "JavaScript", val: 83, log: "Front-end interface interactions, async event integrations, and JSON payload handling." }
      ]
    }
  };

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  return (
    <section id="skills" className="py-10 sm:py-12 scroll-mt-28 px-4 sm:px-6 max-w-7xl mx-auto space-y-12 relative">
      
      {/* Section Header */}
      <div className="text-left space-y-1.5 border-b border-white/5 pb-5">
        <div className="text-indigo-400 text-xs font-mono font-semibold tracking-wider uppercase">
          Technical Arsenal
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          System Skills & Tools
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column (ColSpan 4): Interactive Detail Summary */}
        <div className="lg:col-span-4 space-y-5">
          
          <div className="premium-card p-5 min-h-[240px] flex flex-col justify-between text-left bg-card-dark/40">
            <div className="flex items-center justify-between text-[10px] font-mono border-b border-white/5 pb-3.5 text-slate-500">
              <span className="flex items-center gap-1.5 font-semibold">
                <Activity className="w-4 h-4 text-indigo-400" />
                Capability Details
              </span>
              <span>Verified Skill</span>
            </div>
            
            <div className="flex-1 py-3 text-sm">
              <AnimatePresence mode="wait">
                {selectedSkill ? (
                  <motion.div 
                    key={selectedSkill.name}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="space-y-2.5"
                  >
                    <div className="text-slate-100 font-bold tracking-tight text-base">{selectedSkill.name}</div>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">{selectedSkill.log}</p>
                  </motion.div>
                ) : (
                  <div className="text-slate-500 text-xs leading-relaxed italic font-normal">
                    Select a core competency card on the right to retrieve detailed descriptions and capabilities.
                  </div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="text-[10px] font-mono text-indigo-400 font-semibold border-t border-white/5 pt-3.5 flex justify-between">
              <span>Proficiency: {selectedSkill ? `${selectedSkill.val}%` : '---'}</span>
              <span>Status: Verified</span>
            </div>
          </div>

          {/* Compliance Checklist */}
          <div className="premium-card p-5 text-left space-y-4 bg-card-dark/40">
            <div className="text-[10px] font-mono text-slate-500 font-semibold border-b border-white/5 pb-2.5">
              Standards & Compliance
            </div>
            <ul className="text-xs space-y-2.5 text-slate-400 font-sans font-normal leading-relaxed">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>OWASP Top 10 Guidelines Followed</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Secure Docker Configurations & Audits</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Stateless JWT HMAC Token Signatures</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Right Column (ColSpan 8): Skill categories and grids */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Category Selector Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-white/5 pb-3">
            {[
              { id: 'CYBERSECURITY', label: 'Cybersecurity', icon: <Shield className="w-3.5 h-3.5" /> },
              { id: 'TOOLS', label: 'Security Tools', icon: <Wrench className="w-3.5 h-3.5" /> },
              { id: 'BACKEND', label: 'Backend Core', icon: <Server className="w-3.5 h-3.5" /> },
              { id: 'PROGRAMMING', label: 'Languages', icon: <Code className="w-3.5 h-3.5" /> },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 font-semibold text-xs rounded-full border transition-all duration-200 cursor-pointer ${
                  activeCategory === tab.id
                    ? 'text-indigo-400 border-indigo-500/20 bg-indigo-500/10'
                    : 'bg-transparent border-white/5 text-slate-500 hover:text-slate-300 hover:border-white/10'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Category Skills List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories[activeCategory].skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                onClick={() => handleSkillClick(skill)}
                className="premium-card p-4.5 flex flex-col justify-between cursor-pointer group text-left bg-card-dark/40"
                whileHover={{ y: -1 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.04 }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-sm text-slate-200 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                  <span className="font-mono text-xs text-indigo-400 font-semibold">
                    {skill.val}%
                  </span>
                </div>

                {/* Progress bar line */}
                <div className="w-full bg-white/[0.02] h-1.5 rounded-full overflow-hidden border border-white/5">
                  <motion.div 
                    className="bg-indigo-500 h-full rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.val}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>

                {/* Info block footer */}
                <div className="mt-3 text-[9px] font-mono text-slate-500 group-hover:text-indigo-400/50 flex justify-between">
                  <span>Verified Capability</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">View Details &gt;</span>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};

export default SkillsRadar;
