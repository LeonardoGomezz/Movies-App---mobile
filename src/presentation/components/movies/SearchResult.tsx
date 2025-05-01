import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { FullMovieSearch } from '../../../core/entities/movie.entity';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/Navigation';
import { RatingStars } from './RatingStars';

interface Props {
  result: FullMovieSearch
}

export const SearchResult = ({ result }: Props) => {
   const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate('Details', { movieId: result.id })}
      >
        <Image
          style={styles.image}
          source={{ uri: result.poster }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>
            {result.title}
          </Text>
          <Text style={styles.originalTitleText}>
            {`(${result.originalTitle})`}
          </Text>
          <RatingStars rating={result.voteAvergae} />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
  pressable: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    gap: 10,
    marginBottom: 10,
    width: '100%',
  },
  image: {
    width: 70,
    height: 100,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingRight: 10,
    flexShrink: 1,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    width: '100%',
    flexWrap: 'wrap',
    flexShrink: 1,
  },
  originalTitleText: {
    fontSize: 16,
    width: '100%',
    flexWrap: 'wrap',
    flexShrink: 1,
  },
});
