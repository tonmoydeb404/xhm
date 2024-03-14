import {TextInput, TextInputProps} from '@/ui';
import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';

type Props = {
  name: string;
  inputProps: TextInputProps;
};

export default function RHFInput(props: Props) {
  const {name, inputProps} = props;

  // form state
  const {control} = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({field, fieldState}) => (
        <TextInput
          onChangeText={t => field.onChange(t)}
          value={field.value}
          error={!!fieldState?.error?.message}
          {...inputProps}
        />
      )}
    />
  );
}
