import React from 'react';
import { PROJECTS } from '../constants';
import { ProjectCard } from '../components/ProjectCard';
import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';

export const Home = () => {
  const [showGrid, setShowGrid] = React.useState(false);

  return (
    <PageTransition>
      <main className="relative bg-bg min-h-screen">
        {/* Grid Overlay */}
        <div 
          className={`fixed inset-0 pointer-events-none z-40 transition-opacity duration-500 ${showGrid ? 'opacity-30' : 'opacity-0'}`}
          style={{
            backgroundImage: 'radial-gradient(circle, #000 0.6px, transparent 0.6px)',
            backgroundSize: '8px 8px'
          }}
        />

        {/* Hero Section */}
        <section className="px-6 py-20 border-b-2 border-ink bg-bg relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-5xl"
          >
            <div className="flex justify-between items-start mb-8">
              <h1 className="text-[12vw] leading-[0.85]">
                Visual <span className="text-secondary">Designer</span> & <br />
                Creative Strategist
              </h1>
              <button 
                onClick={() => setShowGrid(!showGrid)}
                className="brutal-border p-2 text-xs font-bold uppercase hover:bg-secondary hover:text-white transition-colors hidden md:block"
              >
                {showGrid ? 'Hide Grid' : 'Show Grid'}
              </button>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
              <div className="space-y-2">
                <p className="font-heading text-xl max-w-xl leading-relaxed">
                  Crafting bold visual languages for brands that aren't afraid to stand out. 
                  Based in India, working globally.
                </p>
                <p className="font-heading text-sm opacity-50 italic">
                  "Still figuring things out, but getting better at it."
                </p>
              </div>
              <div className="flex flex-col items-end gap-4">
                <div className="brutal-border p-4 brutal-shadow bg-accent text-ink font-heading font-bold text-xl">
                  EST. 2020
                </div>
                <span className="text-xl font-mono opacity-40 tracking-tighter">311 = आ</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Projects Grid */}
        <section className="px-6 py-20 bg-bg">
          <div className="flex justify-between items-end mb-12 border-b-2 border-ink pb-4">
            <h2 className="text-4xl">Selected Works</h2>
            <p className="font-heading text-sm font-bold uppercase tracking-widest opacity-50">
              ({PROJECTS.length}) Projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>
        
        {/* Marquee */}
        <div className="border-y-2 border-ink py-4 bg-accent overflow-hidden whitespace-nowrap">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="inline-block"
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="font-heading font-bold text-4xl text-ink mx-8 uppercase">
                Available for Freelance • Brand Identity • UI/UX Design • Creative Strategy • Motion Graphics • Visual Storytelling • 
              </span>
            ))}
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
};
