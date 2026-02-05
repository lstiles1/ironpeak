import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 flex justify-center px-4 sm:px-6 lg:px-8 pt-4 md:pt-5">
      <div
        className={`w-full max-w-7xl rounded-lg transition-all duration-300 ${
          isScrolled ? 'py-2.5 px-4 md:px-6' : 'py-3 px-4 md:py-3.5 md:px-6'
        }`}
        style={{ backgroundColor: isScrolled ? 'rgba(49, 49, 49, 0.95)' : '#313131' }}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 lg:gap-4">
            <a href="#" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm shrink-0 flex items-center">
              <Logo tight showTagline={false} className="!gap-0 -mr-20 pr-3" />
              <span className="text-white font-sans font-bold text-lg md:text-xl uppercase tracking-tight">IronPeak</span>
            </a>

            <div className="hidden md:flex items-center gap-8 lg:gap-10 ml-8 lg:ml-12">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative flex items-center gap-1 text-white/90 hover:text-white text-[10px] font-sans font-bold uppercase tracking-[0.35em] transition-all group py-2"
                >
                  {item.label}
                  {item.label !== 'Contact' && <ChevronDown className="w-3.5 h-3.5 opacity-80" aria-hidden />}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-red transition-all group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 text-[10px] font-sans font-bold uppercase tracking-[0.35em] hover:bg-white hover:text-brand-red transition-all rounded-sm"
            >
              Get Free Quote
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2" aria-label="Menu">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-brand-black z-[60] flex flex-col justify-center items-center p-8 text-center">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white"><X className="w-10 h-10" /></button>
          <div className="space-y-10">
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setIsOpen(false)} className="block text-white text-4xl font-display font-light uppercase tracking-tighter hover:text-brand-red transition-colors">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
