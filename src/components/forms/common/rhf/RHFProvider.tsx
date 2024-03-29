import React, {ReactNode} from 'react';
import {FieldValues, FormProvider, UseFormReturn} from 'react-hook-form';

type Props = {
  methods: UseFormReturn<FieldValues, any, FieldValues>;
  children: ReactNode;
};

export default function RHFProvider(props: Props) {
  const {methods, children} = props;

  return <FormProvider {...methods}>{children}</FormProvider>;
}
