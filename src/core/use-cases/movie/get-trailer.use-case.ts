import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieTrailerResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { Trailer } from '../../entities/movie.entity';

export const getMovieTrailerUseCase = async(fetcher: HttpAdapter, movieId: number):Promise<Trailer[]> => {
  try {
    const {results} = await fetcher.get<MovieTrailerResponse>(`/${movieId}/videos`);
    const trailer = results.map(MovieMapper.fromMovieDBGetTrailer);
    return trailer;
  } catch (error) {
    throw new Error('cannot find trailer to this movie');
  }
};
