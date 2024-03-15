import {Button, Card, Switch, Text, XStack, YStack} from '@/ui';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
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
    <Card>
      <Card.Content>
        <XStack>
          <YStack style={[styles.iconContainer]}>
            <DeviceIcon type={type} size={36} color={isOn ? '#fff' : '#000'} />
          </YStack>

          {!!onEdit && (
            <Button onPress={onEdit}>
              <MCIcon name="cog-outline" />
            </Button>
          )}
        </XStack>

        <Text variant="titleMedium">{name}</Text>
        <XStack style={[styles.switchContainer]}>
          <Text variant="bodySmall">{isOn ? 'ON' : 'OFF'}</Text>

          <Switch
            value={isOn}
            trackColor={{false: '#ddd'}}
            onValueChange={setIsOn}
          />
        </XStack>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: '#2F52E0',
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },

  switchContainer: {justifyContent: 'space-between', alignItems: 'center'},
});
