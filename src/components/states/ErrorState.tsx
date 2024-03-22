import {Card, Text, useTheme, YStack} from '@/ui';
import {MCIcon} from '@/utils/icons';
import React from 'react';

type Props = {
  title?: string;
};

const ErrorState = (props: Props) => {
  const theme = useTheme();
  const {title = 'Smothing went to wrong'} = props;

  return (
    <Card theme={{colors: {primary: theme.colors.errorContainer}}}>
      <Card.Content>
        <YStack
          style={{
            minHeight: 150,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <MCIcon name="alert" size={32} />
          <Text variant="bodyLarge">{title}</Text>
        </YStack>
      </Card.Content>
    </Card>
  );
};

export default ErrorState;
