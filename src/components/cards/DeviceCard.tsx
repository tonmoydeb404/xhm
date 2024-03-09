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
    <Card animation={'bouncy'} style={{flex: 1}}>
      <Card.Header>
        <XStack justifyContent="space-between">
          <Square style={{backgroundColor: isOn ? '#2F52E0' : '#ddd'}}>
            <DeviceIcon type={type} size={40} color={isOn ? '#fff' : '#000'} />
          </Square>
          {!!onEdit && (
            <Button onPress={onEdit} size="sm" type="clear" radius={'xl'}>
              <MCIcon name="cog-outline" />
            </Button>
          )}
        </XStack>
        <Text style={styles.title} numberOfLines={1}>
          {name}
        </Text>
      </Card.Header>
      <Card.Footer>
        <Text style={styles.controlText}>{isOn ? 'ON' : 'OFF'}</Text>
        <Switch
          value={isOn}
          trackColor={{false: '#ddd'}}
          onValueChange={setIsOn}
        />
      </Card.Footer>
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
