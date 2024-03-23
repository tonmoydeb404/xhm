import {EmptyState, ErrorState, LoadingState} from '@/components/states';
import useHome from '@/hooks/contexts/useHome';
import {Card, Text, YStack} from '@/ui';
import React from 'react';
import {RHFArrayCheckbox} from '../../common/rhf';

type Props = {
  label: string;
  name: string;
};

const DeviceOptions = (props: Props) => {
  const {label, name} = props;

  const {devices} = useHome();

  if (!devices.isLoading && devices.isError) return <ErrorState />;

  if (!devices.isLoading && Array.isArray(devices.data)) {
    if (devices.data.length === 0) return <EmptyState />;

    return (
      <Card>
        <Card.Content>
          <Text>{label}</Text>

          <YStack>
            {devices.data.map(d => (
              <RHFArrayCheckbox
                label={d.title}
                name={name}
                value={d.id}
                key={d.id}
              />
            ))}
          </YStack>
        </Card.Content>
      </Card>
    );
  }

  return <LoadingState />;
};

export default DeviceOptions;
