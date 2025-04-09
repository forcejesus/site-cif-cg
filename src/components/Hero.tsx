
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-cifcg-950 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cifcg-950/90 via-cifcg-950/70 to-cifcg-950/95 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1605195340566-294a6ac01901?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80" 
          alt="Communauté africaine célébrant ensemble" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 h-full flex flex-col justify-center items-center text-center">
        <div className="animate-slide-in [--animation-delay:200ms]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 tracking-tight">
            <span className="text-gold-400">Communauté Ivoirienne</span>
            <br />
            <span className="text-white">de France en Côte-d'Or</span>
          </h1>
          <p className="text-lg md:text-xl font-body text-white/80 max-w-3xl mx-auto mb-8">
            Bienvenue dans notre espace communautaire dédié à promouvoir la culture ivoirienne, 
            tisser des liens et construire un avenir commun en Côte-d'Or.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <a 
              href="#about" 
              className="cta-button group"
            >
              Découvrir notre communauté
              <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#events" 
              className="cta-button-secondary group"
            >
              Nos événements
              <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-16 lg:mt-24 py-6 px-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 animate-fade-in [--animation-delay:500ms]">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-heading font-bold text-gold-400">150+</p>
            <p className="text-white/70 text-sm mt-1">Membres</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-heading font-bold text-gold-400">20+</p>
            <p className="text-white/70 text-sm mt-1">Événements annuels</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-heading font-bold text-gold-400">10+</p>
            <p className="text-white/70 text-sm mt-1">Années d'existence</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-heading font-bold text-gold-400">5+</p>
            <p className="text-white/70 text-sm mt-1">Partenariats</p>
          </div>
        </div>
      </div>

      {/* Design elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-cifcg-950 to-transparent z-10"></div>
      <div className="absolute -bottom-2 left-0 w-full h-8 bg-white z-10 clip-path-wave"></div>
    </section>
  );
};

export default Hero;
