import useAuth from '@/hooks/contexts/useAuth';
import {Text, Title, YStack} from '@/ui';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import React from 'react';
import {Image, SafeAreaView} from 'react-native';

export default function Auth() {
  const {signInWithGoogle} = useAuth();

  return (
    <SafeAreaView style={{minHeight: '100%'}}>
      <YStack
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <Image
          source={require('@/assets/images/logo.png')}
          style={{width: 70, height: 70, marginBottom: 5}}
        />
        <Title style={{fontWeight: 'bold'}}>Join XHM</Title>
        <Text style={{marginBottom: 50}}>
          To continue using you need to sign in
        </Text>

        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={signInWithGoogle}
        />
      </YStack>
    </SafeAreaView>
  );
}
