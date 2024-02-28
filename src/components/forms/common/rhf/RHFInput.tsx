import {InputProps} from '@rneui/base';
import {Input} from '@rneui/themed';
import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';

type Props = {
  name: string;
  inputProps: InputProps;
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
        <Input
          onChangeText={t => field.onChange(t)}
          value={field.value}
          errorMessage={fieldState?.error?.message}
          {...inputProps}
        />
      )}
    />
  );
}
