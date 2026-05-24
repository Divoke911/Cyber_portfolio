import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// Import components
import CyberBackground from './components/CyberBackground';
import HUDHeader from './components/HUDHeader';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import AboutIntel from './components/AboutIntel';
import SkillsRadar from './components/SkillsRadar';
import ClassifiedProjects from './components/ClassifiedProjects';
import CertsClearance from './components/CertsClearance';
import SecureResume from './components/SecureResume';
import EncryptedContact from './components/EncryptedContact';
import Footer from './components/Footer';

function App() {
  // Performant mouse tracking for subtle light spotlight cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-bg-dark text-slate-300 font-sans selection:bg-indigo-500 selection:text-white antialiased overflow-x-hidden">
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col min-h-screen"
      >
        {/* Global Dotted Background & Spotlight */}
        <CyberBackground />

        {/* Global Mouse Tracking Spotlight Overlay */}
        <div 
          className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden sm:block"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(var(--accent-glow-rgb), 0.035), transparent 50%)`
          }}
        />

        {/* Sticky Professional Capsule Navigation */}
        <HUDHeader />

        {/* Main Content Layout */}
        <main className="flex-1 w-full relative z-20">
          {/* SECTION 1: Hero */}
          <Hero />

          {/* SECTION 2: Key Capabilities */}
          <Dashboard />

          {/* SECTION 3: About Profile Dossier */}
          <AboutIntel />

          {/* SECTION 4: Technical Arsenal */}
          <SkillsRadar />

          {/* SECTION 5: Core Projects Case Studies */}
          <ClassifiedProjects />

          {/* SECTION 6: Accreditations */}
          <CertsClearance />

          {/* SECTION 7: Resume Download */}
          <SecureResume />

          {/* SECTION 8: Clean Contact Form */}
          <EncryptedContact />
        </main>

        {/* Elegant Footer */}
        <Footer />
      </motion.div>

    </div>
  );
}

export default App;

