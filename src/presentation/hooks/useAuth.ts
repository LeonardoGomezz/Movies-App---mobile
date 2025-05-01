import { useAuth0 } from 'react-native-auth0';

export const useAuth = () => {
  const { authorize, clearSession, user } = useAuth0();

  const loggedIn = user !== undefined && user !== null;

  const onLogin = async () => {
    try {
      await authorize().then(res => {
        console.log('res => ', res);
      });
    } catch (error) {
      console.log('Login error: ', error);
    }
  };

  const onLogout = async () => {
    try {
      await clearSession();
    } catch (error) {
      console.log('Logout error: ', error);
    }
  };

  return {
    user,
    loggedIn,
    onLogin,
    onLogout,
  };
};
