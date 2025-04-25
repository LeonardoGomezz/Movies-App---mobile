import Icon from '@react-native-vector-icons/ionicons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  rating: number
}

export const RatingStars = ({rating}: Props) => {
  if (typeof rating !== 'number') {return null;}
  const stars = Math.round(rating / 2);
  return (
    <View style={styles.container}>
      <View style={styles.stars}>
        {[...Array(5)].map((_, index) => (
          <Icon
            key={index}
            name={index < stars ? 'star' : 'star-outline'}
            size={20}
            color="#FFD700"
          />
        ))}
      </View>
      <Text style={styles.text}>{rating.toFixed(1)} / 10</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  stars: {
    flexDirection: 'row',
    marginRight: 6,
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
});
