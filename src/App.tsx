import {NavigationContainer} from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import '../gesture-handler';
import { Navigation } from './presentation/navigation/Navigation';
import { createUser, onAuthStateChanged, signInUser } from './firebase';
import { Button, Text, View } from 'react-native';

export const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<any>(null);

  // Maneja los cambios de estado de autenticación
  const handleAuthStateChanged = (user: any) => {
    setUser(user);
    if (initializing) {setInitializing(false);}
  };

  // Suscríbete a los cambios en el estado de autenticación
  useEffect(() => {
    const subscriber = onAuthStateChanged(handleAuthStateChanged);
    return subscriber; // Desuscribirse al desmontar el componente
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initializing]);

  if (initializing) {
    return null; // Muestra una pantalla de carga mientras Firebase se conecta
  }

  if (!user) {
    return (
      <View>
        <Text>No estás autenticado</Text>
        <Button title="Crear cuenta" onPress={() => createUser('jane.doe@example.com', 'SuperSecretPassword!')} />
        <Button title="Iniciar sesión" onPress={() => signInUser('jane.doe@example.com', 'SuperSecretPassword!')} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  );
};
