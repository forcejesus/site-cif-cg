
import { useQuery } from "@tanstack/react-query";

export interface Article {
  id: number;
  titre: string;
  image: string;
  description_courte: string;
  description_long: string;
}

const API_HOST = "https://data.cif-cg.org";

export const fetchArticles = async (): Promise<Article[]> => {
  const response = await fetch(`${API_HOST}/api/articles/`);
  
  if (!response.ok) {
    throw new Error("Impossible de récupérer les articles");
  }
  
  return response.json();
};

export const fetchArticleById = async (id: number): Promise<Article> => {
  console.log(`Fetching article with ID: ${id}`);
  const response = await fetch(`${API_HOST}/api/articles/${id}/`);
  
  if (!response.ok) {
    console.error(`Error fetching article ${id}, status: ${response.status}`);
    throw new Error("Article non trouvé");
  }
  
  const data = await response.json();
  console.log("Article data received:", data);
  return data;
};

export const useArticles = () => {
  return useQuery({
    queryKey: ['articles'],
    queryFn: fetchArticles,
  });
};

export const useArticle = (id: number) => {
  return useQuery({
    queryKey: ['article', id],
    queryFn: () => fetchArticleById(id),
    enabled: !!id,
    retry: 1,
  });
};
