import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieDBMoviesResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { Movie } from '../../entities/movie.entity';

export const similarsMoviesUseCase = async(fetcher: HttpAdapter, movieId: number):Promise<Movie[]> => {
  try {
    const similarMovies = await fetcher.get<MovieDBMoviesResponse>(`/${movieId}/similar`);
    return similarMovies.results.map(result => MovieMapper.fromMovieDBSimilarMovies(result));
  } catch (error) {
    throw new Error('Cannot fout similar movies');
  }
};
