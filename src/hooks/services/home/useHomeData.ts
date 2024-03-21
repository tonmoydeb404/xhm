import {getHome} from '@/lib/supabase/services';
import {UseHome} from '@/types/home.type';
import {useEffect, useState} from 'react';

const useHomeData = (homeId: string | null): UseHome => {
  const [data, setData] = useState<UseHome['data']>(undefined);
  const [isLoading, setIsLoading] = useState<UseHome['isLoading']>(true);
  const [isError, setIsError] = useState<UseHome['isError']>(false);

  const resetState = () => {
    setData(undefined);
    setIsLoading(true);
    setIsError(false);
  };

  const fetchData = async (id: string) => {
    // reset state
    resetState();

    const response = await getHome(id);

    // handle error state
    if (!!response?.error) {
      console.error('ERROR: ', response.error);

      setIsError(true);
      setIsLoading(false);
      return;
    }

    if (response?.data) {
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

export default useHomeData;
