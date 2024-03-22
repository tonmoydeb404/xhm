import {Profile} from '@/types/profile.type';
import {Avatar, Card, Text, XStack, YStack} from '@/ui';
import getInitials from '@/utils/getInitials';
import React from 'react';
import {StyleSheet} from 'react-native';

type Props = {} & Profile;

export default function MemberCard(props: Props) {
  const {avatar, email, fullName} = props;

  return (
    <Card>
      <Card.Content>
        <XStack style={{gap: 10}}>
          {avatar ? (
            <Avatar.Image source={{uri: avatar}} size={52} />
          ) : (
            <Avatar.Text label={getInitials(fullName)} size={52} />
          )}

          <YStack>
            <Text variant="titleMedium">{fullName}</Text>
            <Text>{email}</Text>
          </YStack>
        </XStack>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({});
