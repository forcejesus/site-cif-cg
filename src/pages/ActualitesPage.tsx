
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Newspaper, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useArticles } from '@/services/articleService';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const ActualitesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: articles, isLoading, error } = useArticles();

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
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="overflow-hidden h-full transition-all duration-300">
                  <Skeleton className="h-60 w-full" />
                  <div className="p-6">
                    <Skeleton className="h-7 w-3/4 mb-3" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-5/6 mb-2" />
                    <Skeleton className="h-4 w-4/6" />
                  </div>
                </Card>
              ))}
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
              <Newspaper className="h-16 w-16 text-cifcg-300 mb-4" />
              <p className="text-xl text-gray-500">Une erreur est survenue lors du chargement des actualités.</p>
              <p className="mt-2 text-gray-400">Veuillez réessayer plus tard.</p>
            </div>
          ) : articles && articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Card key={article.id} className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                  <div 
                    className="h-60 bg-cover bg-center" 
                    style={{ 
                      backgroundImage: `url(${article.image.startsWith('/') 
                        ? `https://data.cif-cg.org${article.image}` 
                        : article.image})`
                    }}
                  />
                  <CardHeader className="p-6 pb-2">
                    <CardTitle className="text-xl font-bold text-cifcg-800 line-clamp-2">
                      {article.titre}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-2">
                    <CardDescription className="text-base text-gray-600">
                      {article.description_courte}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Link 
                      to={`/actualites/${article.id}`}
                      className="text-cifcg-600 font-medium flex items-center hover:text-cifcg-800 transition-colors"
                    >
                      Lire la suite
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
              <Newspaper className="h-16 w-16 text-cifcg-300 mb-4" />
              <p className="text-xl text-gray-500">Aucune actualité pour le moment.</p>
              <p className="mt-2 text-gray-400">Revenez bientôt pour découvrir nos dernières actualités.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ActualitesPage;
