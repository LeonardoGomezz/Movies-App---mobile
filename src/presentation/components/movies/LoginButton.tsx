import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useAuth } from '../../hooks/useAuth';

export const LoginButton = () => {
  const {onLogin, onLogout} = useAuth();


  return (
    <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'center', gap: 30 }}>
      <Pressable onPress={onLogin}>
        <Text>LoginButton</Text>
      </Pressable>
      <Pressable onPress={onLogout}>
        <Text>LogoutButton</Text>
      </Pressable>
    </View>
  );
};
