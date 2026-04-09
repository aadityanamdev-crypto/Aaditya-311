import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { motion } from 'motion/react';
import { ArrowLeft, Tag } from 'lucide-react';

import { PageTransition } from '../components/PageTransition';

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <div className="px-6 py-20 text-center">
        <h1 className="text-4xl mb-4">Project Not Found</h1>
        <Link to="/" className="text-accent underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <PageTransition>
      <main className="pb-20 bg-bg min-h-screen">
        {/* Header */}
        <section className="px-6 py-12 border-b-2 border-ink flex justify-between items-center bg-bg">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 font-heading font-bold uppercase text-sm hover:text-secondary transition-colors"
          >
            <ArrowLeft size={16} /> Back
          </button>
          <div className="font-heading text-sm font-bold uppercase tracking-widest">
            {project.year}
          </div>
        </section>

        {/* Hero */}
        <section className="px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end border-b-2 border-ink">
          <div>
            <p className="font-heading text-secondary font-bold uppercase tracking-widest mb-4">
              {project.category}
            </p>
            <div className="relative">
              <div className="absolute -top-12 -right-4 md:-right-12 hindi-accent text-9xl z-0">
                {project.hindiAccent}
              </div>
              <h1 className="text-7xl lg:text-9xl mb-8 leading-none relative z-10">{project.title}</h1>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="brutal-border px-3 py-1 text-xs font-bold uppercase bg-bg">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p className="font-heading text-xl leading-relaxed opacity-80">
            {project.description}
          </p>
        </section>

        {/* Main Image */}
        <section className="px-6 py-12">
          <div className="brutal-border brutal-shadow overflow-hidden aspect-video bg-ink">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* Content */}
        <section className="px-6 py-12 max-w-4xl mx-auto">
          <div className="space-y-12">
            {project.content.map((paragraph, i) => (
              <p key={i} className="font-heading text-2xl leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Next Project CTA */}
        <section className="px-6 py-20 border-t-2 border-ink mt-20 text-center bg-bg">
          <p className="font-heading font-bold uppercase tracking-widest opacity-50 mb-4">Next Project</p>
          <Link 
            to={`/project/${PROJECTS[(PROJECTS.indexOf(project) + 1) % PROJECTS.length].id}`}
            className="text-5xl md:text-7xl hover:text-accent transition-colors block leading-none"
          >
            {PROJECTS[(PROJECTS.indexOf(project) + 1) % PROJECTS.length].title}
          </Link>
        </section>
      </main>
    </PageTransition>
  );
};
