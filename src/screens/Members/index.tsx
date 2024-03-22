import {Container} from '@/components/layout';
import {MemberList} from '@/components/lists';
import useHome from '@/hooks/contexts/useHome';
import {MemberNavProps} from '@/navigation/app/MemberNavigation';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

export default function Members(props: MemberNavProps<'Members'>) {
  const {members} = useHome();

  return (
    <SafeAreaView>
      <Container>
        <MemberList {...members} />
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
