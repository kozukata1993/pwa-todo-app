import React from 'react';
import firebase from 'firebase';
import { auth } from '../firebase/index';

interface UseAuth {
  isAuthenticated: boolean;
  loading: boolean;
  currentUser: firebase.User | null;
  logout: () => Promise<void>;
}

export const useAuth = (): UseAuth => {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [currentUser, setCurrentUser] = React.useState<firebase.User | null>(null);

  React.useEffect(() => {
    setLoading(true);
    auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setIsAuthenticated(!!user);
      setLoading(false);
      console.log('Hello');
    });
  }, [currentUser]);

  return {
    isAuthenticated,
    loading,
    currentUser,
    logout: async () => await auth().signOut(),
  };
};
