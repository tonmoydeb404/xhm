import {Auth} from '@/types/auth.type';
import {createContext} from 'react';

export const initialState: Auth = {
  user: null,
  profile: null,
  isAuthenticated: false,
  isLoading: true,
};

const AuthContext = createContext(initialState);

export default AuthContext;
