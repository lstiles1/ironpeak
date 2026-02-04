import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { COMPANY_DETAILS, NAV_ITEMS } from '../constants';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white pt-24 md:pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-16 mb-20 md:mb-24">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-8 md:space-y-12">
            <a href="#" className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black rounded-sm">
              <Logo showTagline={false} />
            </a>
            <p className="text-brand-silver font-light text-lg leading-relaxed max-w-md">
              We translate complex architectural visions into structural masterpieces. No noise. Just pure precision.
            </p>
            <div className="flex gap-6">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-brand-gray hover:text-brand-red transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black rounded p-1"
                  aria-label={`Follow us on ${['Facebook', 'Instagram', 'Twitter', 'LinkedIn'][i]}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-3">
            <h4 className="text-brand-red font-display text-xs uppercase tracking-[0.5em] mb-12 block">Directory</h4>
            <ul className="space-y-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-brand-silver hover:text-white transition-all text-xs uppercase tracking-widest flex items-center gap-4 group">
                    <span className="h-[1px] w-0 bg-brand-red group-hover:w-6 transition-all"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="text-brand-red font-display text-xs uppercase tracking-[0.5em] mb-12 block">Headquarters</h4>
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <MapPin className="w-5 h-5 text-brand-red shrink-0" />
                <span className="text-brand-silver font-light leading-relaxed">{COMPANY_DETAILS.location}</span>
              </div>
              <div className="flex items-center gap-6">
                <Phone className="w-5 h-5 text-brand-red shrink-0" />
                <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-white font-display text-2xl font-bold hover:text-brand-red transition-colors">{COMPANY_DETAILS.phone}</a>
              </div>
              <div className="flex items-center gap-6">
                <Mail className="w-5 h-5 text-brand-red shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-white font-light border-b border-brand-red hover:text-brand-red transition-colors">{COMPANY_DETAILS.email}</a>
              </div>
              <div>
                <p className="text-brand-red font-display text-[10px] uppercase tracking-[0.4em] mb-2 font-bold">Service Area</p>
                <p className="text-brand-silver font-light text-sm leading-relaxed">
                  Bay Area (San Jose, Santa Clara, Sunnyvale, Palo Alto, Fremont)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] uppercase tracking-[0.4em] text-brand-gray font-bold">
            © {new Date().getFullYear()} IronPeak Construction Group. All Rights Reserved
          </p>
          <div className="flex gap-10 text-[10px] uppercase tracking-[0.4em] text-brand-gray font-bold">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Licensing</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
