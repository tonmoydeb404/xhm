import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

const XStack = (props: ViewProps) => {
  const {style, ...other} = props;
  return <View style={{...styles.xstack, ...(style as object)}} {...other} />;
};

const YStack = (props: ViewProps) => {
  const {style, ...other} = props;
  return <View style={{...styles.ystack, ...(style as object)}} {...other} />;
};

export {XStack, YStack};

const styles = StyleSheet.create({
  ystack: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },

  xstack: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
  },
});
