import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { Plus } from 'lucide-react';

const PROJECT_FALLBACK = 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200';

const PROJECTS = [
  {
    title: 'The Palo Alto Residence',
    category: 'Luxury Residential',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Nexus Office Hub',
    category: 'Commercial Build',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Sunnyvale Modern Loft',
    category: 'Full Renovation',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
  },
];

const ProjectCard: React.FC<{
  title: string;
  category: string;
  image: string;
  index: number;
}> = ({ title, category, image, index }) => {
  const [imgError, setImgError] = useState(false);
  const src = imgError ? PROJECT_FALLBACK : image;

  return (
    <div
      className="reveal group flex flex-col space-y-5 md:space-y-6"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative aspect-[4/5] min-h-[280px] overflow-hidden rounded-sm bg-brand-gray/20">
        <img
          src={src}
          alt=""
          loading="lazy"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/10 transition-colors duration-500" aria-hidden />
        <div className="absolute top-6 right-6 md:top-8 md:right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
          <div className="bg-white p-3 rounded-full text-brand-black shadow-xl">
            <Plus className="w-5 h-5" aria-hidden />
          </div>
        </div>
      </div>
      <div className="space-y-2 border-l-2 border-brand-red/30 pl-5 md:pl-6 group-hover:border-brand-red transition-colors duration-500">
        <span className="text-brand-red text-[10px] font-bold uppercase tracking-[0.35em]">
          {category}
        </span>
        <h3 className="text-xl md:text-2xl font-display font-medium text-white uppercase tracking-tight group-hover:tracking-wider transition-all">
          {title}
        </h3>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const revealRef = useReveal();

  return (
    <section id="projects" className="py-20 md:py-28 lg:py-32 bg-brand-black overflow-hidden" ref={revealRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8 mb-16 md:mb-24 reveal">
          <div>
            <span className="text-brand-red font-display text-[10px] md:text-xs uppercase tracking-[0.5em] mb-3 md:mb-4 block">
              The Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white uppercase tracking-tighter leading-none">
              Our <br /> <span className="text-brand-red">Work</span>
            </h2>
          </div>
          <p className="text-white/85 max-w-sm text-sm md:text-base font-light leading-relaxed md:self-center">
            Our projects show what happens when solid workmanship meets clear planning—residential and commercial builds delivered on time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              image={project.image}
              index={index}
            />
          ))}
        </div>

        <div className="mt-16 md:mt-24 text-center reveal">
          <button
            type="button"
            className="text-white border-2 border-white/20 px-8 md:px-12 py-4 md:py-5 uppercase text-[10px] tracking-[0.35em] md:tracking-[0.4em] font-bold hover:bg-white hover:text-brand-black transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black rounded-sm"
          >
            Load Complete Archive
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
