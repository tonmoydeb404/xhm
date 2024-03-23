import {Checkbox, CheckboxItemProps, CheckboxProps, Text, YStack} from '@/ui';
import React, {useCallback, useMemo} from 'react';
import {Controller, useFormContext} from 'react-hook-form';

// ----------------------------------------------------------------------

type Common = {
  name: string;
  checked?: boolean;
  onChange?: () => any;
};

type ItemProps = {
  label: string;
  checkboxProps?: Omit<CheckboxItemProps, 'status' | 'label'>;
};

type BoxProps = {
  label: undefined;
  checkboxProps?: Omit<CheckboxProps, 'status'>;
};

type Props = (ItemProps | BoxProps) & Common;

export default function RHFCheckbox(props: Props) {
  const {name, checkboxProps, label, checked, onChange} = props;

  // form state
  const {control} = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({field, fieldState}) => {
        const status = checked !== undefined ? checked : field.value;

        return (
          <YStack>
            {label ? (
              <Checkbox.Item
                label={label}
                status={status ? 'checked' : 'unchecked'}
                onPress={e =>
                  onChange ? onChange() : field.onChange(!field.value)
                }
                {...checkboxProps}
              />
            ) : (
              <Checkbox
                status={status ? 'checked' : 'unchecked'}
                onPress={e =>
                  onChange ? onChange() : field.onChange(!field.value)
                }
                {...checkboxProps}
              />
            )}
            {!!fieldState?.error?.message && (
              <Text variant="labelSmall">{fieldState?.error?.message}</Text>
            )}
          </YStack>
        );
      }}
    />
  );
}

// ----------------------------------------------------------------------

type ArrayProps = (ItemProps | BoxProps) & {name: string; value: any};

export function RHFArrayCheckbox(props: ArrayProps) {
  const {name, checkboxProps, label, value} = props;

  // form state
  const {watch, setValue} = useFormContext();
  const arrayValue = watch(name, []);

  // Actions ----------------------------------------------------------------------

  const isChecked = useMemo(() => {
    if (!Array.isArray(arrayValue) || arrayValue.length === 0 || !value)
      return false;

    return arrayValue.includes(value);
  }, [arrayValue, value]);

  const handleChange = useCallback(() => {
    if (!Array.isArray(arrayValue) || !value) return;

    if (arrayValue.includes(value)) {
      setValue(
        name,
        arrayValue.filter(v => v !== value),
      );
    } else {
      setValue(name, [...arrayValue, value]);
    }
  }, [arrayValue, value, name]);

  return (
    <RHFCheckbox
      name={name}
      label={label}
      checked={isChecked}
      onChange={handleChange}
      checkboxProps={checkboxProps}
    />
  );
}
