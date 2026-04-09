import React from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Instagram, Linkedin } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

export const About = () => {
  const categories = [
    {
      title: "Branding",
      items: ["Visual Identity", "Logo Design", "Brand Systems", "Typography"]
    },
    {
      title: "Digital",
      items: ["UI / Visual Design", "Social / Campaign Visuals", "Information Design", "Posters"]
    },
    {
      title: "Image / Frame",
      items: ["Photography", "Photo Editing", "Visual Composition"]
    },
    {
      title: "Motion",
      items: ["2D Animation", "Video Editing"]
    },
    {
      title: "AI",
      items: ["AI Visual Experiments", "Generative Design", "AI-assisted Workflows", "Creative Exploration"]
    },
    {
      title: "Writing",
      items: ["Blog", "Observations", "Notes"]
    },
    {
      title: "Beyond Work",
      items: ["Cooking & Food", "Sonic Exploration", "Nature & Travel", "Animal Kinship", "Observational Notes", "Everyday Micro-moments"]
    }
  ];

  return (
    <PageTransition>
      <main className="pb-20 bg-bg min-h-screen">
        {/* Intro */}
        <section className="px-6 py-20 border-b-2 border-ink bg-bg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="mb-8 font-hindi text-2xl text-secondary">
              <span>नमस्कार, मैं Aaditya!</span>
            </div>
            <h1 className="text-[10vw] leading-[0.85] mb-12">
              Design is <br />
              <span className="text-secondary italic">Communication</span> <br />
              not Decoration.
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <p className="font-heading text-xl leading-relaxed">
                  A visual designer based in India. I work on 
                  identities and digital experiences that are as functional as they are striking. 
                  My work is rooted in the belief that design should be a tool for clarity, 
                  not just an aesthetic layer.
                </p>
                <p className="font-heading text-sm opacity-50 italic">
                  "Some things work, some don’t — that’s part of it."
                </p>
              </div>
              <div className="space-y-4">
                <p className="font-heading text-xl leading-relaxed">
                  I've worked on projects with startups and brands to keep things simple and honest 
                  while working through it. I'm currently exploring the intersection of neo-brutalism 
                  and modern accessibility, still learning as I go.
                </p>
                <p className="font-heading text-sm opacity-50 italic">
                  "trying to keep things simple and honest"
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Map of Person (Categories) */}
        <section className="px-6 py-20 border-b-2 border-ink bg-ink text-white/50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
            {categories.map((cat, idx) => (
              <div key={idx} className="group">
                <h3 className="text-2xl text-white mb-6 border-b border-white/20 pb-2 group-hover:text-accent group-hover:border-accent transition-all duration-300">
                  {cat.title}
                </h3>
                <ul className="space-y-3">
                  {cat.items.map((item, i) => (
                    <li key={i} className="font-heading text-sm uppercase tracking-widest hover:text-secondary transition-colors duration-200 cursor-default">
                      {item}
                    </li>
                  ))}
                </ul>
                {cat.title === "Beyond Work" && (
                  <p className="mt-8 font-mono text-sm opacity-60 italic text-accent">
                    "not everything here is meant to be useful."
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="px-6 py-20 bg-bg">
          <h2 className="text-5xl mb-12">Let's build something bold.</h2>
          <div className="flex flex-wrap gap-8">
            <a href="mailto:aadityanamdevnn@gmail.com" className="flex items-center gap-2 font-heading font-bold uppercase link-underline">
              <Mail size={20} /> Email
            </a>
            <a href="#" className="flex items-center gap-2 font-heading font-bold uppercase link-underline">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="#" className="flex items-center gap-2 font-heading font-bold uppercase link-underline">
              <Instagram size={20} /> Instagram
            </a>
            <a href="#" className="flex items-center gap-2 font-heading font-bold uppercase link-underline">
              <Github size={20} /> GitHub
            </a>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};
