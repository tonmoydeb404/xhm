import {getRooms} from '@/lib/supabase/services';
import {UseRooms} from '@/types/room.type';
import {useEffect, useState} from 'react';

const useRooms = (homeId: string | null | undefined): UseRooms => {
  const [data, setData] = useState<UseRooms['data']>([]);
  const [isLoading, setIsLoading] = useState<UseRooms['isLoading']>(true);
  const [isError, setIsError] = useState<UseRooms['isError']>(false);

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

  // fetch data on house id change
  useEffect(() => {
    if (homeId) {
      fetchData(homeId);
    } else {
      emptyState();
    }
  }, [homeId]);

  return {data, isError, isLoading};
};

export default useRooms;
