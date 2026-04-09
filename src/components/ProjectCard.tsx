import React from 'react';
import { Project } from '../types';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.1,
        y: { type: 'spring', stiffness: 300, damping: 20 }
      }}
      className="group relative"
    >
      {/* Hindi Accent */}
      <div className="absolute -top-6 -left-6 hindi-accent text-6xl z-0">
        {project.hindiAccent}
      </div>

      <Link to={`/project/${project.id}`} className="block relative z-10">
        <div className="relative overflow-hidden brutal-border bg-ink mb-4 aspect-[16/10]">
          <motion.img
            src={project.image}
            alt={project.title}
            whileHover={{ scale: 1.04, filter: 'brightness(1.1) contrast(1.1)' }}
            className="w-full h-full object-cover grayscale opacity-90 transition-all duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </div>
        
        <div className="flex justify-between items-start">
          <div>
            <p className="font-heading text-xs font-bold uppercase tracking-widest text-secondary mb-1">
              {project.category} — {project.year}
            </p>
            <h3 className="text-2xl group-hover:text-secondary transition-colors duration-300">
              {project.title}
            </h3>
          </div>
          <div className="brutal-border p-2 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
