import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon, IconType} from '../../utils/Icons';

type Props = {
  title: string;
  subtitle: string;
  iconName: string;
  iconType: IconType;
};

export default function StatCard({iconName, subtitle, title, iconType}: Props) {
  return (
    <View style={styles.container}>
      <Icon name={iconName} type={iconType} size={'xl'} color={'#000'} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: '50%',
  },
  subtitle: {
    color: '#000',
    fontSize: 12,
  },
  title: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
