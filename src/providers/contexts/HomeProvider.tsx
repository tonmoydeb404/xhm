import homeContext, {initialState} from '@/contexts/homeContext';
import {useDevices} from '@/hooks/services/device';
import {useHomeData} from '@/hooks/services/home';
import {useMembers} from '@/hooks/services/members';
import {useRooms} from '@/hooks/services/room';
import {getHome} from '@/lib/supabase/services';

import {HomeContext} from '@/types/home.type';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

// ----------------------------------------------------------------------

const HOME_ID = 'HOME_ID';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

const HomeProvider = (props: Props) => {
  // common state
  const {children} = props;

  // app state
  const [homeId, setHomeId] = useState(initialState.homeId);
  const home = useHomeData(homeId);
  const devices = useDevices(homeId);
  const rooms = useRooms(homeId);
  const members = useMembers(home?.data?.members);

  // Actions ----------------------------------------------------------------------

  // update home id
  const updateHomeId: HomeContext['updateHomeId'] = useCallback(async id => {
    setHomeId(id || null);

    try {
      if (typeof id === 'string' && id) {
        await AsyncStorage.setItem(HOME_ID, id);
      } else {
        await AsyncStorage.removeItem(HOME_ID);
      }
    } catch (error) {
      console.error('Error: ', error);
    }
  }, []);

  // get initial home id
  const initialHomeId = useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem(HOME_ID);

      if (!value) return;

      const response = await getHome(value);

      // error state
      if (!!response?.error) return;

      // success state
      if (!!response.data) {
        setHomeId(value);
      }
    } catch (error) {
      console.error('Error: ', error);
    }
  }, []);

  // memorized value
  const value: HomeContext = useMemo(
    () => ({
      homeId,
      home,
      devices,
      members,
      rooms,

      // actions
      updateHomeId,
    }),
    [home, devices, homeId, updateHomeId],
  );

  // get initial id
  useEffect(() => {
    initialHomeId();
  }, []);

  return <homeContext.Provider value={value}>{children}</homeContext.Provider>;
};

export default HomeProvider;
