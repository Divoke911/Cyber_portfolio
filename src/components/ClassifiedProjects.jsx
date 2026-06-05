import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, ExternalLink, CheckCircle2, BookOpen } from 'lucide-react';
import { Github } from './SocialIcons';

const ClassifiedProjects = () => {
  const operations = [
    {
      id: "PROJECT-MITM",
      title: "MITM Attack & Vulnerability Audit",
      tag: "Network Security & Protocol Analysis",
      status: "Security Audit",
      statusColor: "text-emerald-400 bg-emerald-500/5 border-emerald-500/10",
      description: "Conducted simulated Man-in-the-Middle testing in isolated sandbox environments to evaluate DNS hijacking, address spoofing, and SSL validation vulnerabilities.",
      outcomes: [
        "Analyzed packet transmission security gaps using Wireshark analyzers.",
        "Demonstrated the impact of insecure HTTP headers and TLS bypass scenarios.",
        "Developed custom mitigation playbooks for corporate local subnets."
      ],
      tech: ["Kali Linux", "Bettercap", "Wireshark", "Network Auditing"],
      paper: "https://www.ijpub.org/ijvra/viewpaperforall.php?paper=IJVRA2604266"
    },
    {
      id: "PROJECT-SCANNER",
      title: "Shadow Port Scanner Utility",
      tag: "Asynchronous Reconnaissance Engine",
      status: "Active Research",
      statusColor: "text-sky-400 bg-sky-500/5 border-sky-500/10",
      description: "Engineered a low-overhead, asynchronous network scanner utility in Python designed to discover open entryways, service signatures, and misconfigured ports.",
      outcomes: [
        "Utilized multi-threaded connection pools to optimize IP range discovery.",
        "Implemented structured JSON reports detailing service version diagnostics.",
        "Designed stateless SYN packet crafting protocols for passive audits."
      ],
      tech: ["Python", "Socket Programming", "TCP/IP Suite", "Security Recon"],
      github: "https://github.com/Divoke911",
      demo: "#"
    },
    {
      id: "PROJECT-SWIGGY",
      title: "Secure Swiggy Backend System",
      tag: "Scalable Secure Architecture",
      status: "Completed",
      statusColor: "text-indigo-400 bg-indigo-500/5 border-indigo-500/10",
      description: "Architected a scalable enterprise microservice backend featuring Spring Security gateways, JWT session validation, and encrypted relational storage.",
      outcomes: [
        "Implemented robust Role-Based Access Control (RBAC) schemas.",
        "Integrated salted BCrypt hashing structures for credential protection.",
        "Engineered RESTful endpoints following OWASP backend guidelines."
      ],
      tech: ["Java", "Spring Boot", "MySQL", "JWT Auth", "Spring Security"],
      github: "https://github.com/Divoke911",
      demo: "#"
    }
  ];

  return (
    <section id="operations" className="py-10 sm:py-12 scroll-mt-28 px-4 sm:px-6 max-w-7xl mx-auto space-y-12 relative">
      {/* Grid line boundary */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

      {/* Section Header */}
      <div className="text-left space-y-1.5">
        <div className="text-indigo-400 text-xs font-mono font-semibold tracking-wider uppercase flex items-center gap-1.5">
          <Shield className="w-4 h-4 text-indigo-400" />
          Technical Portfolio
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          Featured Work & Projects
        </h2>
        <p className="text-sm text-slate-400 max-w-xl font-normal leading-relaxed">
          A showcase of recent security audits, backend architecture designs, and network tool development.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {operations.map((op, idx) => (
          <motion.div
            key={op.id}
            className="premium-card p-6 flex flex-col justify-between text-left relative overflow-hidden group"
            whileHover={{ y: -4 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <div>
              {/* Card Header bar */}
              <div className="flex justify-between items-center text-[10px] font-mono border-b border-white/5 pb-3.5 mb-4 text-slate-500">
                <span className="font-semibold text-slate-400 group-hover:text-indigo-400 transition-colors">{op.id}</span>
                <span className={`px-2 py-0.5 rounded-full border font-medium tracking-wide text-[9px] ${op.statusColor}`}>
                  {op.status}
                </span>
              </div>

              {/* Title & Tag */}
              <div className="space-y-1">
                <div className="text-[10px] text-indigo-400 font-mono font-semibold tracking-wider uppercase">
                  {op.tag}
                </div>
                <h3 className="font-display font-bold text-lg text-slate-100 group-hover:text-white transition-colors">
                  {op.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-xs sm:text-sm font-sans font-normal leading-relaxed mt-3.5">
                {op.description}
              </p>

              {/* Outcomes list */}
              <div className="mt-5 space-y-2 border-t border-white/5 pt-4">
                <div className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-wider">Key Outcomes & Contributions:</div>
                <ul className="space-y-1.5 font-sans text-xs text-slate-300 font-normal leading-relaxed">
                  {op.outcomes.map((out, oIdx) => (
                    <li key={oIdx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              {/* Technologies used */}
              <div className="flex flex-wrap gap-1.5 mt-5">
                {op.tech.map((t) => (
                  <span 
                    key={t}
                    className="bg-white/[0.02] border border-white/5 rounded-md px-2 py-0.5 font-mono text-[9px] text-slate-400 group-hover:border-indigo-500/20 group-hover:text-indigo-400 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action buttons Links */}
              <div className="flex flex-col gap-2 mt-5 pt-4 border-t border-white/5 text-xs font-mono font-semibold">
                {op.github && (
                  <a
                    href={op.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/10 text-slate-300 hover:text-white rounded-lg transition-all duration-200"
                  >
                    <Github className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                    View Repository
                  </a>
                )}
                {op.paper && (
                  <a
                    href={op.paper}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 hover:border-indigo-500/40 text-indigo-300 hover:text-indigo-100 rounded-lg transition-all duration-200"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Research Paper
                  </a>
                )}
              </div>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default ClassifiedProjects;
