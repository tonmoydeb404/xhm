import React from 'react';
import {View, ViewProps} from 'react-native';

type Props = ViewProps;

export default function Container(props: Props) {
  const {style = {}, children, ...other} = props;
  return (
    <View
      style={{
        paddingHorizontal: 16,
        ...(typeof style === 'object' ? style : {}),
      }}
      {...other}>
      {children}
    </View>
  );
}
