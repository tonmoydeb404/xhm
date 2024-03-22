import {ActivityIndicator, Card, Text, YStack} from '@/ui';
import React from 'react';

type Props = {
  title?: string;
};

const LoadingState = (props: Props) => {
  const {title = 'Loading...'} = props;

  return (
    <Card>
      <Card.Content>
        <YStack
          style={{
            minHeight: 150,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 15,
          }}>
          <ActivityIndicator animating size={32} />
          <Text variant="bodyLarge">{title}</Text>
        </YStack>
      </Card.Content>
    </Card>
  );
};

export default LoadingState;
