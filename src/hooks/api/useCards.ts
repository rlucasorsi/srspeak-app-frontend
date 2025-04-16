
import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/lib/api-client';
import { API_ENDPOINTS } from '@/config/api';

export interface Card {
  id: string;
  english: string;
  portuguese: string;
  deckId: string;
}

export const useCards = (deckId: string) => {
  return useQuery({
    queryKey: ['cards', deckId],
    queryFn: async () => {
      const { data } = await apiClient.get<Card[]>(`${API_ENDPOINTS.cards}?deckId=${deckId}`);
      return data;
    },
    enabled: !!deckId,
  });
};

