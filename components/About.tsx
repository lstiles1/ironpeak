import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1200';
const ABOUT_FALLBACK =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200';

const About: React.FC = () => {
  const revealRef = useReveal();
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 lg:py-36 bg-white relative overflow-hidden" ref={revealRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-20 items-center">
          {/* Image column - left on desktop */}
          <div className="lg:col-span-5 reveal" style={{ transitionDelay: '150ms' }}>
            <div className="relative aspect-[4/5] min-h-[320px] overflow-hidden rounded-sm group">
              <img
                src={imgError ? ABOUT_FALLBACK : ABOUT_IMAGE}
                alt="Construction and building"
                loading="lazy"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-red/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden />
            </div>

            {/* Stats Callout */}
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-brand-black p-8 md:p-12 text-white shadow-2xl hidden sm:block">
              <span className="text-brand-red font-display text-4xl font-bold mb-2 block">10+</span>
              <span className="text-[9px] uppercase tracking-[0.4em] text-brand-silver font-bold whitespace-nowrap">Years of Excellence</span>
            </div>
          </div>

          {/* Text column - right on desktop */}
          <div className="lg:col-span-7 space-y-10 md:space-y-12">
            <div className="reveal">
              <span className="text-brand-red font-display text-[10px] uppercase tracking-[0.6em] mb-4 md:mb-6 block font-bold">
                About IronPeak Construction
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-brand-black leading-tight md:leading-[1.05] tracking-tight mb-6 md:mb-8">
                Experts in Modern Construction
                <span className="block text-brand-red">Service &amp; Solutions</span>
              </h2>
              <div className="h-px w-full bg-black/5 mb-6 md:mb-8" />
              <p className="text-brand-black text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl">
                IronPeak Construction Group is a full-service contractor delivering high-quality residential and small commercial work with structure, planning, and precise execution.
              </p>
            </div>

            <div className="reveal">
              <p className="text-brand-black text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl">
                Operating at the intersection of architectural elegance and uncompromising engineering, we provide a &quot;no-nonsense&quot; approach to the Bay Area&apos;s most ambitious developments. Our process is clinical, our timelines are absolute, and our results are definitive.
              </p>
            </div>

            <div className="reveal">
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-3 bg-brand-red text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-brand-black hover:text-white transition-colors"
              >
                Discover More
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Text */}
      <span className="absolute -bottom-10 -left-10 text-[20rem] font-display font-bold text-black/[0.02] pointer-events-none select-none uppercase tracking-tighter">IronPeak</span>
    </section>
  );
};

export default About;
