import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieDBMoviesResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import type { Movie } from '../../entities/movie.entity';

interface Options {
  page?: number
  limit?: number
}

export const moviesTopRatedUseCase = async( fetcher: HttpAdapter, options?: Options ): Promise<Movie[]> => {
  try {
    const topRated = await fetcher.get<MovieDBMoviesResponse>('/top_rated', {
      params: {
        page: options?.page ?? 1,
      },
    });

    return topRated.results.map( result => MovieMapper.fromMovieDBResultToEntity(result));

  } catch (error) {
    console.error(error);
    throw new Error('Error fetching movies - topRatedUseCase');
  }
};
