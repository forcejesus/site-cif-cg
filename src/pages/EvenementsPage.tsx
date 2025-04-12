
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Tag, CreditCard, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { useEvents } from '@/services/eventService';

const EvenementsPage = () => {
  const { data: events, isLoading, error } = useEvents();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Banner */}
      <div className="relative pt-20">
        <div className="absolute inset-0 bg-cifcg-900 bg-opacity-80 z-10" />
        <div 
          className="relative z-0 h-[300px] md:h-[400px] bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop')",
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              Événements
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90">
              Découvrez les événements à venir et les activités organisées par la Convergence et Initiative Francophone au Congo
            </p>
          </div>
        </div>
      </div>
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
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
          ) : error ? (
            <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
              <Calendar className="h-16 w-16 text-cifcg-300 mb-4" />
              <p className="text-xl text-gray-500">Erreur lors du chargement des événements.</p>
              <p className="mt-2 text-gray-400">Veuillez réessayer plus tard.</p>
            </div>
          ) : !events || events.length === 0 ? (
            <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
              <Calendar className="h-16 w-16 text-cifcg-300 mb-4" />
              <p className="text-xl text-gray-500">Aucun événement programmé pour le moment.</p>
              <p className="mt-2 text-gray-400">Revenez bientôt pour découvrir nos prochains événements.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <Card key={event.id} className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                  <div 
                    className="h-60 bg-cover bg-center" 
                    style={{ 
                      backgroundImage: `url(${event.image.startsWith('/') 
                        ? `https://data.cif-cg.org${event.image}` 
                        : event.image})`
                    }}
                  />
                  <CardHeader className="p-5 pb-2">
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant="outline" className="bg-cifcg-50 text-cifcg-700 font-medium">
                        <Tag className="mr-1 h-3 w-3" /> {event.type}
                      </Badge>
                      <Badge variant="outline" className="bg-cifcg-50 text-cifcg-700 font-medium">
                        <CreditCard className="mr-1 h-3 w-3" /> {event.prix > 0 ? `${event.prix} FCFA` : 'Gratuit'}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-cifcg-800">
                      {event.titre}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-5 pt-0">
                    <CardDescription className="text-base text-gray-600">
                      {event.description_courte}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="p-5 pt-0">
                    <Link 
                      to={`/evenements/${event.id}`}
                      className="text-cifcg-600 font-medium flex items-center hover:text-cifcg-800 transition-colors"
                    >
                      Plus de détails
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EvenementsPage;
