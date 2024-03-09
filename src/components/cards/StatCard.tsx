import React from 'react';
import {Text, XStack, YStack} from 'tamagui';
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
    <XStack width={'50%'} columnGap={10} alignItems="center">
      <Icon name={iconName} type={iconType} size={'xl'} />
      <YStack>
        <Text fontSize={14} fontWeight={'bold'}>
          {title}
        </Text>
        <Text fontSize={11}>{subtitle}</Text>
      </YStack>
    </XStack>
  );
}
