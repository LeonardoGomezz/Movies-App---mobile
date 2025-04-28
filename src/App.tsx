import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import '../gesture-handler';
import { Navigation } from './presentation/navigation/Navigation';
import {useAuth0, Auth0Provider} from 'react-native-auth0';

export const App = () => {
  const {authorize} = useAuth0();
  console.log('useAuth => ', authorize);
  return (
    <Auth0Provider domain={'dev-7e8ftc6eru65fj3k.us.auth0.com'} clientId={'BKYOjkA0BST7PIqnykwVB8CwnMaatjTI'}>
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
    </Auth0Provider>
  );
};
