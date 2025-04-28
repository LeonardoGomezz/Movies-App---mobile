import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import '../gesture-handler';
import { Navigation } from './presentation/navigation/Navigation';
import { Auth0Provider } from 'react-native-auth0';
import { AuthScreen } from './presentation/screens/auth/AuthScreen';
import { useAuth } from './presentation/hooks/useAuth';

export const App = () => {
  return (
    <Auth0Provider domain={'dev-7e8ftc6eru65fj3k.us.auth0.com'} clientId={'BKYOjkA0BST7PIqnykwVB8CwnMaatjTI'}>
      <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
    </Auth0Provider>
  );
};

const RootNavigator = () => {
  const { loggedIn } = useAuth();

  return loggedIn ? <Navigation /> : <AuthScreen />;
};
