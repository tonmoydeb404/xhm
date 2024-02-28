import {Button} from '@rneui/themed';
import React from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import {RHFInput, RHFProvider, RHFSelect} from '../../common/rhf';

export default function DeviceUpdateForm() {
  // form state
  const methods = useForm();
  const {formState, handleSubmit} = methods;
  const {isSubmitting} = formState;

  // handle update device
  const handleUpdateDevice = (values: {}) => {
    console.log({values});
  };

  return (
    <RHFProvider methods={methods}>
      <View style={styles.container}>
        <RHFInput name="title" inputProps={{label: 'Device Title'}} />
        <RHFSelect name="type" options={[{label: 'Light', value: 'LIGHT'}]} />
        <Button
          loading={isSubmitting}
          onPress={handleSubmit(handleUpdateDevice)}>
          Save
        </Button>
      </View>
    </RHFProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 5,
  },
});
