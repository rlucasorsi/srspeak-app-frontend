
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const API_ENDPOINTS = {
  login: '/auth/login',
  decks: '/decks',
  cards: '/cards',
  modules: '/modules',
  students: '/students',
} as const;

export const getApiUrl = (endpoint: keyof typeof API_ENDPOINTS) => {
  return `${API_BASE_URL}${API_ENDPOINTS[endpoint]}`;
};
