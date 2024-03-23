import {getRooms} from '@/lib/supabase/services';
import {UseRooms} from '@/types/room.type';
import {useCallback, useEffect, useState} from 'react';

const useRooms = (homeId: string | null | undefined): UseRooms => {
  const [data, setData] = useState<UseRooms['data']>([]);
  const [isLoading, setIsLoading] = useState<UseRooms['isLoading']>(true);
  const [isError, setIsError] = useState<UseRooms['isError']>(false);

  // ACTIONS ----------------------------------------------------------------------

  const resetState = () => {
    setData([]);
    setIsLoading(true);
    setIsError(false);
  };

  const emptyState = () => {
    setData([]);
    setIsLoading(false);
    setIsError(false);
  };

  const fetchData = async (homeId: string) => {
    // reset state
    resetState();

    const response = await getRooms(homeId);

    // handle error state
    if (!!response?.error) {
      setIsError(true);
      setIsLoading(false);
      return;
    }

    if (Array.isArray(response?.data)) {
      setData(response.data);
      setIsLoading(false);
    }
  };

  const insert = useCallback<UseRooms['insert']>(room => {
    setData(prev => {
      const prevData = [...prev];
      prevData.push(room);
      return prevData;
    });
  }, []);

  const update = useCallback<UseRooms['update']>((id, updates) => {
    setData(prev => {
      const prevData = [...prev];

      const updateIndex = prevData.findIndex(p => p.id === id);

      if (updateIndex === -1) return prevData;

      prevData[updateIndex] = {...prev[updateIndex], ...updates};
      return prevData;
    });
  }, []);

  // fetch data on house id change
  useEffect(() => {
    if (homeId) {
      fetchData(homeId);
    } else {
      emptyState();
    }
  }, [homeId]);

  return {data, isError, isLoading, insert, update};
};

export default useRooms;
