import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1200';
const ABOUT_FALLBACK =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200';

const About: React.FC = () => {
  const revealRef = useReveal();
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden" ref={revealRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
          {/* Image column - left on desktop */}
          <div className="lg:col-span-5 reveal" style={{ transitionDelay: '150ms' }}>
            <div className="relative aspect-[4/4] min-h-[280px] overflow-hidden rounded-sm group mb-4">
              <img
                src={imgError ? ABOUT_FALLBACK : ABOUT_IMAGE}
                alt="Construction and building"
                loading="lazy"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-red/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden />
            </div>
          </div>

          {/* Text column - right on desktop */}
          <div className="lg:col-span-7 pt-8 lg:pt-12">
            <div className="reveal">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                <span className="text-brand-gray font-sans text-[10px] uppercase tracking-[0.2em] font-bold">
                  About IronPeak Construction
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-brand-black leading-[1.15] mb-6">
                <span className="whitespace-nowrap font-bold">Experts Modern Construction</span>
                <br />
                <span className="font-bold">Service &amp; Solutions</span>
              </h2>
              <p className="text-brand-gray font-sans text-sm md:text-base leading-snug max-w-2xl mb-5">
              Our data analysis tools and techniques help you turn complex data into clear, strategic insights tnat improve performance and guide growth. We provide the best services ensuring your outstanding growth. Reliable builds and remodels at the right price.
              </p>
              <p className="text-brand-gray font-sans text-sm md:text-base leading-snug max-w-2xl mb-8">
              Our vision is to be the most trusted impactful business consulting firm globally, known for trans forming companies. We provide the best services ensuring your outstanding growth.
              Our projects show what happens when solid workmanship meets clear planning.
              </p>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-sans font-medium text-white rounded-sm bg-brand-red transition-opacity hover:opacity-90"
              >
                Discover More
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
