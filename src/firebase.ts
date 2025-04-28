import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: 'your-api-key',
  authDomain: 'your-auth-domain',
  projectId: 'your-project-id',
  storageBucket: 'your-storage-bucket',
  messagingSenderId: 'your-messaging-sender-id',
  appId: 'your-app-id',
  measurementId: 'your-measurement-id',
};

// Inicialización de Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);  // Solo inicializa si aún no está inicializado
} else {
  firebase.app();  // Usa la app si ya está inicializada
}

// Las funciones de autenticación
export const createUser = async (email: string, password: string) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
    console.log('Usuario creado e iniciado sesión');
  } catch (error) {
    console.error(error);
  }
};

export const signInUser = async (email: string, password: string) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
    console.log('Usuario autenticado');
  } catch (error) {
    console.error(error);
  }
};

export const onAuthStateChanged = (setUser: React.Dispatch<React.SetStateAction<any>>) => {
  return auth().onAuthStateChanged(user => {
    setUser(user);  // Almacena el usuario en el estado
  });
};

export const signOutUser = async () => {
  try {
    await auth().signOut();
    console.log('Usuario desconectado');
  } catch (error) {
    console.error(error);
  }
};
