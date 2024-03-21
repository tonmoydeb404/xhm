import {AuthContext} from '@/types/auth.type';
import {createContext} from 'react';

export const initialState: AuthContext = {
  user: null,
  profile: null,
  isAuthenticated: false,
  isLoading: true,
  signInWithGoogle: (() => {}) as any,
  signOut: (() => {}) as any,
};

const authContext = createContext(initialState);

export default authContext;
