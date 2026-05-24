import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ShieldCheck, BookOpen, Cpu, Settings } from 'lucide-react';

const SecureResume = () => {
  return (
    <section id="resume" className="py-10 sm:py-12 scroll-mt-28 px-4 sm:px-6 max-w-7xl mx-auto relative">
      {/* Boundary lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

      {/* Section Header */}
      <div className="text-left space-y-1.5 mb-10 border-b border-white/5 pb-5">
        <div className="text-indigo-400 text-xs font-mono font-semibold tracking-wider uppercase flex items-center gap-1.5">
          <FileText className="w-4 h-4 text-indigo-400" />
          Curriculum Vitae
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          Professional Resume
        </h2>
      </div>

      <div className="w-full max-w-5xl mx-auto premium-card p-6 sm:p-8 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Column (ColSpan 4): Document mockup representation */}
          <div className="md:col-span-4 flex flex-col justify-center items-center">
            <motion.div 
              className="w-44 h-56 border border-dashed border-zinc-800 bg-white/[0.01] p-4 rounded-xl flex flex-col justify-between relative group cursor-pointer hover:border-indigo-500/30 transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 border-b border-white/5 pb-2">
                <span className="font-bold">CV_SAHIL_KAWALE</span>
                <span className="text-emerald-500 font-bold flex items-center gap-0.5">
                  <ShieldCheck className="w-3 h-3 text-emerald-500" />
                  PDF
                </span>
              </div>
              
              <div className="flex flex-col items-center justify-center space-y-2 flex-1">
                <div className="p-3 bg-white/[0.02] rounded-lg border border-white/5 group-hover:border-indigo-500/10 group-hover:bg-indigo-500/[0.02] transition-colors">
                  <FileText className="w-8 h-8 text-indigo-400" />
                </div>
                <span className="font-sans font-bold text-[11px] text-slate-300 tracking-wide text-center">
                  Sahil_Kawale_CV
                </span>
              </div>

              <div className="text-[9px] font-mono text-slate-500 text-center font-bold">
                Size: 1.04 MB
              </div>
            </motion.div>
          </div>

          {/* Right Column (ColSpan 8): Elegant Corporate Dossier Contents Summary */}
          <div className="md:col-span-8 space-y-5 text-left">
            <div className="space-y-1">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                Sahil Kawale
              </h3>
              <div className="text-xs text-indigo-400 font-mono font-semibold tracking-wider uppercase">
                Aspiring Cybersecurity Analyst
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-xs text-slate-300">
              
              <div className="p-4 bg-white/[0.01] rounded-xl border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-xs text-indigo-400 font-mono font-semibold tracking-wider uppercase">
                  <BookOpen className="w-4 h-4 text-indigo-400" />
                  Education
                </div>
                <div className="space-y-0.5">
                  <div className="text-slate-100 font-bold text-sm">B.E. Computer Engineering</div>
                  <div className="text-slate-400 text-xs">University of Mumbai</div>
                </div>
              </div>

              <div className="p-4 bg-white/[0.01] rounded-xl border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-xs text-indigo-400 font-mono font-semibold tracking-wider uppercase">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                  Experience
                </div>
                <div className="space-y-0.5">
                  <div className="text-slate-100 font-bold text-sm">Junior Trainee Developer</div>
                  <div className="text-slate-400 text-xs">Techpaathshala</div>
                </div>
              </div>

              <div className="p-4 bg-white/[0.01] rounded-xl border border-white/5 space-y-2 sm:col-span-2">
                <div className="flex items-center gap-2 text-xs text-indigo-400 font-mono font-semibold tracking-wider uppercase">
                  <Settings className="w-4 h-4 text-indigo-400" />
                  Competencies & Core Stack
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  Seeking a hands-on cybersecurity internship. Experienced in writing secure backend REST systems using Java and Spring Boot, and practicing threat modeling, network port scanning, and packet audits using <span className="text-slate-200 font-medium">Kali Linux, Wireshark, Burp Suite, Nmap, Java, and Python</span>.
                </p>
              </div>

            </div>

            {/* Clean Premium Download Button */}
            <div className="pt-1">
              <a
                href="/cybersecurity resume.pdf"
                download="Sahil_Kawale_Cybersecurity_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold tracking-wide text-xs sm:text-sm rounded-xl transition-all duration-200 shadow-md shadow-indigo-600/10 hover:shadow-indigo-500/20 active:scale-95 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Download Resume (PDF)
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SecureResume;
