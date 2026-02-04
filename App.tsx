
import React from 'react';
import { Hammer } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        
        {/* Contact CTA Section */}
        <section id="contact" className="relative py-16 md:py-20 lg:py-24 bg-brand-red overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none transform translate-x-1/4" aria-hidden>
            <Hammer className="w-full h-full text-white" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white uppercase mb-4 md:mb-6 leading-tight">
              Let's Build <br />
              <span className="text-brand-black">Your Vision</span>
            </h2>
            <p className="text-white/95 text-base md:text-lg mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              Ready to start your next project with a team that values structure, planning, and execution? Get in touch for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:(408)555-0198"
                className="bg-white/10 p-6 md:p-8 backdrop-blur-md border border-white/10 rounded-sm w-full sm:w-auto min-w-[240px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-red"
              >
                <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest mb-2">Direct Line</p>
                <p className="text-white text-xl md:text-2xl font-bold font-display tracking-tight">(408) 555-0198</p>
              </a>
              <a
                href="mailto:build@ironpeak.com"
                className="bg-white/10 p-6 md:p-8 backdrop-blur-md border border-white/10 rounded-sm w-full sm:w-auto min-w-[240px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-red"
              >
                <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest mb-2">Email</p>
                <p className="text-white text-xl md:text-2xl font-bold font-display tracking-tight break-all">build@ironpeak.com</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
