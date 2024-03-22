import {UserAddForm} from '@/components/forms/user';
import {Container} from '@/components/layout';
import {MemberNavProps} from '@/navigation/app/MemberNavigation';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

export default function AddMembers(props: MemberNavProps<'AddMember'>) {
  const {navigation} = props;

  return (
    <SafeAreaView>
      <Container>
        <UserAddForm />
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
