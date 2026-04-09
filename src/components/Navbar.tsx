import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

export const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="sticky top-0 z-50 bg-bg border-b-2 border-ink px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Link to="/" className="font-hindi text-2xl font-medium tracking-tighter hover:text-secondary transition-colors">
          आदित्य नामदेव
        </Link>
        <span className="text-2xl font-mono opacity-40 tracking-widest hidden sm:block">311</span>
      </div>
      
      <div className="flex gap-8 font-heading font-bold uppercase text-sm tracking-widest">
        <Link 
          to="/" 
          className={`link-underline ${location.pathname === '/' ? 'text-secondary after:w-full' : ''}`}
        >
          Work
        </Link>
        <Link 
          to="/blog" 
          className={`link-underline ${location.pathname.startsWith('/blog') ? 'text-secondary after:w-full' : ''}`}
        >
          Blog
        </Link>
        <Link 
          to="/about" 
          className={`link-underline ${location.pathname === '/about' ? 'text-secondary after:w-full' : ''}`}
        >
          About
        </Link>
      </div>
    </nav>
  );
};
