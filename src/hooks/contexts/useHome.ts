import homeContext from '@/contexts/homeContext';
import {useContext} from 'react';

const useHome = () => {
  const value = useContext(homeContext);

  if (value === undefined) {
    console.error('Home Provider should wrap other components');
  }

  return value;
};

export default useHome;
