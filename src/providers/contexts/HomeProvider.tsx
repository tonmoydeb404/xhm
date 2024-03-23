import homeContext, {initialState} from '@/contexts/homeContext';
import {useDevices} from '@/hooks/services/device';
import {useHomeData} from '@/hooks/services/home';
import {useMembers} from '@/hooks/services/members';
import {useRooms} from '@/hooks/services/room';
import {supabase} from '@/lib/supabase';
import {tables} from '@/lib/supabase/config';
import {getHome} from '@/lib/supabase/services';

import {HomeContext} from '@/types/home.type';
import {Room} from '@/types/room.type';
import log from '@/utils/log';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  RealtimePostgresInsertPayload,
  RealtimePostgresUpdatePayload,
} from '@supabase/supabase-js';
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

  // get room by id
  const getRoom = useCallback(
    (id: string) => {
      if (rooms.isLoading || rooms.isError || !Array.isArray(rooms.data))
        return undefined;
      if (!id) return undefined;

      return rooms.data.find(r => r.id === id);
    },
    [rooms?.isLoading, rooms?.isError, rooms?.data],
  );

  // handle new room insert
  const handleRoomInsert = useCallback(
    (payload: RealtimePostgresInsertPayload<Room>) => {
      const newRoom = payload.new;

      if (!newRoom || !!payload.errors?.length) return;

      rooms.insert(newRoom);
    },
    [rooms.insert],
  );

  // handle room update
  const handleRoomUpdate = useCallback(
    (payload: RealtimePostgresUpdatePayload<Room>) => {
      const updatedRoom = payload.new;

      if (!updatedRoom || !!payload.errors?.length) return;

      rooms.update(updatedRoom.id, updatedRoom);
    },
    [rooms.update],
  );

  // Effect ----------------------------------------------------------------------

  // get initial id
  useEffect(() => {
    initialHomeId();
  }, []);

  // realtime updates feature
  useEffect(() => {
    const channel = supabase
      .channel('XHM-APP')
      .on(
        'postgres_changes',
        {event: 'INSERT', schema: 'public', table: tables.ROOMS},
        handleRoomInsert,
      )
      .on(
        'postgres_changes',
        {event: 'UPDATE', schema: 'public', table: tables.ROOMS},
        handleRoomUpdate,
      )
      .subscribe((status, error) => {
        log.info('Realtime: ', {status, error});
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, [handleRoomInsert, handleRoomUpdate]);

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
      getRoom,
    }),
    [home, devices, homeId, updateHomeId, getRoom],
  );

  return <homeContext.Provider value={value}>{children}</homeContext.Provider>;
};

export default HomeProvider;
