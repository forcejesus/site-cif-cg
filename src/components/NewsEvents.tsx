
import React from 'react';
import { Calendar, Clock, MapPin, Newspaper } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';

// Removed newsItems array as it's no longer needed

// Removed upcomingEvents array as it's no longer needed

const NewsEvents = () => {
  const { ref: newsSectionRef, inView: newsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: eventsSectionRef, inView: eventsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div ref={newsSectionRef} className="mb-20">
          <div className="text-center mb-16">
            <h2 className={cn(
              "section-title opacity-0",
              newsInView && "animate-slide-in"
            )}>
              Actualités
            </h2>
            <p className={cn(
              "section-subtitle opacity-0",
              newsInView && "animate-slide-in"
            )} style={{ animationDelay: '0.2s' }}>
              Restez informé des dernières nouvelles et activités de notre association
            </p>
          </div>

          {/* Empty state message for news */}
          <div 
            className={cn(
              "bg-white p-10 rounded-xl text-center shadow-md opacity-0",
              newsInView && "animate-slide-in"
            )}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="mb-6">
              <Newspaper className="w-12 h-12 mx-auto text-cifcg-300" />
            </div>
            <h3 className="text-xl font-semibold text-cifcg-800 mb-3">
              Aucune actualité pour le moment
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Nous travaillons sur de nouvelles actualités. Revenez bientôt pour les découvrir.
            </p>
          </div>

          <div className="text-center mt-10">
            <span 
              className={cn(
                "px-6 py-3 inline-flex items-center bg-white border border-cifcg-200 rounded-lg text-cifcg-700 font-medium transition-all duration-300 opacity-0",
                newsInView && "animate-slide-in"
              )}
              style={{ animationDelay: '0.6s' }}
            >
              Toutes les actualités
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
          </div>
        </div>

        <div ref={eventsSectionRef} className="mt-20">
          <div className="text-center mb-16">
            <h2 className={cn(
              "section-title opacity-0",
              eventsInView && "animate-slide-in"
            )}>
              Événements à venir
            </h2>
            <p className={cn(
              "section-subtitle opacity-0",
              eventsInView && "animate-slide-in"
            )} style={{ animationDelay: '0.2s' }}>
              Découvrez et participez à nos prochains événements
            </p>
          </div>
          
          {/* Empty state message for events */}
          <div 
            className={cn(
              "bg-white p-10 rounded-xl text-center shadow-md opacity-0",
              eventsInView && "animate-slide-in"
            )}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="mb-6">
              <Calendar className="w-12 h-12 mx-auto text-cifcg-300" />
            </div>
            <h3 className="text-xl font-semibold text-cifcg-800 mb-3">
              Aucun événement à venir pour le moment
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Nous préparons de nouveaux événements. Revenez bientôt pour découvrir notre programme.
            </p>
          </div>

          <div className="text-center mt-10">
            <span 
              className={cn(
                "px-6 py-3 inline-flex items-center bg-white border border-cifcg-200 rounded-lg text-cifcg-700 font-medium transition-all duration-300 opacity-0",
                eventsInView && "animate-slide-in"
              )}
              style={{ animationDelay: '0.6s' }}
            >
              Tous les événements
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
