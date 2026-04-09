import React from 'react';

export const Footer = () => {
  return (
    <footer className="px-6 py-12 border-t-2 border-ink bg-bg">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <div className="font-hindi text-xl font-bold tracking-tighter whitespace-nowrap">
            © {new Date().getFullYear()} आदित्य नामदेव
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-mono opacity-40 tracking-widest">311 / aa</span>
            <div className="w-px h-4 bg-ink/20 hidden md:block" />
            <p className="text-[10px] font-mono text-ink/40 tracking-[0.1em] max-w-[250px] leading-relaxed">
              this site is still in development. some features might not work as intended while the experience is being refined.
            </p>
          </div>
        </div>
        
        <div className="flex gap-10 font-heading text-[10px] font-bold uppercase tracking-[0.3em]">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-secondary transition-colors">Behance</a>
          <a href="#" className="hover:text-secondary transition-colors">Dribbble</a>
        </div>
      </div>
    </footer>
  );
};
