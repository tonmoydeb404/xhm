import AuthContext from '@/contexts/AuthContext';
import {useContext} from 'react';

const useAuth = () => {
  const value = useContext(AuthContext);

  if (value === undefined) {
    console.error('Auth Provider should wrap other components');
  }

  return value;
};

export default useAuth;
