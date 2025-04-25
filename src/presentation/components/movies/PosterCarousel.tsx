import React from 'react';
import {View} from 'react-native';
import {Movie} from '../../../core/entities/movie.entity';
import {ScrollView, Text} from 'react-native-gesture-handler';
import {MoviePoster} from './MoviePoster';

interface Props {
  movies: Movie[];
  height?: number;
  title?: string;
}

export const PosterCarousel = ({height = 440, movies, title}: Props) => {
  return (
    <>
      {title && (
        <Text
          style={{
            fontSize: 30,
            fontWeight: 300,
            marginLeft: 10,
            marginBottom: 10,
          }}>
          {title}
        </Text>
      )}
      <View style={{height}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {movies.map(movie => (
            <MoviePoster key={movie.id} movie={movie} />
          ))}
        </ScrollView>
      </View>
    </>
  );
};
