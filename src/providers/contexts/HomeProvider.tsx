import homeContext, {initialState} from '@/contexts/homeContext';
import {useDevices} from '@/hooks/services/device';
import {useHomeData} from '@/hooks/services/home';

import {HomeContext} from '@/types/home.type';
import React, {ReactNode, useCallback, useMemo, useState} from 'react';

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

  // Actions ----------------------------------------------------------------------

  // update home id
  const updateHomeId: HomeContext['updateHomeId'] = useCallback(id => {
    setHomeId(id || null);
  }, []);

  // memorized value
  const value: HomeContext = useMemo(
    () => ({
      home,
      devices,
      homeId,
      members: initialState.members,
      rooms: initialState.rooms,

      // actions
      updateHomeId,
    }),
    [home, devices, homeId, updateHomeId],
  );

  return <homeContext.Provider value={value}>{children}</homeContext.Provider>;
};

export default HomeProvider;
