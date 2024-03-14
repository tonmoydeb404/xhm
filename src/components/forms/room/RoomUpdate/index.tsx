import {Button, YStack} from '@/ui';
import React from 'react';
import {useForm} from 'react-hook-form';
import {RHFInput, RHFProvider} from '../../common/rhf';

export default function RoomUpdateForm() {
  // form state
  const methods = useForm();
  const {formState, handleSubmit} = methods;
  const {isSubmitting} = formState;

  // handle create room
  const handleCreateRoom = (values: {}) => {
    console.log({values});
  };

  return (
    <RHFProvider methods={methods}>
      <YStack>
        <RHFInput name="title" inputProps={{label: 'Room Title'}} />
        <Button loading={isSubmitting} onPress={handleSubmit(handleCreateRoom)}>
          Update
        </Button>
      </YStack>
    </RHFProvider>
  );
}
