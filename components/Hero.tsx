import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2400';
const HERO_FALLBACK =
  'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=2400';

const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  return (
    <section className="relative min-h-screen min-h-[600px] md:min-h-[700px] lg:min-h-[850px] flex items-center overflow-hidden bg-[#050505]">
      {/* Editorial Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={imgError ? HERO_FALLBACK : HERO_IMAGE}
          alt=""
          fetchPriority="high"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover object-center grayscale brightness-[0.3] scale-105 lg:scale-110"
        />
        <div className="absolute inset-0 opacity-[0.03] arch-grid pointer-events-none" aria-hidden />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row lg:items-end justify-between gap-12 md:gap-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[11rem] font-display font-extralight text-white mb-6 md:mb-10 leading-[0.85] uppercase tracking-tighter">
            Build <br />
            <span className="text-brand-red font-bold">Beyond</span>
          </h1>

          <p className="text-brand-silver text-base md:text-lg lg:text-xl mb-10 md:mb-14 max-w-md leading-relaxed font-light tracking-wide opacity-95">
            IronPeak delivers full-service construction for residential and small commercial projects. Dependable timelines, clear communication, solid workmanship—no surprises.
          </p>

          <div className="flex items-center gap-8 md:gap-12">
            <a
              href="#projects"
              className="group flex items-center gap-4 md:gap-6 text-white uppercase tracking-[0.35em] md:tracking-[0.4em] text-[10px] font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black rounded"
            >
              <div className="bg-brand-red p-5 group-hover:bg-white group-hover:text-brand-red transition-all duration-500 rounded-full">
                <ArrowRight className="w-5 h-5" />
              </div>
              <span className="border-b border-transparent group-hover:border-brand-red transition-all py-1">View Archive</span>
            </a>
          </div>
        </div>

        {/* Side Details */}
        <div className="hidden lg:flex flex-col items-end gap-12 xl:gap-16 border-l border-white/10 pl-12 xl:pl-20 pb-4">
          <div className="text-right">
            <span className="text-brand-red font-display text-5xl font-light mb-2 block">2014</span>
            <span className="text-white/90 text-[9px] uppercase tracking-[0.5em] font-bold">Inception</span>
          </div>
          <div className="text-right">
            <span className="text-white font-display text-5xl font-light mb-2 block">500+</span>
            <span className="text-white/90 text-[9px] uppercase tracking-[0.5em] font-bold">Milestones</span>
          </div>
        </div>
      </div>

      {/* Geometric Decoration */}
      <div className="absolute top-1/2 -right-64 w-[600px] h-[600px] border border-white/5 rotate-45 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
