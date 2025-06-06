import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { RootStackParams } from '../../navigation/Navigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { ScrollView } from 'react-native-gesture-handler';
import { MovieDetails } from '../../components/movie/MovieDetails';
import { FullScreenLoader } from '../../components/loader/FullScreenLoader';

interface Props extends StackScreenProps<RootStackParams, 'Details'>{}

export const DetailsScreen = ({ route }: Props) => {
  const { movieId } = route.params;
  const {isLoading ,movie, cast = [], oficialTrailer, similarMovies = []} = useMovie(movieId);

   if ( isLoading ) {
      return <FullScreenLoader/>;
    }
  return (
    <ScrollView>
      <MovieHeader
      poster={movie!.poster}
      originalTitle={movie!.originalTitle}
      title={movie!.title}
      />

      <MovieDetails movie={movie!} cast={cast} trailerId={oficialTrailer?.trailerKey ?? ''} similarMovies={similarMovies}/>
    </ScrollView>
  );
};
