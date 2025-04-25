import { THE_MOVIE_DB_KEY } from '@env';
import { AxiosAdapter } from './http/axios.adapter';

export const movieDBfetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: THE_MOVIE_DB_KEY,
    language: 'es',
  },
});

export const movieDBSearchfetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/search',
  params: {
    api_key: THE_MOVIE_DB_KEY,
    language: 'es',
  },
});
