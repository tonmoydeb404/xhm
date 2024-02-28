import {Picker, PickerProps} from '@react-native-picker/picker';
import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';

type Props = {
  name: string;
  selectProps?: PickerProps;
  options: {label: string; value: string}[];
};

export default function RHFSelect(props: Props) {
  const {name, selectProps = {}, options} = props;

  // form state
  const {control} = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({field}) => (
        <Picker
          {...field}
          {...selectProps}
          selectedValue={field.value}
          onValueChange={v => field.onChange(v)}>
          {options.map(option => (
            <Picker.Item
              value={option.value}
              label={option.label}
              key={option.value}
            />
          ))}
        </Picker>
      )}
    />
  );
}
