import React, {useCallback, useEffect, useMemo} from 'react';
import {useForm} from 'react-hook-form';

import useHome from '@/hooks/contexts/useHome';
import {useCreateRoom} from '@/hooks/services/room';
import {RoomCreate} from '@/types/room.type';
import {Button, YStack} from '@/ui';
import {RHFInput, RHFProvider} from '../../common/rhf';

// ----------------------------------------------------------------------

type Props = {
  onSuccess?: () => any;
};

// ----------------------------------------------------------------------

export default function RoomCreateForm(props: Props) {
  const {onSuccess} = props;

  // api state
  const [createRoom, createResponse] = useCreateRoom();

  // context state
  const {home} = useHome();

  // form state
  const defaultValues = useMemo<RoomCreate>(
    () => ({
      title: '',
      homeId: home?.data?.id || '',
    }),
    [home?.data?.id],
  );
  const methods = useForm({defaultValues});
  const {formState, handleSubmit, reset} = methods;

  // handle create room
  const handleCreateRoom = useCallback(
    async (values: RoomCreate) => {
      const response = await createRoom(values);

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
          onPress={handleSubmit(handleCreateRoom)}
          loading={formState?.isSubmitting}>
          Create New
        </Button>
      </YStack>
    </RHFProvider>
  );
}
