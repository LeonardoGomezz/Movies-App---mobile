export interface Movie {
  id: number
  title: string
  description: string
  releaseDate: Date
  rating: number
  poster: string
  backdrop: string
}

export interface FullMovie extends Movie {
  genres: string[]
  duration: number
  budget: number
  originalTitle: string
  productionCompany: string[]
}


export interface FullMovieSearch extends Movie {
  originalTitle: string
  voteAvergae: number
}

export interface Trailer {
  name: string
  trailerKey: string
  site: string
  type: string
  trailerId: string
}
