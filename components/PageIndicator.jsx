import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from './theme/colors';

export default function PageIndicator({ total = 3, active = 0 }) {
  return (
    <View style={styles.row}>
      {Array.from({ length: total }).map((_, i) => (
        <View
          key={i}
          style={[styles.dot, i === active ? styles.active : styles.inactive]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  dot: { height: 5, borderRadius: 3, marginHorizontal: 3 },
  active: { width: 18, backgroundColor: colors.primary },
  inactive: { width: 5, backgroundColor: colors.grayDark },
});