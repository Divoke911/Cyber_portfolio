import React from 'react';

const CyberBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-bg-dark">
      {/* Dynamic light spotlight gradient */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'radial-gradient(circle at 50% -20%, rgba(var(--accent-glow-rgb), 0.08), transparent 60%)'
        }}
      />
      
      {/* Subtle bottom ambient gradient */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'radial-gradient(circle at 50% 120%, rgba(var(--accent-glow-rgb), 0.05), transparent 50%)'
        }}
      />
      
      {/* Dotted grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-60" />
      
      {/* Gentle vignette */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'radial-gradient(circle at center, transparent 50%, var(--bg-dark) 100%)'
        }}
      />
    </div>
  );
};

export default CyberBackground;

