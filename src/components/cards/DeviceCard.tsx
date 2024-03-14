import {Button, Card, Switch, XStack, YStack} from '@/ui';
import React, {useState} from 'react';
import {Text} from 'react-native';
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
    <Card style={{flex: 1}}>
      <Card.Content>
        <XStack>
          <YStack>
            <DeviceIcon type={type} size={36} color={isOn ? '#fff' : '#000'} />
          </YStack>

          {!!onEdit && (
            <Button onPress={onEdit}>
              <MCIcon name="cog-outline" />
            </Button>
          )}
        </XStack>
        <Text>{name}</Text>
        <XStack>
          <Text>{isOn ? 'ON' : 'OFF'}</Text>
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
