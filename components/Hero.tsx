import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2400t';
const HERO_FALLBACK =
  'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8c?auto=format&fit=crop&q=80&w=2400';

const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const heroImage = imgError ? HERO_FALLBACK : HERO_IMAGE;

  return (
    <section className="relative text-white min-h-screen flex items-center overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Construction workers on site"
          fetchPriority="high"
          loading="eager"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay: darker on left for text readability (wireframe) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.65) 45%, rgba(10,10,10,0.35) 70%, rgba(10,10,10,0.1) 100%)',
          }}
        />
      </div>

      {/* Content: left-aligned; top padding so hero image is visible above navbar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-red mb-6 md:mb-8">
            Delivering quality construction
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold leading-tight text-white mb-4 md:mb-5">
            Built With<br />
            Strength And<br />
            Precision
          </h1>
          <div className="w-full max-w-md h-[0.3px] bg-white/90 mb-6 md:mb-8" />
          <p className="text-white/90 text-xs md:text-sm leading-relaxed mb-8 md:mb-10 max-w-md">
            We believe that every business is unique. Our approach is never one size fits all. We tailor our strategies to fit your goals.
          </p>
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-sans font-medium text-white rounded-sm bg-brand-red transition-opacity hover:opacity-90"
          >
            <span>Service Request</span>
            <ArrowRight className="w-4 h-4" style={{ transform: 'rotate(-45deg)' }} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
