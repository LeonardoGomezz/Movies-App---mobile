import React from 'react';
import {Linking, Pressable, StyleSheet, Text} from 'react-native';

interface Props {
  videoUrl: string;
}

export const TrailerPlayer = ({videoUrl}: Props) => {
  const handlePress = () => {
    Linking.openURL(`https://www.youtube.com/watch?v=${videoUrl}`);
  };
  return (
    <Pressable
      onPress={handlePress}
      style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}>
      <Text style={styles.buttonText}>Ver Trailer</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ff0000', // color tipo YouTube
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonPressed: {
    backgroundColor: '#cc0000', // color un poco más oscuro al presionar
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
