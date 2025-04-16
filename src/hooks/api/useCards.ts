
import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/lib/api-client';
import { API_ENDPOINTS } from '@/config/api';

export interface Card {
  id: string;
  english: string;
  portuguese: string;
  deckId: string;
}

// Mock data for development
const mockCards: Card[] = [
  {
    id: '1',
    english: 'Hello, how are you?',
    portuguese: 'Olá, como vai você?',
    deckId: '1'
  },
  {
    id: '2',
    english: 'I am a software developer',
    portuguese: 'Eu sou um desenvolvedor de software',
    deckId: '1'
  },
  {
    id: '3',
    english: 'What time is it?',
    portuguese: 'Que horas são?',
    deckId: '1'
  }
];

export const useCards = (deckId: string) => {
  return useQuery({
    queryKey: ['cards', deckId],
    queryFn: async () => {
      // Use mock data while backend is not available
      return mockCards;
      
      // Uncomment this when backend is available:
      // const { data } = await apiClient.get<Card[]>(`${API_ENDPOINTS.cards}?deckId=${deckId}`);
      // return data;
    },
    enabled: !!deckId,
  });
};
