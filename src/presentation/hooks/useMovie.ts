/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import * as UseCases from '../../core/use-cases';
import { movieDBfetcher } from '../../config/adapters/movieDB.adapter';
import { FullMovie } from '../../core/entities/movie.entity';
import { Cast } from '../../core/entities/cast.entity';

export const useMovie = (movieId: number) => {
  const [isLoading, setisLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>();

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async() => {
    setisLoading(true);
    const fullMoviePromise = UseCases.getMovieByIdUsecase( movieDBfetcher ,movieId);
    const castPropmise = UseCases.getMovieCastUseCase(movieDBfetcher, movieId);

    const [fullMovie, cast] = await Promise.all([ fullMoviePromise, castPropmise]);
    setMovie(fullMovie);
    setCast(cast);
    setisLoading(false);
  };

  return {
    isLoading,
    movie,
    cast,

  };
};
