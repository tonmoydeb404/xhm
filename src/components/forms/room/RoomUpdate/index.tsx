import {useUpdateRoom} from '@/hooks/services/room';
import {Room, RoomUpdate} from '@/types/room.type';
import {Button, YStack} from '@/ui';
import React, {useCallback, useEffect, useMemo} from 'react';
import {useForm} from 'react-hook-form';
import {RHFInput, RHFProvider} from '../../common/rhf';
import DeviceOptions from '../common/DeviceOptions';

// ----------------------------------------------------------------------

type Props = {
  onSuccess?: () => any;
  room: Room;
};

// ----------------------------------------------------------------------

export default function RoomUpdateForm(props: Props) {
  const {onSuccess, room} = props;

  // api state
  const [updateRoom, updateResponse] = useUpdateRoom();

  // form state
  const defaultValues = useMemo<RoomUpdate>(
    () => ({
      title: room?.title || '',
      devices: room?.devices || [],
    }),
    [room?.title],
  );
  const methods = useForm();
  const {formState, handleSubmit, reset} = methods;

  // handle update room
  const handleUpdateRoom = useCallback(
    async (values: RoomUpdate) => {
      const response = await updateRoom(room?.id, values);

      // handle success
      if (!!response.data) {
        if (onSuccess) onSuccess();
      }
    },
    [onSuccess],
  );

  // reset values on updated default value
  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues]);

  return (
    <RHFProvider methods={methods}>
      <YStack style={{rowGap: 15}}>
        <RHFInput
          name="title"
          inputProps={{label: 'Room Title', mode: 'outlined'}}
        />

        <DeviceOptions label="Devices" name="devices" />

        <Button
          style={{marginTop: 30}}
          mode="contained"
          onPress={handleSubmit(handleUpdateRoom)}
          loading={formState?.isSubmitting}>
          Update
        </Button>
      </YStack>
    </RHFProvider>
  );
}
