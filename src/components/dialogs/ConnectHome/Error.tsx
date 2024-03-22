import {Button, Dialog, DialogProps, Portal, Text, useTheme} from '@/ui';
import React from 'react';

type Props = {
  title?: string;
  text?: string;

  open: boolean;
  onClose: () => any;
} & Omit<DialogProps, 'visible' | 'onDismiss' | 'children'>;

const ConnectHomeErrorDialog = (props: Props) => {
  const {
    title = 'Connection Failed',
    text = 'Maybe invalid QR code or something',
    onClose,
    open,
    ...other
  } = props;
  const theme = useTheme();

  // ACTIONS ----------------------------------------------------------------------

  const handleTryAgain = () => {
    onClose();
  };

  return (
    <Portal>
      <Dialog visible={open} onDismiss={onClose} {...other}>
        <Dialog.Icon icon={'alert'} size={42} color={theme.colors.error} />
        <Dialog.Title style={{textAlign: 'center'}}>{title}</Dialog.Title>
        <Dialog.Content>
          <Text style={{textAlign: 'center'}}>{text}</Text>
        </Dialog.Content>
        <Dialog.Actions style={{justifyContent: 'center'}}>
          <Button onPress={handleTryAgain}>Try Again</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default ConnectHomeErrorDialog;
