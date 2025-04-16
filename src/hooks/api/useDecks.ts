
import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/lib/api-client';
import { API_ENDPOINTS } from '@/config/api';

export interface Deck {
  id: string;
  title: string;
  cardCount: number;
}

export const useDecks = () => {
  return useQuery({
    queryKey: ['decks'],
    queryFn: async () => {
      const { data } = await apiClient.get<Deck[]>(API_ENDPOINTS.decks);
      return data;
    },
  });
};
