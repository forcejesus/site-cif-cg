
import { useQuery } from "@tanstack/react-query";

export interface Event {
  id: number;
  titre: string;
  image: string;
  type: string;
  prix: number;
  contions: string;
  description_courte: string;
  description_long: string;
}

const API_HOST = "https://data.cif-cg.org";

export const fetchEvents = async (): Promise<Event[]> => {
  const response = await fetch(`${API_HOST}/api/evenements/`);
  
  if (!response.ok) {
    throw new Error("Impossible de récupérer les événements");
  }
  
  return response.json();
};

export const fetchEventById = async (id: number): Promise<Event> => {
  const response = await fetch(`${API_HOST}/api/evenements/${id}/`);
  
  if (!response.ok) {
    throw new Error("Événement non trouvé");
  }
  
  return response.json();
};

export const useEvents = () => {
  return useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents,
  });
};

export const useEvent = (id: number) => {
  return useQuery({
    queryKey: ['event', id],
    queryFn: () => fetchEventById(id),
    enabled: !!id,
  });
};
