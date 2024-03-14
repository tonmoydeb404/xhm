import {Button} from '@/ui';
import React from 'react';
import {useForm} from 'react-hook-form';
import {View} from 'react-native';
import {RHFInput, RHFProvider} from '../../common/rhf';

export default function UserAddForm() {
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
        <RHFInput name="email" inputProps={{label: 'User Email'}} />
        <Button loading={isSubmitting} onPress={handleSubmit(handleCreateRoom)}>
          Add
        </Button>
      </View>
    </RHFProvider>
  );
}
