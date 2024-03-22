import {AppParamList} from '@/navigation/app';
import {Button, Dialog, DialogProps, Portal, Text} from '@/ui';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';

type Props = {
  title?: string;
  text?: string;

  open: boolean;
  onClose: () => any;
} & Omit<DialogProps, 'visible' | 'onDismiss' | 'children'>;

const ConnectHomeSuccessDialog = (props: Props) => {
  const {
    title = 'Home Connected',
    text = 'you can continue using the app',
    onClose,
    open,
    ...other
  } = props;
  const navigation = useNavigation<NavigationProp<AppParamList>>();

  // ACTIONS ----------------------------------------------------------------------

  const handleContinue = () => {
    onClose();
    navigation.navigate('AppHome');
  };

  return (
    <Portal>
      <Dialog visible={open} onDismiss={onClose} {...other}>
        <Dialog.Icon icon={'tooltip-check-outline'} size={42} />

        <Dialog.Title style={{textAlign: 'center'}}>{title}</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium" style={{textAlign: 'center'}}>
            {text}
          </Text>
        </Dialog.Content>
        <Dialog.Actions style={{justifyContent: 'center'}}>
          <Button onPress={handleContinue}>Continue</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default ConnectHomeSuccessDialog;
