import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useAuth} from '../../hooks/useAuth';

export const LoginButton = () => {
  const {onLogin} = useAuth();

  return (
    <View
      style={{
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 30,
      }}>
      <Pressable
        onPress={onLogin}
        style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}>
        <Text style={styles.title}>Ingresar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6366F1',
    paddingHorizontal: 50,
    paddingVertical: 5,
    borderRadius: 10,
  },
  buttonPressed: {
    backgroundColor: '#4F52DC',
  },
  title: {
    fontSize: 18,
    fontWeight: 'semibold',
  },
});
