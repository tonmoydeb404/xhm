import {Card, Text, useTheme, YStack} from '@/ui';
import {MCIcon} from '@/utils/icons';
import React from 'react';

type Props = {
  title?: string;
};

const EmptyState = (props: Props) => {
  const theme = useTheme();
  const {title = 'Nothing is here'} = props;

  return (
    <Card theme={{colors: {primary: theme.colors.secondaryContainer}}}>
      <Card.Content>
        <YStack
          style={{
            minHeight: 150,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <MCIcon name="cancel" size={32} />
          <Text variant="bodyLarge">{title}</Text>
        </YStack>
      </Card.Content>
    </Card>
  );
};

export default EmptyState;
