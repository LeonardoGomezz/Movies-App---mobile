import { THE_MOVIE_DB_KEY } from '@env';
import { AxiosAdapter } from './http/axios.adapter';

const API_KEY = THE_MOVIE_DB_KEY;

export const movieDBfetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: API_KEY,
    language: 'es',
  },
});

export const movieDBSearchfetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/search',
  params: {
    api_key: API_KEY,
    language: 'es',
  },
});
