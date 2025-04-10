
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className={cn(
            "section-title opacity-0",
            inView && "animate-slide-in"
          )}>
            À Propos de CIF-CG
          </h2>
          <p className={cn(
            "section-subtitle opacity-0",
            inView && "animate-slide-in"
          )} style={{ animationDelay: '0.2s' }}>
            Découvrez notre mission, nos valeurs et notre engagement envers la francophonie et le développement local.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={cn(
            "opacity-0",
            inView && "animate-slide-left"
          )} style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-cifcg-100 rounded-lg -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold-100 rounded-lg -z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1974&auto=format&fit=crop"
                alt="Réunion d'équipe CIF-CG"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className={cn(
            "opacity-0",
            inView && "animate-slide-right"
          )} style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-display font-semibold text-cifcg-800 mb-4">
              Notre Vision
            </h3>
            <p className="text-gray-700 mb-6">
              Convergence et Initiative Francophone au Congo (CIF-CG) est une association dédiée à la promotion de la langue française et au développement des initiatives locales au Congo. Notre vision est de créer un espace d'échange et de collaboration qui valorise la richesse culturelle francophone.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-cifcg-100 rounded-full p-2 mr-4">
                  <svg className="w-5 h-5 text-cifcg-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-cifcg-800">Promotion de la francophonie</h4>
                  <p className="text-gray-600">Valoriser la langue française et la culture francophone au Congo.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-cifcg-100 rounded-full p-2 mr-4">
                  <svg className="w-5 h-5 text-cifcg-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-cifcg-800">Soutien aux initiatives locales</h4>
                  <p className="text-gray-600">Encourager et accompagner les projets innovants portés par la jeunesse congolaise.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-cifcg-100 rounded-full p-2 mr-4">
                  <svg className="w-5 h-5 text-cifcg-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-cifcg-800">Coopération internationale</h4>
                  <p className="text-gray-600">Renforcer les liens entre le Congo et les autres pays francophones.</p>
                </div>
              </div>
            </div>
            
            <Link to="/a-propos" className="inline-flex items-center text-cifcg-600 font-medium hover:text-cifcg-700 transition-colors duration-200">
              En savoir plus
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-cifcg-50 rounded-full opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 bg-gold-50 rounded-full opacity-50"></div>
    </section>
  );
};

export default AboutSection;
