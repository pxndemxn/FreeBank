import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

// Логотип белгісі екі қиылысқан сақинадан салынған.
// Нақты логотип болса: <Image source={require('../../assets/logo.png')} />
export default function Logo({ size = 56 }) {
  return (
    <View style={styles.container}>
      <View style={{ width: size, height: size }}>
        <View
          style={[
            styles.ring,
            { width: size * 0.7, height: size * 0.7, borderColor: '#00C2FF', top: 0, left: 0 },
          ]}
        />
        <View
          style={[
            styles.ring,
            { width: size * 0.7, height: size * 0.7, borderColor: colors.primary, bottom: 0, right: 0 },
          ]}
        />
      </View>
      <Text style={styles.title}>BANKPICK</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  ring: {
    position: 'absolute',
    borderWidth: 7,
    borderRadius: 100,
  },
  title: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1,
    marginTop: 18,
  },
});