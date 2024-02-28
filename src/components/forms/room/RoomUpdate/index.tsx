import {Button} from '@rneui/themed';
import React from 'react';
import {useForm} from 'react-hook-form';
import {View} from 'react-native';
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
      <View>
        <RHFInput name="title" inputProps={{label: 'Room Title'}} />
        <Button loading={isSubmitting} onPress={handleSubmit(handleCreateRoom)}>
          Create New
        </Button>
      </View>
    </RHFProvider>
  );
}
