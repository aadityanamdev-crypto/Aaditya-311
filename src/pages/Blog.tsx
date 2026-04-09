import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { X } from 'lucide-react';

export const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTag = searchParams.get('tag');

  const filteredPosts = activeTag 
    ? BLOG_POSTS.filter(post => post.tags.includes(activeTag))
    : BLOG_POSTS;

  const handleTagClick = (e: React.MouseEvent, tag: string) => {
    e.preventDefault();
    e.stopPropagation();
    setSearchParams({ tag });
  };

  const clearFilter = () => {
    setSearchParams({});
  };

  return (
    <PageTransition>
      <main className="px-6 py-20 bg-bg min-h-screen">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b-2 border-ink pb-4 gap-4">
          <div>
            <h1 className="text-6xl mb-2">Journal</h1>
            <p className="font-heading text-sm font-bold uppercase tracking-widest opacity-50">
              Insights & Musings
            </p>
          </div>
          
          {activeTag && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 bg-ink text-white px-4 py-2 brutal-border"
            >
              <span className="font-mono text-xs uppercase tracking-widest">Tag: #{activeTag}</span>
              <button onClick={clearFilter} className="hover:text-accent transition-colors">
                <X size={16} />
              </button>
            </motion.div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                className="group relative"
              >
                {/* Hindi Accent */}
                <div className="absolute -top-6 -right-4 hindi-accent text-5xl z-0">
                  {post.hindiAccent}
                </div>

                <Link to={`/blog/${post.id}`} className="block relative z-10">
                  <div className="brutal-border overflow-hidden mb-6 aspect-[16/9] bg-ink">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 opacity-80 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-heading text-xs font-bold uppercase tracking-widest text-secondary">
                      {post.date}
                    </p>
                    <p className="font-heading text-[10px] font-bold uppercase tracking-widest opacity-40">
                      {post.readTime}
                    </p>
                  </div>
                  <h2 className="text-3xl mb-4 group-hover:text-secondary transition-colors">
                    {post.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map(tag => (
                      <button 
                        key={tag} 
                        onClick={(e) => handleTagClick(e, tag)}
                        className="text-[10px] font-mono border border-ink/20 px-2 py-0.5 opacity-60 hover:opacity-100 hover:bg-ink hover:text-white transition-all"
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                  <p className="font-heading text-lg opacity-70 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 inline-block font-heading font-bold uppercase text-sm link-underline">
                    Read Article
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-2xl font-heading opacity-50">No posts found with this tag.</p>
            <button onClick={clearFilter} className="mt-4 text-secondary underline font-heading uppercase tracking-widest text-sm">
              Show all posts
            </button>
          </div>
        )}
      </main>
    </PageTransition>
  );
};
