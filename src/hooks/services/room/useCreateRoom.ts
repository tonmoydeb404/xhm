import {createRoom} from '@/lib/supabase/services';
import {ServiceReturn} from '@/types/hook.type';
import {Room, RoomCreate} from '@/types/room.type';
import log from '@/utils/log';
import {useState} from 'react';

const useCreateRoom = () => {
  const [data, setData] = useState<undefined | Room>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<any | null>(null);

  const resetState = () => {
    setData(undefined);
    setIsLoading(true);
    setIsError(false);
    setError(null);
  };

  const action = async (data: RoomCreate) => {
    log.info('Room Create', data);

    // reset state
    resetState();

    const response = await createRoom(data);

    // handle error state
    if (!!response?.error) {
      log.error(response.error, response);

      setError(response.error);
      setIsError(true);
      setIsLoading(false);
    }
    // handle success state
    else if (response?.data) {
      log.success('Room created successfully', response?.data);
      setData(response.data);
      setIsLoading(false);
    }

    return response;
  };

  return [action, {data, isLoading, isError, error}] as ServiceReturn<
    typeof action,
    Room | undefined
  >;
};

export default useCreateRoom;
