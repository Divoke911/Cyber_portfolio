import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Calendar } from 'lucide-react';

const CertsClearance = () => {
  const certifications = [
    {
      id: "CERT-IBM",
      title: "IBM Cybersecurity Fundamentals",
      issuer: "IBM",
      date: "Dec 2024",
      level: "Fundamentals",
      badgeColor: "bg-sky-500/5 border-sky-500/10 text-sky-400"
    },
    {
      id: "CERT-TH",
      title: "Threat Intelligence and Hunting",
      issuer: "IBM",
      date: "Mar 2025",
      level: "Threat Hunting",
      badgeColor: "bg-indigo-500/5 border-indigo-500/10 text-indigo-400"
    },
    {
      id: "CERT-TATA",
      title: "Tata Cybersecurity Simulation",
      issuer: "TATA FORAGE",
      date: "Oct 2024",
      level: "Simulation",
      badgeColor: "bg-emerald-500/5 border-emerald-500/10 text-emerald-400"
    },
    {
      id: "CERT-MALWARE",
      title: "Malware Detection & Prevention",
      issuer: "UDEMY",
      date: "Jan 2025",
      level: "Malware Defense",
      badgeColor: "bg-rose-500/5 border-rose-500/10 text-rose-400"
    },
    {
      id: "CERT-ETHICAL",
      title: "Ethical Hacking Methodology",
      issuer: "UDEMY",
      date: "Feb 2025",
      level: "Ethical Methods",
      badgeColor: "bg-slate-400/5 border-slate-500/10 text-slate-400"
    },
    {
      id: "CERT-JAVA-FS",
      title: "Java Full Stack Developer",
      issuer: "Techpaathshala",
      date: "Jul 2024",
      level: "Full Stack Dev",
      badgeColor: "bg-indigo-500/5 border-indigo-500/10 text-indigo-400"
    },
    {
      id: "MORE-CREDS",
      title: "Additional Certifications & Transcripts",
      issuer: "Full Registry Available",
      date: "Ongoing",
      level: "Verification Ledger",
      badgeColor: "bg-indigo-500/5 border-indigo-500/10 text-indigo-400",
      isInteractive: true
    }
  ];

  return (
    <section id="certs" className="py-10 sm:py-12 scroll-mt-28 px-4 sm:px-6 max-w-7xl mx-auto space-y-12 relative">
      {/* Boundary line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

      {/* Section Header */}
      <div className="text-left space-y-1.5">
        <div className="text-indigo-400 text-xs font-mono font-semibold tracking-wider uppercase flex items-center gap-1.5">
          <Award className="w-4 h-4 text-indigo-400" />
          Credentials
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          Certifications & Accreditations
        </h2>
        <p className="text-sm text-slate-400 max-w-xl font-normal leading-relaxed">
          Verified academic and professional certifications validating core information security competency.
        </p>
      </div>

      {/* Certification Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {certifications.map((cert, idx) => {
          if (cert.id === "MORE-CREDS") {
            return (
              <motion.div
                key={cert.id}
                onClick={() => {
                  const contactEl = document.getElementById('contact');
                  if (contactEl) {
                    const headerOffset = 112;
                    const elementPosition = contactEl.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="premium-card p-6 flex flex-col justify-between text-left relative group overflow-hidden border-dashed border-indigo-500/30 hover:border-indigo-500/50 cursor-pointer bg-indigo-500/[0.01] col-span-1 sm:col-span-2 lg:col-span-3"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 w-full">
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex items-center gap-3">
                      <span className="text-indigo-400 font-bold font-mono text-[10px]">{cert.id}</span>
                      <span className={`px-2.5 py-0.5 rounded-full border text-[9px] font-medium font-mono tracking-wide ${cert.badgeColor}`}>
                        {cert.level}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-base text-slate-100 group-hover:text-indigo-400 transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-sans font-normal leading-relaxed pt-0.5">
                      I have multiple ongoing academic projects, threat hunting labs, and credentials not listed here. Transcripts and full verification ledger links are available upon direct request.
                    </p>
                  </div>

                  <div className="flex-shrink-0 md:text-right border-t md:border-t-0 border-white/5 pt-4 md:pt-0 font-mono text-[10px] text-indigo-400 font-semibold group-hover:text-indigo-350 transition-colors flex items-center gap-1.5 self-start md:self-center">
                    <span>View Full Ledger & Contact Me</span>
                    <span>&rarr;</span>
                  </div>
                </div>
              </motion.div>
            );
          }

          return (
            <motion.div
              key={cert.id}
              className="premium-card p-6 flex flex-col justify-between text-left relative group overflow-hidden"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
            >
              <div>
                {/* Certification ID and Badge */}
                <div className="flex justify-between items-center text-[10px] font-mono border-b border-white/5 pb-3.5 mb-4">
                  <span className="text-slate-500 font-semibold">{cert.id}</span>
                  <span className={`px-2.5 py-0.5 rounded-full border text-[9px] font-medium tracking-wide ${cert.badgeColor}`}>
                    {cert.level}
                  </span>
                </div>

                {/* Info */}
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-base text-slate-100 group-hover:text-white transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <div className="text-xs text-slate-400 font-sans font-normal pt-1">
                    Issued by <span className="text-indigo-400 font-medium">{cert.issuer}</span>
                  </div>
                </div>
              </div>

              {/* Verification Signature at bottom */}
              <div className="mt-6 pt-3.5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>{cert.date}</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>VERIFIED</span>
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>

    </section>
  );
};

export default CertsClearance;
