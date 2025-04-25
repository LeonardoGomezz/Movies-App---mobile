import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { FullMovieSearch } from '../../../core/entities/movie.entity';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/Navigation';
import { RatingStars } from './RatingStars';

interface Props {
  result: FullMovieSearch
}

export const SearchResult = ({result}: Props) => {
   const navigation = useNavigation<NavigationProp<RootStackParams>>();
  console.log('result => ', result);
  return (
    <View>
      <Pressable
       style={{flexDirection: 'row', paddingHorizontal: 10, gap: 10, marginBottom: 10}}
      onPress={() => navigation.navigate('Details', { movieId: result.id })}
      >
      <Image
      style={{width: 70, height: 100}}
      source={{uri: result.poster}}
      />
      <View>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>{result.title}</Text>
      <Text style={{fontSize: 16}}>({result.originalTitle})</Text>
      <RatingStars rating={result.voteAvergae}/>
      </View>
      </Pressable>
    </View>
  );
};
