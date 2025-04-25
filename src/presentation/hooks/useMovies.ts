import {useEffect, useState} from 'react';
import {FullMovieSearch, Movie} from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';
import {movieDBfetcher, movieDBSearchfetcher} from '../../config/adapters/movieDB.adapter';

let popularPageNumber = 1;
let topRatedPageNumber = 1;
let upcomingPageNumber = 1;

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [movieName, setMovieName] = useState<string>('');
  const [searchResults, setSearchResults] = useState<FullMovieSearch[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBfetcher);
    const popularPromise = UseCases.moviesPopularUseCase(movieDBfetcher);
    const topRatedPromise = UseCases.moviesTopRatedUseCase(movieDBfetcher);
    const upcomingPromise = UseCases.moviesUpcomingUseCase(movieDBfetcher);

    const [
      nowPlayingMovies,
      popularMovies,
      topRatedMovies,
      upcomingMovies,
    ] = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);
    setNowPlaying(nowPlayingMovies);
    setPopular(popularMovies);
    setTopRated(topRatedMovies);
    setUpcoming(upcomingMovies);
    setIsLoading(false);
  };

   // 🔍 Buscar cuando cambia movieName
   useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (movieName.trim().length > 0) {
        searchMovieByName(movieName);
      } else {
        setSearchResults([]);
      }
    }, 500); // 500ms debounce

    return () => clearTimeout(delayDebounce);
  }, [movieName]);

  const searchMovieByName = async (query: string) => {
    try {
      const results = await UseCases.searchMovieByNameUseCase(movieDBSearchfetcher, query);
      setSearchResults(results);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,
    movieName,
    setMovieName,
    searchResults,

    //methods
    popularNextPage: async() => {
      popularPageNumber++;
      const popularMovies = await UseCases.moviesPopularUseCase( movieDBfetcher, {
        page: popularPageNumber,
      });
      setPopular( prev => [...prev, ...popularMovies]);
    },

    topRatedNextPage: async() => {
      topRatedPageNumber++;
      const topRatedMovies = await UseCases.moviesTopRatedUseCase( movieDBfetcher, {
        page: topRatedPageNumber,
      });
      setTopRated( prev => [...prev, ...topRatedMovies]);
    },

    upcomingNextPage: async() => {
      upcomingPageNumber++;
      const upcomingMovies = await UseCases.moviesUpcomingUseCase( movieDBfetcher, {
        page: upcomingPageNumber,
      });
      setUpcoming( prev => [...prev, ...upcomingMovies]);
    },
  };
};
