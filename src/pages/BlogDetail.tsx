import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

export const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <div className="px-6 py-20 text-center">
        <h1 className="text-4xl mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-accent underline">Back to Journal</Link>
      </div>
    );
  }

  return (
    <PageTransition>
      <main className="pb-20 bg-bg min-h-screen">
        <section className="px-6 py-12 border-b-2 border-ink flex justify-between items-center bg-bg">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 font-heading font-bold uppercase text-sm hover:text-secondary transition-colors"
          >
            <ArrowLeft size={16} /> Back
          </button>
          <div className="flex items-center gap-4 font-heading text-sm font-bold uppercase tracking-widest">
            <span className="opacity-40">{post.readTime}</span>
            <div className="w-px h-4 bg-ink/20" />
            <span>{post.date}</span>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map(tag => (
              <Link 
                key={tag} 
                to={`/blog?tag=${tag}`}
                className="text-xs font-mono border border-ink/20 px-3 py-1 bg-ink text-white hover:bg-secondary transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
          <div className="relative">
            <div className="absolute -top-12 -right-4 hindi-accent text-8xl z-0">
              {post.hindiAccent}
            </div>
            <h1 className="text-5xl md:text-7xl mb-12 leading-tight relative z-10">
              {post.title}
            </h1>
          </div>
          
          <div className="brutal-border mb-16 aspect-video overflow-hidden bg-ink">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-8">
            {post.content.map((paragraph, i) => (
              <p key={i} className="font-heading text-2xl leading-relaxed opacity-90">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </main>
    </PageTransition>
  );
};
