import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

// Construction workers on site
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2400t';
const HERO_FALLBACK =
  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2400';

const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const heroImage = imgError ? HERO_FALLBACK : HERO_IMAGE;

  return (
    <section className="relative text-white pt-28 md:pt-36 lg:pt-44 pb-24 md:pb-32 lg:pb-40 overflow-hidden min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt=""
          fetchPriority="high"
          loading="eager"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-black/75" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:gap-16 lg:grid-cols-2 items-center w-full relative z-10">
        {/* Text column */}
        <div className="space-y-6 md:space-y-8">
          <span className="inline-flex items-center px-3 py-1 text-[10px] font-bold uppercase tracking-[0.4em] bg-brand-red/10 text-white border border-brand-red/40 rounded-sm">
            Delivering quality construction
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight">
            Built With
            <br className="hidden sm:block" />
            <span className="block text-brand-red">Strength &amp; Precision</span>
          </h1>

          <p className="text-brand-silver text-sm sm:text-base md:text-lg lg:text-xl max-w-xl leading-relaxed">
            We believe that every business is unique and our approach is never one size fits all. We tailor our strategies to meet your goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-3 bg-brand-red text-white px-8 sm:px-10 py-3 sm:py-4 text-[10px] font-bold uppercase tracking-[0.4em] shadow-2xl hover:bg-white hover:text-brand-red transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
              <span>Service Request</span>
            </a>
          </div>
        </div>

        {/* Empty column for layout balance */}
        <div className="hidden lg:block"></div>
      </div>
    </section>
  );
};

export default Hero;
