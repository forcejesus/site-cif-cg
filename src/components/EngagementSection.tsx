import React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { Shield, Heart, Users } from 'lucide-react';

const EngagementSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section 
      ref={ref}
      className="py-24 bg-cifcg-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464863979621-258b94be4055?q=80&w=1964&auto=format&fit=crop')] bg-cover bg-center bg-blend-overlay bg-opacity-20 opacity-10"></div>
      
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className={cn(
            "section-title text-white opacity-0",
            inView && "animate-slide-in"
          )}>
            Rejoignez Notre Initiative
          </h2>
          <p className={cn(
            "section-subtitle text-cifcg-100 opacity-0",
            inView && "animate-slide-in"
          )} style={{ animationDelay: '0.2s' }}>
            Découvrez comment vous pouvez contribuer à notre mission et faire partie de notre communauté
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className={cn(
            "glass-card backdrop-blur-md bg-white/10 rounded-xl p-8 border border-white/20 opacity-0",
            inView && "animate-slide-left"
          )} style={{ animationDelay: '0.3s' }}>
            <div className="bg-cifcg-600/30 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Devenir Membre</h3>
            <p className="text-cifcg-100 mb-6">
              En rejoignant CIF-CG, vous ferez partie d'un réseau dynamique de professionnels, d'étudiants et d'acteurs culturels engagés pour la promotion de la francophonie et des initiatives locales.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-cifcg-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Accès à des événements exclusifs
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-cifcg-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Opportunités de réseautage
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-cifcg-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Formation et ateliers thématiques
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-cifcg-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Participation aux projets de l'association
              </li>
            </ul>
            <button className="w-full py-3 bg-white text-cifcg-800 font-medium rounded-lg hover:bg-cifcg-50 transition-colors shadow-lg shadow-cifcg-900/30">
              Devenir Membre
            </button>
          </div>

          <div className={cn(
            "glass-card backdrop-blur-md bg-white/10 rounded-xl p-8 border border-white/20 opacity-0",
            inView && "animate-slide-right"
          )} style={{ animationDelay: '0.4s' }}>
            <div className="bg-cifcg-600/30 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Faire un Don</h3>
            <p className="text-cifcg-100 mb-6">
              Votre soutien financier nous permet de réaliser des projets ambitieux, d'organiser des événements d'envergure et de soutenir des initiatives locales innovantes pour le développement de notre communauté.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-cifcg-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Financement de projets éducatifs
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-cifcg-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Soutien aux initiatives culturelles
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-cifcg-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Organisation d'événements communautaires
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-cifcg-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Développement de programmes de formation
              </li>
            </ul>
            <button className="w-full py-3 bg-cifcg-600 text-white font-medium rounded-lg hover:bg-cifcg-700 transition-colors shadow-lg shadow-cifcg-900/30">
              Faire un Don
            </button>
          </div>
        </div>

        <div className={cn(
          "text-center mt-16 opacity-0",
          inView && "animate-slide-in"
        )} style={{ animationDelay: '0.5s' }}>
          <p className="text-lg mb-6 text-cifcg-100 max-w-2xl mx-auto">
            Vous avez des questions sur notre association ou sur comment vous impliquer ? 
            N'hésitez pas à nous contacter !
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg font-medium hover:bg-white/20 transition-colors"
          >
            Contactez-nous
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;
