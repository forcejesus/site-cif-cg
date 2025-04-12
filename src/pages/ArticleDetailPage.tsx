
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useArticle } from '@/services/articleService';
import { ArrowLeft } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from "sonner";

const ArticleDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const articleId = id ? parseInt(id) : 0;
  
  const { data: article, isLoading, error } = useArticle(articleId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (error) {
      toast.error("Impossible de charger cet article");
      console.error("Erreur lors du chargement de l'article:", error);
    }
  }, [error]);

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold text-cifcg-800 mb-4">Article non trouvé</h1>
            <p className="mb-6 text-gray-600">L'article que vous recherchez n'existe pas ou a été déplacé.</p>
            <button 
              onClick={() => navigate('/actualites')}
              className="px-4 py-2 bg-cifcg-600 text-white rounded-md hover:bg-cifcg-700 transition-colors"
            >
              Retourner aux actualités
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
      ) : article && (
        <div className="relative pt-20">
          <div className="absolute inset-0 bg-cifcg-900 bg-opacity-80 z-10" />
          <div 
            className="relative z-0 h-[300px] md:h-[400px] bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${article.image.startsWith('/') 
                ? `https://data.cif-cg.org${article.image}` 
                : article.image})`,
              backgroundAttachment: 'fixed'
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center text-white px-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                {article.titre}
              </h1>
            </div>
          </div>
        </div>
      )}
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <button 
            onClick={() => navigate('/actualites')}
            className="mb-8 inline-flex items-center text-cifcg-600 hover:text-cifcg-800 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux actualités
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
          ) : article && (
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="prose prose-lg max-w-none mb-8">
                <h2 className="text-2xl font-semibold text-cifcg-800 mb-4">{article.description_courte}</h2>
              </div>
              
              <div className="my-8 border-t border-b border-gray-100 py-6">
                <h3 className="text-xl font-semibold mb-4 text-cifcg-700">Plus d'informations</h3>
                <div 
                  className="prose prose-lg max-w-none" 
                  dangerouslySetInnerHTML={{ __html: article.description_long }}
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

export default ArticleDetailPage;
