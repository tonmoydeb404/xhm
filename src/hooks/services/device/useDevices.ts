import {getDevices} from '@/lib/supabase/services';
import {UseDevices} from '@/types/device.type';
import {useEffect, useState} from 'react';

const useDevices = (homeId: string | null): UseDevices => {
  const [data, setData] = useState<UseDevices['data']>([]);
  const [isLoading, setIsLoading] = useState<UseDevices['isLoading']>(true);
  const [isError, setIsError] = useState<UseDevices['isError']>(false);

  const resetState = () => {
    setData([]);
    setIsLoading(true);
    setIsError(false);
  };

  const fetchData = async (homeId: string) => {
    // reset state
    resetState();

    const response = await getDevices(homeId);

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
      resetState();
    }
  }, [homeId]);

  return {data, isError, isLoading};
};

export default useDevices;
