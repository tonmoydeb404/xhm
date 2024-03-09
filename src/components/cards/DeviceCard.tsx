import {Button, Switch} from '@rneui/themed';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Card, Square, Text, XStack} from 'tamagui';
import {DeviceIcon, DeviceIconType, MCIcon} from '../../utils/icons';

type Props = {
  name: string;
  status: 'ON' | 'OFF';
  type: DeviceIconType;
  onEdit?: () => any;
};

export default function DeviceCard(props: Props) {
  const {name, status, type, onEdit} = props;
  const [isOn, setIsOn] = useState(status === 'ON');

  return (
    <Card
      animation={'bouncy'}
      enterStyle={{scale: 0.9}}
      exitStyle={{scale: 0.85}}
      style={{flex: 1}}>
      <Card.Header>
        <XStack justifyContent="space-between" mb={5}>
          <Square backgroundColor={isOn ? '#2F52E0' : '#ddd'} p={5} radiused>
            <DeviceIcon type={type} size={36} color={isOn ? '#fff' : '#000'} />
          </Square>

          {!!onEdit && (
            <Button onPress={onEdit} size="sm" type="clear" radius={'xl'}>
              <MCIcon name="cog-outline" />
            </Button>
          )}
        </XStack>
        <Text fontWeight={'bold'} fontSize={'$5'} numberOfLines={1} mb={10}>
          {name}
        </Text>
        <XStack alignItems="center" justifyContent="flex-end">
          <Text style={styles.controlText}>{isOn ? 'ON' : 'OFF'}</Text>
          <Switch
            value={isOn}
            trackColor={{false: '#ddd'}}
            onValueChange={setIsOn}
          />
        </XStack>
      </Card.Header>
    </Card>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 15,
  },

  controlText: {
    fontSize: 12,
    color: '#666',
  },
});
