import {XStack, YStack} from '@/ui';
import React from 'react';
import {Text} from 'react-native';
import {Icon, IconType} from '../../utils/icons';

type Props = {
  title: string;
  subtitle: string;
  iconName: string;
  iconType: IconType;
};

export default function StatCard(props: Props) {
  const {iconName, subtitle, title, iconType} = props;
  return (
    <XStack>
      <Icon name={iconName} type={iconType} size={'xl'} />
      <YStack>
        <Text>{title}</Text>
        <Text>{subtitle}</Text>
      </YStack>
    </XStack>
  );
}
