import {Appbar} from '@/ui';
import {StackHeaderProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';

const StackHeader = (props: StackHeaderProps) => {
  const {back, navigation, options, route} = props;
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={options?.title} />
      {options?.headerRight && options.headerRight({})}
    </Appbar.Header>
  );
};

export default StackHeader;

const styles = StyleSheet.create({});
