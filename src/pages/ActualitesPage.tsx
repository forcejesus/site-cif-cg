
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Newspaper } from 'lucide-react';

const ActualitesPage = () => {
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
            backgroundImage: "url('https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2069&auto=format&fit=crop')",
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              Actualités
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90">
              Retrouvez toutes les actualités et informations concernant la Convergence et Initiative Francophone au Congo
            </p>
          </div>
        </div>
      </div>
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
            <Newspaper className="h-16 w-16 text-cifcg-300 mb-4" />
            <p className="text-xl text-gray-500">Aucune actualité pour le moment.</p>
            <p className="mt-2 text-gray-400">Revenez bientôt pour découvrir nos dernières actualités.</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ActualitesPage;
