
import React from 'react';
import { Text, View } from 'react-native';
import { FullMovie, Movie } from '../../../core/entities/movie.entity';
import { Formatter } from '../../../config/helpers/formatter';
import { Cast } from '../../../core/entities/cast.entity';
import { FlatList } from 'react-native-gesture-handler';
import { CastActor } from '../cast/CastActor';
import { TrailerPlayer } from './TrailerPlayer';
import { HorizontalCarousel } from '../movies/HorizontalCarousel';

interface Props {
  movie: FullMovie
  cast: Cast[]
  trailerId: string
  similarMovies: Movie[]
}
export const MovieDetails = ({movie, cast, trailerId, similarMovies}: Props) => {
  return (
    <>
    <View style={{ marginHorizontal: 20}}>
      <View style={{flexDirection: 'row'}}>
        <Text>{movie.rating}</Text>
        <Text style={{ marginLeft: 5 }}>
          - {movie.genres.join(', ')}
        </Text>
      </View>

    <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
      Historia
    </Text>
    <Text style={{ fontSize: 16}}>{movie.description}</Text>
    <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>Presupuesto</Text>
    <Text style={{fontSize: 18}}>{Formatter.currency(movie.budget)}</Text>
    </View>

    {/* trailer */}
    {
      trailerId && trailerId !== '' && (
    <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: 10}}>
      <TrailerPlayer videoUrl={trailerId}/>
    </View>

      )
    }

    {/* casting */}
    <View style={{ marginTop: 10}}>
      <Text style={{fontSize: 23, marginVertical: 10, fontWeight: 'bold', marginHorizontal: 20}}>Actores</Text>
      <FlatList
      data={cast}
      keyExtractor={ (item) => item.id.toString()}
      horizontal
      showsVerticalScrollIndicator={false}
      renderItem={ ({item}) => <CastActor actor={item}/>}
      />
    </View>

    {/* Peliculas Similares */}
    <View style={{ marginTop: 10, marginBlock: 50}}>
      <HorizontalCarousel movies={similarMovies} title="Peliculas Similares" />
    </View>
    </>
  );
};
