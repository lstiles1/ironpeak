import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { useReveal } from '../hooks/useReveal';
import { ArrowUpRight } from 'lucide-react';

const ServiceCard: React.FC<{
  title: string;
  description: string;
  image: string;
  index: number;
  revealClass: string;
}> = ({ title, description, image, index, revealClass }) => {
  const [imgError, setImgError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const imageUrl =
    imgError || !image
      ? 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800'
      : image;

  return (
    <div
      className={`${revealClass} group relative overflow-hidden rounded-sm min-h-[350px] sm:min-h-[380px] md:min-h-[420px] flex flex-col justify-end`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="absolute inset-0 z-0">
        {isLoading && (
          <div className="absolute inset-0 image-skeleton" aria-hidden="true" />
        )}
        <img
          src={imageUrl}
          alt=""
          loading="lazy"
          onError={() => setImgError(true)}
          onLoad={() => setIsLoading(false)}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent"
          aria-hidden
        />
      </div>
      <a
        href="#contact"
        className="relative z-10 p-8 md:p-10 flex flex-col text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-inset rounded-sm transition-transform duration-300 group-hover:translate-y-[-2px]"
      >
        <div className="absolute top-6 right-6 w-12 h-12 bg-brand-red flex items-center justify-center rounded-sm opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
          <ArrowUpRight className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-tight mb-3 pr-14 min-h-[2.5rem] sm:min-h-[2.75rem] md:min-h-[3.25rem] leading-tight">
          {title}
        </h3>
        <p className="text-white/85 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-md mb-6">
          {description}
        </p>
        <span className="text-white text-sm font-semibold uppercase tracking-widest inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
          Read more
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </a>
    </div>
  );
};

const Services: React.FC = () => {
  const revealRef = useReveal();

  return (
    <section
      id="services"
      className="py-16 sm:py-20 md:py-28 lg:py-36 bg-brand-lightGray relative"
      ref={revealRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-24 reveal">
          <div className="max-w-2xl">
            <span className="text-brand-red font-display text-[10px] uppercase tracking-[0.6em] mb-4 block font-bold">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-brand-black uppercase tracking-tighter leading-[0.9]">
              Construction <br /> <span className="text-brand-red">Services</span>
            </h2>
          </div>
          <p className="text-brand-gray max-w-xs text-xs sm:text-sm font-light leading-relaxed uppercase tracking-widest">
            Residential and small commercial—reliable build and remodel.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              index={index}
              revealClass="reveal"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
