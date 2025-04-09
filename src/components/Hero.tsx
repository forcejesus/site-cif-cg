
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleParallax = () => {
      if (!heroRef.current) return;
      
      const scrollPosition = window.scrollY;
      const parallaxValue = scrollPosition * 0.5;
      
      heroRef.current.style.backgroundPositionY = `calc(50% + ${parallaxValue}px)`;
    };
    
    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative h-screen min-h-[700px] bg-cifcg-900 bg-[url('https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-blend-overlay bg-opacity-70 flex items-center justify-center text-white overflow-hidden"
      style={{ 
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-cifcg-950/70 via-cifcg-900/50 to-cifcg-950/80" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              Convergence et Initiative Francophone au Congo
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            Promouvoir la Francophonie <br className="hidden md:block" /> 
            <span className="text-cifcg-300">et les Initiatives Locales</span>
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl mb-10 text-white/90 animate-fade-in opacity-0" style={{ animationDelay: '0.9s' }}>
            Nous œuvrons pour la promotion de la langue française et le développement 
            des initiatives culturelles, éducatives et sociales au Congo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in opacity-0" style={{ animationDelay: '1.2s' }}>
            <button className="cta-button">
              Rejoignez-nous
            </button>
            <button className="cta-button-secondary backdrop-blur-sm border border-white/30 bg-transparent text-white hover:bg-white/10">
              En savoir plus
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <svg 
          className="w-8 h-8 text-white/70" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
