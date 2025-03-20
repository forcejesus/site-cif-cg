
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

const upcomingEvents = [
  {
    id: 1,
    title: "Conférence sur l'avenir de la Francophonie en Afrique",
    date: "15 juillet 2023",
    time: "14:00 - 18:00",
    location: "Centre culturel français, Brazzaville",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Atelier d'écriture créative en français",
    date: "22 juillet 2023",
    time: "10:00 - 12:30",
    location: "Bibliothèque nationale, Pointe-Noire",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Exposition: Artistes francophones du Congo",
    date: "1-15 août 2023",
    time: "09:00 - 17:00",
    location: "Galerie d'art moderne, Brazzaville",
    image: "https://images.unsplash.com/photo-1633046444776-fb2e1e6e21e4?q=80&w=2671&auto=format&fit=crop"
  }
];

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

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div 
                key={event.id}
                className={cn(
                  "event-card group opacity-0",
                  eventsInView && "animate-slide-in"
                )}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="h-48 rounded-lg overflow-hidden mb-5 relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cifcg-900/70 to-transparent"></div>
                </div>
                
                <h3 className="text-xl font-semibold text-cifcg-900 mb-3 line-clamp-2 group-hover:text-cifcg-600 transition-colors">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-cifcg-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-cifcg-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-cifcg-600" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-cifcg-600 font-medium hover:text-cifcg-700 transition-colors"
                  >
                    S'inscrire à l'événement
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
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
