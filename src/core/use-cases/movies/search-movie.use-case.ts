import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { SearchMovieByNameResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { FullMovieSearch } from '../../entities/movie.entity';

export const searchMovieByNameUseCase = async(fetcher: HttpAdapter, movieName: string):Promise<FullMovieSearch[]> => {
  try {
    const result = await fetcher.get<SearchMovieByNameResponse>(`/movie?query=${movieName}`);
    return result.results.map(results => MovieMapper.fromMOviedDBSearchByNameToEntity(results));
  } catch (error) {
    throw new Error(`cannot find result to ${movieName}`);
  }
};
