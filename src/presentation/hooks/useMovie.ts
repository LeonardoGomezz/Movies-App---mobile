/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import * as UseCases from '../../core/use-cases';
import { movieDBfetcher } from '../../config/adapters/movieDB.adapter';
import { FullMovie, Movie, Trailer } from '../../core/entities/movie.entity';
import { Cast } from '../../core/entities/cast.entity';

export const useMovie = (movieId: number) => {
  const [isLoading, setisLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>();
  const [trailer, setTrailer] = useState<Trailer[]>();
  const [similarMovies, setSimilarMovies] = useState<Movie[]>();

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async() => {
    setisLoading(true);
    const fullMoviePromise = UseCases.getMovieByIdUsecase( movieDBfetcher ,movieId);
    const castPropmise = UseCases.getMovieCastUseCase(movieDBfetcher, movieId);
    const trailerPromise = UseCases.getMovieTrailerUseCase(movieDBfetcher, movieId);
    const similarMoviesPromise = UseCases.similarsMoviesUseCase(movieDBfetcher, movieId);

    const [fullMovie, cast, trailer, similarMovies] = await Promise.all([ fullMoviePromise, castPropmise, trailerPromise, similarMoviesPromise]);
    setMovie(fullMovie);
    setCast(cast);
    setisLoading(false);
    setTrailer(trailer);
    setSimilarMovies(similarMovies);
  };

  const oficialTrailer = trailer?.find((trailer) => trailer.type === 'Trailer');

  return {
    isLoading,
    movie,
    cast,
    oficialTrailer,
    similarMovies,
  };
};
