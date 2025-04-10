
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar } from 'lucide-react';

const EvenementsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="text-center my-12">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Événements</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez les événements à venir et les activités organisées par la Convergence et Initiative Francophone au Congo.
            </p>
          </div>
          
          <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
            <Calendar className="h-16 w-16 text-cifcg-300 mb-4" />
            <p className="text-xl text-gray-500">Aucun événement programmé pour le moment.</p>
            <p className="mt-2 text-gray-400">Revenez bientôt pour découvrir nos prochains événements.</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EvenementsPage;
