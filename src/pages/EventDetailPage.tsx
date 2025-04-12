
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEvent } from '@/services/eventService';
import { ArrowLeft, Tag, CreditCard, Info } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { toast } from "sonner";

const EventDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const eventId = id ? parseInt(id) : 0;
  
  const { data: event, isLoading, error } = useEvent(eventId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (error) {
      toast.error("Impossible de charger cet événement");
      console.error("Erreur lors du chargement de l'événement:", error);
    }
  }, [error]);

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold text-cifcg-800 mb-4">Événement non trouvé</h1>
            <p className="mb-6 text-gray-600">L'événement que vous recherchez n'existe pas ou a été déplacé.</p>
            <button 
              onClick={() => navigate('/evenements')}
              className="px-4 py-2 bg-cifcg-600 text-white rounded-md hover:bg-cifcg-700 transition-colors"
            >
              Retourner aux événements
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Banner */}
      {isLoading ? (
        <div className="relative pt-20">
          <Skeleton className="h-[300px] md:h-[400px] w-full" />
        </div>
      ) : event && (
        <div className="relative pt-20">
          <div className="absolute inset-0 bg-cifcg-900 bg-opacity-80 z-10" />
          <div 
            className="relative z-0 h-[300px] md:h-[400px] bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${event.image.startsWith('/') 
                ? `https://data.cif-cg.org${event.image}` 
                : event.image})`,
              backgroundAttachment: 'fixed'
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center text-white px-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                {event.titre}
              </h1>
            </div>
          </div>
        </div>
      )}
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <button 
            onClick={() => navigate('/evenements')}
            className="mb-8 inline-flex items-center text-cifcg-600 hover:text-cifcg-800 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux événements
          </button>
          
          {isLoading ? (
            <>
              <Skeleton className="h-8 w-3/4 mb-4" />
              <Skeleton className="h-6 w-full mb-4" />
              <Skeleton className="h-40 w-full mb-8" />
              <Skeleton className="h-6 w-full mb-3" />
              <Skeleton className="h-6 w-5/6 mb-3" />
              <Skeleton className="h-6 w-full mb-3" />
            </>
          ) : event && (
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
                <Badge variant="outline" className="bg-cifcg-50 text-cifcg-700 font-medium text-base py-2 px-4 inline-flex items-center w-fit">
                  <Tag className="mr-2 h-4 w-4" /> Type: {event.type}
                </Badge>
                <Badge variant="outline" className="bg-cifcg-50 text-cifcg-700 font-medium text-base py-2 px-4 inline-flex items-center w-fit">
                  <CreditCard className="mr-2 h-4 w-4" /> Prix: {event.prix > 0 ? `${event.prix} FCFA` : 'Gratuit'}
                </Badge>
              </div>
              
              <div className="prose prose-lg max-w-none mb-8">
                <h2 className="text-2xl font-semibold text-cifcg-800 mb-4">{event.description_courte}</h2>
              </div>
              
              {event.contions && (
                <div className="bg-cifcg-50 rounded-lg p-6 mb-8">
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-cifcg-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-cifcg-700 mb-2">Conditions de participation</h3>
                      <p className="text-cifcg-600">{event.contions}</p>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="my-8 border-t border-b border-gray-100 py-6">
                <h3 className="text-xl font-semibold mb-4 text-cifcg-700">Plus d'informations</h3>
                <div 
                  className="prose prose-lg max-w-none" 
                  dangerouslySetInnerHTML={{ __html: event.description_long }}
                />
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventDetailPage;
