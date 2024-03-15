import {Button} from '@/ui';
import {MCIcon} from '@/utils/icons';
import {useNavigation} from '@react-navigation/native';
import React, {ReactNode} from 'react';
import {StyleSheet, Text} from 'react-native';
import Container from '../Container';

interface Props {
  action?: ReactNode;
  title: string;
}

const AppHeader = (props: Props) => {
  const {title, action} = props;
  const navigation = useNavigation();
  return (
    <Container
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
      }}>
      <Button
        onPress={() => {
          navigation.goBack();
        }}>
        <MCIcon name="keyboard-backspace" size={'xl'} />
      </Button>

      <Text style={{fontSize: 16, fontWeight: 'bold'}}>{title}</Text>

      {action}
    </Container>
  );
};

export default AppHeader;

const styles = StyleSheet.create({});
