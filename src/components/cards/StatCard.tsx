import {Text, XStack, YStack} from '@/ui';
import React from 'react';
import {Icon} from '../../utils/icons';

type Props = {
  title: string;
  subtitle: string;
  iconName: string;
};

export default function StatCard(props: Props) {
  const {iconName, subtitle, title} = props;
  return (
    <XStack style={{columnGap: 5}}>
      <Icon name={iconName} type={'MaterialCommunity'} size={'xl'} />
      <YStack>
        <Text variant="bodyLarge">{title}</Text>
        <Text variant="titleSmall">{subtitle}</Text>
      </YStack>
    </XStack>
  );
}
