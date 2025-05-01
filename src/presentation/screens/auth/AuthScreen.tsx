import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { LoginButton } from '../../components/movies/LoginButton';

export const AuthScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
        style={styles.image}
        source={require('../../../assets/img/movies-app-logo.png')}
        />
      <Text style={styles.title}>Movies App</Text>
      </View>
      <LoginButton/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
