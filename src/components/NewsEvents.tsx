
import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';

const newsItems = [
  {
    id: 1,
    title: "Lancement du programme d'échanges culturels 2023",
    excerpt: "Le nouveau programme d'échanges culturels entre le Congo et la France vient d'être lancé avec de nombreuses opportunités pour les jeunes talents.",
    image: "https://images.unsplash.com/photo-1560523159-4a9692d222f9?q=80&w=2670&auto=format&fit=crop",
    date: "12 juin 2023",
    category: "Actualité"
  },
  {
    id: 2,
    title: "Journée internationale de la Francophonie célébrée à Brazzaville",
    excerpt: "Une série d'événements a été organisée dans la capitale congolaise pour célébrer la richesse de la langue française.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2670&auto=format&fit=crop",
    date: "20 mars 2023",
    category: "Événement"
  },
  {
    id: 3,
    title: "Formation en entrepreneuriat pour les jeunes francophones",
    excerpt: "50 jeunes entrepreneurs congolais ont bénéficié d'une formation intensive en gestion de projets et levée de fonds.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2670&auto=format&fit=crop",
    date: "5 mai 2023",
    category: "Formation"
  }
];

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

          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <article 
                key={item.id}
                className={cn(
                  "bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 opacity-0",
                  newsInView && "animate-slide-in"
                )}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-cifcg-600 bg-cifcg-50 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-cifcg-900 mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-cifcg-600 font-medium hover:text-cifcg-700 transition-colors"
                  >
                    Lire la suite
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <a 
              href="#" 
              className={cn(
                "px-6 py-3 inline-flex items-center bg-white border border-cifcg-200 rounded-lg text-cifcg-700 font-medium hover:bg-cifcg-50 transition-all duration-300 opacity-0",
                newsInView && "animate-slide-in"
              )}
              style={{ animationDelay: '0.6s' }}
            >
              Toutes les actualités
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
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
            <a 
              href="#" 
              className={cn(
                "px-6 py-3 inline-flex items-center bg-white border border-cifcg-200 rounded-lg text-cifcg-700 font-medium hover:bg-cifcg-50 transition-all duration-300 opacity-0",
                eventsInView && "animate-slide-in"
              )}
              style={{ animationDelay: '0.6s' }}
            >
              Tous les événements
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
