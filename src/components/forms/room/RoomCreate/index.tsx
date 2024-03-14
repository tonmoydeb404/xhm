import React from 'react';
import {useForm} from 'react-hook-form';
import {View} from 'react-native';

import {Button} from '@/ui';
import {RHFInput, RHFProvider} from '../../common/rhf';

export default function RoomCreateForm() {
  // form state
  const methods = useForm();
  const {formState, handleSubmit} = methods;

  // handle create room
  const handleCreateRoom = (values: {}) => {
    console.log({values});
  };

  return (
    <RHFProvider methods={methods}>
      <View>
        <RHFInput name="title" inputProps={{label: 'Room Title'}} />
        <Button onPress={handleSubmit(handleCreateRoom)}>Create New</Button>
      </View>
    </RHFProvider>
  );
}
