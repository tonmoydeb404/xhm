import authContext from '@/contexts/authContext';
import {useContext} from 'react';

const useAuth = () => {
  const value = useContext(authContext);

  if (value === undefined) {
    console.error('Auth Provider should wrap other components');
  }

  return value;
};

export default useAuth;
