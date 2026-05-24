import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, CheckCircle2, Terminal } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

const EncryptedContact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [sendStep, setSendStep] = useState(0);

  const sendSteps = [
    "Establishing secure network connection...",
    "Encrypting payload data blocks...",
    "Transmitting secure message package...",
    "Message delivered successfully."
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);
    setSendStep(0);

    // 1. Kick off progressive terminal simulation logs (steps 0, 1, 2)
    const logTimer1 = setTimeout(() => setSendStep(1), 400);
    const logTimer2 = setTimeout(() => setSendStep(2), 800);

    // 2. Perform the actual Web3Forms API submission in parallel
    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: "Cybersec Portfolio Contact Form"
        })
      });

      const data = await response.json();

      if (data.success) {
        // Clear background timers
        clearTimeout(logTimer1);
        clearTimeout(logTimer2);

        // Transition to final successful delivery step
        setSendStep(3); // "Message delivered successfully."

        setTimeout(() => {
          setIsSending(false);
          setIsSent(true);
          setFormData({ name: '', email: '', message: '' });
        }, 1000);
      } else {
        throw new Error(data.message || "Web3Forms API rejected the message package.");
      }
    } catch (error) {
      console.error("Secure transmission failure:", error);
      alert("Secure message transmission failed. Please contact me directly at sahil.kawale911@gmail.com!");
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-10 sm:py-12 scroll-mt-28 px-4 sm:px-6 max-w-7xl mx-auto space-y-12 relative">
      {/* Boundary lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

      {/* Section Header */}
      <div className="text-left space-y-1.5">
        <div className="text-indigo-400 text-xs font-mono font-semibold tracking-wider uppercase flex items-center gap-1.5">
          <Mail className="w-4 h-4 text-indigo-400" />
          Get In Touch
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          Let's Work Together
        </h2>
        <p className="text-sm text-slate-400 max-w-xl font-normal leading-relaxed">
          Have an opening, a project idea, or just want to connect? Drop a message below and I will get back to you shortly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column (ColSpan 5): Social Terminal Directory */}
        <div className="lg:col-span-5 space-y-6">
          <div className="premium-card p-6 text-left space-y-6 h-full flex flex-col justify-between relative overflow-hidden">
            
            <div className="space-y-4">
              <h3 className="font-display font-bold text-lg text-slate-100">
                Direct Channels
              </h3>
              <p className="text-slate-400 font-sans text-sm font-normal leading-relaxed">
                Connect directly through secure professional networks. I am actively looking for software engineering internships and entry-level cybersecurity roles.
              </p>
            </div>

            {/* Social links list */}
            <div className="space-y-3 font-sans text-xs">
              
              {/* EMAIL */}
              <a 
                href="mailto:sahil.kawale911@gmail.com"
                className="flex items-center space-x-4 p-3.5 rounded-xl border border-white/5 bg-white/[0.01] hover:border-indigo-500/20 hover:bg-indigo-500/[0.02] transition-all duration-300 group"
              >
                <div className="p-2.5 bg-white/[0.02] rounded-lg border border-white/5 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <Mail className="w-4 h-4 text-indigo-400 group-hover:text-white" />
                </div>
                <div className="space-y-0.5 text-left">
                  <div className="text-[9px] text-slate-500 uppercase font-mono font-bold tracking-wider">Email Address</div>
                  <div className="text-white text-xs sm:text-sm font-semibold tracking-wide">sahil.kawale911@gmail.com</div>
                </div>
              </a>

              {/* LINKEDIN */}
              <a 
                href="https://linkedin.com/in/sahil-kawale" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center space-x-4 p-3.5 rounded-xl border border-white/5 bg-white/[0.01] hover:border-indigo-500/20 hover:bg-indigo-500/[0.02] transition-all duration-300 group"
              >
                <div className="p-2.5 bg-white/[0.02] rounded-lg border border-white/5 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <Linkedin className="w-4 h-4 text-indigo-400 group-hover:text-white" />
                </div>
                <div className="space-y-0.5 text-left">
                  <div className="text-[9px] text-slate-500 uppercase font-mono font-bold tracking-wider">LinkedIn</div>
                  <div className="text-white text-xs sm:text-sm font-semibold tracking-wide">linkedin.com/in/sahil-kawale</div>
                </div>
              </a>

              {/* GITHUB */}
              <a 
                href="https://github.com/Divoke911" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center space-x-4 p-3.5 rounded-xl border border-white/5 bg-white/[0.01] hover:border-indigo-500/20 hover:bg-indigo-500/[0.02] transition-all duration-300 group"
              >
                <div className="p-2.5 bg-white/[0.02] rounded-lg border border-white/5 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <Github className="w-4 h-4 text-indigo-400 group-hover:text-white" />
                </div>
                <div className="space-y-0.5 text-left">
                  <div className="text-[9px] text-slate-500 uppercase font-mono font-bold tracking-wider">GitHub</div>
                  <div className="text-white text-xs sm:text-sm font-semibold tracking-wide">github.com/Divoke911</div>
                </div>
              </a>

            </div>

            {/* Bottom active diagnostics details */}
            <div className="text-[9px] text-slate-500 font-mono flex items-center justify-between border-t border-white/5 pt-4">
              <span>Status: Available</span>
              <span className="text-emerald-500 font-medium">Responsive Rate: High</span>
            </div>

          </div>
        </div>

        {/* Right Column (ColSpan 7): Secure messaging panel */}
        <div className="lg:col-span-7">
          <div className="premium-card p-6 text-left h-full flex flex-col justify-between relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              
              {/* STATE 1: REGULAR FORM */}
              {!isSending && !isSent && (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="flex items-center space-x-2 text-indigo-400 border-b border-white/5 pb-3.5">
                    <Send className="w-4 h-4" />
                    <span className="font-display font-bold text-sm tracking-tight text-slate-200">Send a Message</span>
                  </div>

                  <div className="space-y-1.5 font-mono text-xs">
                    <label className="text-slate-400 font-semibold block">Name / Organization</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your Name"
                      className="w-full bg-white/[0.01] border border-white/5 focus:border-indigo-500/40 rounded-lg p-3 text-slate-200 font-sans placeholder-slate-600 outline-none transition-all duration-200"
                    />
                  </div>

                  <div className="space-y-1.5 font-mono text-xs">
                    <label className="text-slate-400 font-semibold block">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="name@organization.com"
                      className="w-full bg-white/[0.01] border border-white/5 focus:border-indigo-500/40 rounded-lg p-3 text-slate-200 font-sans placeholder-slate-600 outline-none transition-all duration-200"
                    />
                  </div>

                  <div className="space-y-1.5 font-mono text-xs">
                    <label className="text-slate-400 font-semibold block">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      placeholder="Hi Sahil, I would love to connect about a backend development role..."
                      className="w-full bg-white/[0.01] border border-white/5 focus:border-indigo-500/40 rounded-lg p-3 text-slate-200 font-sans placeholder-slate-600 outline-none transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm tracking-wide rounded-lg transition-all duration-200 shadow-md shadow-indigo-600/10 hover:shadow-indigo-500/20 active:scale-95 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>

                </motion.form>
              )}

              {/* STATE 2: TRANSMITTING PACKETS */}
              {isSending && (
                <motion.div 
                  key="sending"
                  className="space-y-6 w-full py-12 font-mono text-left"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="flex items-center space-x-2 text-indigo-400 border-b border-white/5 pb-3.5">
                    <Terminal className="w-4 h-4 text-indigo-400" />
                    <span className="font-semibold tracking-wide text-xs text-slate-200">Transmission Log</span>
                  </div>

                  {/* Packet transmission history logs */}
                  <div className="h-36 bg-black/30 border border-white/5 p-4 rounded-xl text-xs text-indigo-400/80 space-y-2 overflow-hidden font-mono">
                    {sendSteps.slice(0, sendStep + 1).map((step, idx) => (
                      <div key={idx} className="flex">
                        <span className="text-emerald-500 mr-2">&gt;&gt;</span>
                        <span>{step}</span>
                      </div>
                    ))}
                    {sendStep < sendSteps.length - 1 && (
                      <div className="flex items-center text-amber-500 animate-pulse">
                        <span className="mr-2">&gt;&gt;</span>
                        <span>Encrypting transmission stream...</span>
                      </div>
                    )}
                  </div>

                  {/* Progressive indicator */}
                  <div className="w-full bg-white/5 h-1 rounded overflow-hidden">
                    <div 
                      className="bg-indigo-500 h-full transition-all duration-300"
                      style={{ width: `${(sendStep + 1) * 25}%` }}
                    />
                  </div>

                </motion.div>
              )}

              {/* STATE 3: TRANSMISSION SUCCESSFUL */}
              {isSent && (
                <motion.div 
                  key="sent"
                  className="space-y-6 w-full py-12 flex flex-col justify-center items-center text-center font-sans"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="w-14 h-14 rounded-full border border-emerald-500/20 bg-emerald-500/5 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-emerald-400" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-lg text-white tracking-tight">
                      Message Sent Successfully
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm font-normal max-w-sm mx-auto leading-relaxed">
                      Thank you! Your message has been sent to Sahil. He will get in touch with you shortly.
                    </p>
                  </div>

                  <button
                    onClick={() => setIsSent(false)}
                    className="px-5 py-2 bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 text-slate-300 hover:text-white font-semibold text-xs tracking-wide rounded-lg transition-all duration-200"
                  >
                    Send Another Message
                  </button>

                </motion.div>
              )}

            </AnimatePresence>

          </div>
        </div>

      </div>

    </section>
  );
};

export default EncryptedContact;
