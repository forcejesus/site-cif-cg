
import React from 'react';
import { Calendar, Clock, MapPin, Newspaper, ArrowRight, Tag, CreditCard } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useArticles } from '@/services/articleService';
import { useEvents } from '@/services/eventService';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';

const NewsEvents = () => {
  const { ref: newsSectionRef, inView: newsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: eventsSectionRef, inView: eventsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { data: articles, isLoading: isLoadingArticles, error: articlesError } = useArticles();
  const { data: events, isLoading: isLoadingEvents, error: eventsError } = useEvents();

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Articles Section */}
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

          {isLoadingArticles ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <Card key={i} className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
                  <Skeleton className="h-48 w-full" />
                  <div className="p-5">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                </Card>
              ))}
            </div>
          ) : articlesError ? (
            <div className="bg-white p-10 rounded-xl text-center shadow-md">
              <div className="mb-6">
                <Newspaper className="w-12 h-12 mx-auto text-cifcg-300" />
              </div>
              <h3 className="text-xl font-semibold text-cifcg-800 mb-3">
                Erreur de chargement des actualités
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Nous n'avons pas pu charger les actualités. Veuillez réessayer plus tard.
              </p>
            </div>
          ) : articles && articles.length > 0 ? (
            <div 
              className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 opacity-0",
                newsInView && "animate-slide-in"
              )}
              style={{ animationDelay: '0.3s' }}
            >
              {articles.slice(0, 4).map((article) => (
                <Card key={article.id} className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                  <div 
                    className="h-48 bg-cover bg-center" 
                    style={{ 
                      backgroundImage: `url(${article.image.startsWith('/') 
                        ? `https://data.cif-cg.org${article.image}` 
                        : article.image})`
                    }}
                  />
                  <CardHeader className="p-5 pb-2">
                    <CardTitle className="text-lg font-bold text-cifcg-800 line-clamp-2">
                      {article.titre}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-5 pt-0">
                    <CardDescription className="text-sm text-gray-600 line-clamp-3">
                      {article.description_courte}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="p-5 pt-0">
                    <Link 
                      to={`/actualites/${article.id}`}
                      className="text-cifcg-600 font-medium text-sm flex items-center hover:text-cifcg-800 transition-colors"
                    >
                      Lire la suite
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
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
          )}

          <div className="text-center mt-10">
            <Link 
              to="/actualites"
              className={cn(
                "px-6 py-3 inline-flex items-center bg-white border border-cifcg-200 rounded-lg text-cifcg-700 font-medium transition-all duration-300 hover:bg-cifcg-50 opacity-0",
                newsInView && "animate-slide-in"
              )}
              style={{ animationDelay: '0.6s' }}
            >
              Toutes les actualités
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>

        {/* Events Section */}
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
          
          {isLoadingEvents ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <Card key={i} className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
                  <Skeleton className="h-48 w-full" />
                  <div className="p-5">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                </Card>
              ))}
            </div>
          ) : eventsError || !events || events.length === 0 ? (
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
          ) : (
            <div 
              className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 opacity-0",
                eventsInView && "animate-slide-in"
              )}
              style={{ animationDelay: '0.3s' }}
            >
              {events.slice(0, 4).map((event) => (
                <Card key={event.id} className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                  <div 
                    className="h-48 bg-cover bg-center" 
                    style={{ 
                      backgroundImage: `url(${event.image.startsWith('/') 
                        ? `https://data.cif-cg.org${event.image}` 
                        : event.image})`
                    }}
                  />
                  <CardHeader className="p-5 pb-2">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="bg-cifcg-50 text-cifcg-700 font-medium">
                        <Tag className="mr-1 h-3 w-3" /> {event.type}
                      </Badge>
                      <Badge variant="outline" className="bg-cifcg-50 text-cifcg-700 font-medium">
                        <CreditCard className="mr-1 h-3 w-3" /> {event.prix > 0 ? `${event.prix} FCFA` : 'Gratuit'}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg font-bold text-cifcg-800 line-clamp-2">
                      {event.titre}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-5 pt-0">
                    <CardDescription className="text-sm text-gray-600 line-clamp-3">
                      {event.description_courte}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="p-5 pt-0">
                    <Link 
                      to={`/evenements/${event.id}`}
                      className="text-cifcg-600 font-medium text-sm flex items-center hover:text-cifcg-800 transition-colors"
                    >
                      Plus de détails
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}

          <div className="text-center mt-10">
            <Link 
              to="/evenements"
              className={cn(
                "px-6 py-3 inline-flex items-center bg-white border border-cifcg-200 rounded-lg text-cifcg-700 font-medium transition-all duration-300 hover:bg-cifcg-50 opacity-0",
                eventsInView && "animate-slide-in"
              )}
              style={{ animationDelay: '0.6s' }}
            >
              Tous les événements
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
