import {useUpdateRoom} from '@/hooks/services/room';
import {Room, RoomUpdate} from '@/types/room.type';
import {Button, YStack} from '@/ui';
import React, {useCallback, useEffect, useMemo} from 'react';
import {useForm} from 'react-hook-form';
import {RHFInput, RHFProvider} from '../../common/rhf';

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
    }),
    [room?.title],
  );
  const methods = useForm();
  const {formState, handleSubmit, reset} = methods;
  const {isSubmitting} = formState;

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
      <YStack>
        <RHFInput
          name="title"
          inputProps={{label: 'Room Title', mode: 'outlined'}}
        />
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
