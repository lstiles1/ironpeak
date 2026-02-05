import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
    <nav
      className={`fixed w-full z-50 transition-all duration-700 ${
        isScrolled ? 'glass-nav py-3' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-10 lg:gap-14">
            <a href="#" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm">
              <Logo compact showTagline={false} />
            </a>

            <div className="hidden md:flex items-center gap-10 lg:gap-12">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative text-white/90 hover:text-white text-[10px] font-bold uppercase tracking-[0.4em] transition-all group py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-brand-red transition-all group-hover:w-full group-hover:left-0"></span>
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="bg-brand-red text-white px-8 py-3 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-brand-red transition-all shadow-2xl"
            >
              Get Free Quote
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
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
