import {Appbar} from '@/ui';
import {StackHeaderProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';

const StackHeader = ({back, navigation, options, route}: StackHeaderProps) => {
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content
        title={(route?.params as {title?: string})?.title || options?.title}
      />
    </Appbar.Header>
  );
};

export default StackHeader;

const styles = StyleSheet.create({});
