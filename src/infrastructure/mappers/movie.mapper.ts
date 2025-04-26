import { FullMovie, FullMovieSearch, Movie, Trailer } from '../../core/entities/movie.entity';
import type { MovieDBMovie, Result, TrailerResult } from '../interfaces/movie-db.responses';

export class MovieMapper {
  static fromMovieDBResultToEntity( result: Result ): Movie {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      releaseDate: new Date(result.release_date),
      rating: result.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
    };
  }

  static fromMovieDBToEntity(movie: MovieDBMovie): FullMovie {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      rating: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      genres: movie.genres.map(genre => genre.name),
      duration: movie.runtime,
      budget: movie.budget,
      originalTitle: movie.original_title,
      productionCompany: movie.production_companies.map(company => company.name),
    };
  }

  static fromMOviedDBSearchByNameToEntity(result: Result): FullMovieSearch {
    return{
      id: result.id,
      title: result.title,
      originalTitle: result.original_title,
      description: result.overview,
      releaseDate: new Date(result.release_date),
      rating: result.vote_average,
      poster: result.poster_path ? `https://image.tmdb.org/t/p/w500${result.poster_path}` : '../../assets/img/poster-not-found.png',
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
      voteAvergae: result.vote_average,
    };
  }

  static fromMovieDBGetTrailer(trailer: TrailerResult): Trailer {
    return {
      trailerId: trailer.id,
      name: trailer.name,
      site: trailer.site,
      type: trailer.type,
      trailerKey: trailer.key,
    };
  }

  static fromMovieDBSimilarMovies(result: Result): Movie {
    return{
      id: result.id,
      title: result.title,
      description: result.overview,
      releaseDate: new Date(result.release_date),
      rating: result.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
    };
  }
}
