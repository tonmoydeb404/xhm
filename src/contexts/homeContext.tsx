import {HomeContext} from '@/types/home.type';
import {createContext} from 'react';

export const initialState: HomeContext = {
  homeId: null,
  devices: {
    data: [],
    isError: false,
    isLoading: true,
  },
  home: {
    data: undefined,
    isError: false,
    isLoading: true,
  },
  members: {
    data: [],
    isError: false,
    isLoading: true,
  },
  rooms: {
    data: [],
    isError: false,
    isLoading: true,
  },

  updateHomeId: id => {},
};

const homeContext = createContext(initialState);

export default homeContext;
