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
    <section id="about" className="py-20 md:py-28 lg:py-36 bg-white relative overflow-hidden" ref={revealRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <div className="lg:col-span-7 space-y-10 md:space-y-16">
            <div className="reveal">
              <span className="text-brand-red font-display text-[10px] uppercase tracking-[0.6em] mb-4 md:mb-6 block font-bold">Who We Are</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-brand-black leading-[0.9] uppercase tracking-tighter mb-6 md:mb-10">
                Built on <br />
                <span className="text-brand-red">Execution</span>
              </h2>
              <div className="h-px w-full bg-black/5 mb-6 md:mb-10" />
              <p className="text-brand-black text-xl md:text-2xl font-light leading-snug tracking-tight">
                IronPeak Construction Group is a full-service construction company delivering high-quality residential and small commercial projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-brand-gray text-sm md:text-base font-light leading-loose reveal">
              <p>
                Operating at the intersection of architectural elegance and uncompromising engineering, we provide a "no-nonsense" approach to the Bay Area's most ambitious developments. Our process is clinical, our timelines are absolute, and our results are definitive.
              </p>
              <p>
                From custom tech-valley estates to refined commercial environments, we eliminate the friction of construction through meticulous planning and a culture of radical accountability.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative reveal" style={{ transitionDelay: '300ms' }}>
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
        </div>
      </div>
      
      {/* Background Decorative Text */}
      <span className="absolute -bottom-10 -left-10 text-[20rem] font-display font-bold text-black/[0.02] pointer-events-none select-none uppercase tracking-tighter">IronPeak</span>
    </section>
  );
};

export default About;
