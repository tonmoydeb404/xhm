import {getProfiles} from '@/lib/supabase/services';
import {UseMembers} from '@/types/profile.type';
import {useEffect, useState} from 'react';

const useMembers = (membersId: string[] | undefined): UseMembers => {
  const [data, setData] = useState<UseMembers['data']>([]);
  const [isLoading, setIsLoading] = useState<UseMembers['isLoading']>(true);
  const [isError, setIsError] = useState<UseMembers['isError']>(false);

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

  const fetchData = async (membersId: string[]) => {
    // reset state
    resetState();

    const response = await getProfiles(membersId);

    // handle error state
    if (!!response?.error) {
      setIsError(true);
      setIsLoading(false);
      return;
    }

    // success state
    if (Array.isArray(response?.data)) {
      setData(response.data);
      setIsLoading(false);
    }
  };

  // fetch data on house id change
  useEffect(() => {
    if (membersId?.length) {
      fetchData(membersId);
    } else {
      emptyState();
    }
  }, [membersId]);

  return {data, isError, isLoading};
};

export default useMembers;
