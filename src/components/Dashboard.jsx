import React from 'react';
import { ShieldCheck, Cpu, Layers, Lock, CheckCircle2 } from 'lucide-react';

const Dashboard = () => {
  return (
    <section id="dashboard" className="py-10 sm:py-12 scroll-mt-28 px-4 sm:px-6 max-w-7xl mx-auto space-y-12 relative">
      
      {/* Elegant Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-5">
        <div className="text-left space-y-1.5">
          <div className="text-indigo-400 text-xs font-semibold tracking-wider uppercase">
            Security Engineering Focus
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Core Cybersecurity Expertise
          </h2>
        </div>
        <div className="text-left md:text-right mt-2 md:mt-0 font-mono text-xs text-slate-500">
          SECURE BY DEFAULT // DEFENSIVE ARCHITECTURE
        </div>
      </div>

      {/* Clean Metric Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "VULNERABILITY AUDITING", val: "OWASP Top 10", desc: "Analyzing web app threat vectors" },
          { label: "APPLICATION SECURITY", val: "Secure Code Review", desc: "White-box source security analysis" },
          { label: "NETWORK DEFENSE", val: "Packet Scanning", desc: "Wireshark packet & port audits" },
          { label: "OFFENSIVE SIMULATIONS", val: "Penetration Testing", desc: "Evaluating ingress authorization routes" },
        ].map((stat, idx) => (
          <div key={idx} className="premium-card p-5 text-left bg-card-dark/40 border border-white/5 rounded-xl">
            <div className="text-[10px] text-slate-500 font-mono tracking-wider font-bold uppercase">{stat.label}</div>
            <div className="font-display text-base sm:text-lg font-bold mt-1.5 text-slate-100">
              {stat.val}
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">{stat.desc}</div>
          </div>
        ))}
      </div>

      {/* Deep-Dive Security Architecture Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Card 1: AppSec & Code Auditing */}
        <div className="premium-card rounded-xl border border-white/5 overflow-hidden flex flex-col bg-card-dark/40">
          <div className="bg-white/[0.02] border-b border-white/5 px-4 py-3 flex items-center justify-between text-xs font-semibold text-indigo-400">
            <span className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              AppSec & Code Auditing
            </span>
            <span className="text-[9px] font-mono text-slate-500">SECTOR_01 // WEB_APP</span>
          </div>
          
          <div className="p-5 flex-1 space-y-4 text-left">
            <p className="text-slate-400 text-xs leading-relaxed">
              Analyzing secure backend systems, auditing method-level configurations, and ensuring rigid validation to block request manipulation.
            </p>
            
            <div className="space-y-2.5 font-mono text-[11px] sm:text-xs">
              {[
                { title: "CorsFilter Audits", status: "Secure Origins", desc: "Verifying explicit domain origin whitelist guards" },
                { title: "JwtAuthFilter Inspections", status: "Bearer Parser", desc: "Checking request context token translation loops" },
                { title: "Stateless Enforcement", status: "Session Muted", desc: "Ensuring zero credential states are persisted" },
                { title: "Exception Translators", status: "Safe JSON Maps", desc: "Preventing stacktrace leakage in API responses" },
                { title: "RBAC Method Guards", status: "Access Control", desc: "Validating annotation-level privilege checks" },
              ].map((filter, idx) => (
                <div key={idx} className="p-2.5 border border-white/5 rounded-lg bg-white/[0.01]">
                  <div className="flex justify-between font-semibold">
                    <span className="text-slate-200">{filter.title}</span>
                    <span className="text-indigo-400">{filter.status}</span>
                  </div>
                  <div className="text-slate-500 text-[10px] mt-0.5">{filter.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 2: Cryptographic Identity Validation */}
        <div className="premium-card rounded-xl border border-white/5 overflow-hidden flex flex-col bg-card-dark/40">
          <div className="bg-white/[0.02] border-b border-white/5 px-4 py-3 flex items-center justify-between text-xs font-semibold text-indigo-400">
            <span className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-indigo-400" />
              Identity & Cryptographic Operations
            </span>
            <span className="text-[9px] font-mono text-slate-500">SECTOR_02 // CRYPTO</span>
          </div>
          
          <div className="p-5 flex-1 space-y-4 text-left">
            <p className="text-slate-400 text-xs leading-relaxed">
              Evaluating token integrity and stateless validation models to prevent session theft, spoofing, and privilege escalation vulnerabilities.
            </p>

            <div className="space-y-3 font-mono text-[11px] sm:text-xs">
              <div className="p-3 border border-white/5 rounded-lg bg-white/[0.01] space-y-1.5">
                <div className="text-slate-200 font-semibold">HMAC-SHA256 TOKEN AUDITING</div>
                <div className="text-[10px] text-slate-400 leading-relaxed font-sans">
                  Analyzing token signatures to confirm tamper protection, validating cryptographic headers, and checking gateway routing integrity.
                </div>
              </div>

              <div className="p-3 border border-white/5 rounded-lg bg-white/[0.01] space-y-2">
                <div className="text-slate-200 font-semibold">CLAIMS VERIFICATION AUDITS</div>
                <ul className="text-[10px] text-slate-400 space-y-1.5 font-sans">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span><strong>iss (Issuer) checks</strong>: Blocking unauthorized issuer routing.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span><strong>exp (Expiration) limits</strong>: Auditing token life window configurations.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span><strong>roles (Privileges)</strong>: Hardening user hierarchy assignments.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Network & Ingress Security */}
        <div className="premium-card rounded-xl border border-white/5 overflow-hidden flex flex-col bg-card-dark/40">
          <div className="bg-white/[0.02] border-b border-white/5 px-4 py-3 flex items-center justify-between text-xs font-semibold text-indigo-400">
            <span className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-indigo-400" />
              Ingress & Infrastructure Security
            </span>
            <span className="text-[9px] font-mono text-slate-500">SECTOR_03 // INGRESS</span>
          </div>
          
          <div className="p-5 flex-1 space-y-4 text-left">
            <p className="text-slate-400 text-xs leading-relaxed">
              Hardening deployment points, identifying network threat vectors, and testing container runtime security boundaries against unauthorized ingress.
            </p>

            <div className="space-y-3 font-mono text-[11px] sm:text-xs">
              <div className="p-3 border border-white/5 rounded-lg bg-white/[0.01] space-y-1.5">
                <div className="text-slate-200 font-semibold">GATEWAY PROTECTION AUDITS</div>
                <div className="text-[10px] text-slate-400 leading-relaxed font-sans">
                  Evaluating rate-limiting mechanisms using Redis sliding-window keys, shielding sensitive authorization and registration API nodes from brute-force tactics.
                </div>
              </div>

              <div className="p-3 border border-white/5 rounded-lg bg-white/[0.01] space-y-2">
                <div className="text-slate-200 font-semibold">CONTAINER RUNTIME HARDENING</div>
                <ul className="text-[10px] text-slate-400 space-y-1.5 font-sans">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>Auditing Docker bases for vulnerable packages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>Enforcing non-root user execution restrictions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>Analyzing read-only container mount security</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Dashboard;
