import useAuth from '@/hooks/contexts/useAuth';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';

const DrawerContent = (props: DrawerContentComponentProps) => {
  const {signOut} = useAuth();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label={'Sign out'} onPress={signOut} />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
