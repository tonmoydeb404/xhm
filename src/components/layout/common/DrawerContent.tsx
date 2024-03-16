import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';

const DrawerContent = (props: DrawerContentComponentProps) => {
  const {navigation} = props;
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label={'Sign out'}
        onPress={() => navigation.navigate('Auth')}
      />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
