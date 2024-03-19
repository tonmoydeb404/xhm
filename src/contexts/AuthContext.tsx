import {Auth} from '@/types/auth.type';
import {createContext} from 'react';

export const initialState: Auth = {
  user: null,
  profile: null,
  isAuthenticated: false,
  isLoading: true,
  signInWithGoogle: (() => {}) as any,
  signOut: (() => {}) as any,
};

const AuthContext = createContext(initialState);

export default AuthContext;
