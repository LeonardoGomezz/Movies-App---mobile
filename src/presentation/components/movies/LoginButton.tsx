import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useAuth0 } from 'react-native-auth0';

export const LoginButton = () => {
  const {authorize} = useAuth0();

  const onPress = async () => {
    try {
        await authorize();
    } catch (e) {
        console.log(e);
    }
};

  return (
    <View>
      <Pressable onPress={onPress}>
      <Text>LoginButton</Text>
      </Pressable>
    </View>
  );
};
