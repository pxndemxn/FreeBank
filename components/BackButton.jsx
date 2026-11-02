import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from './theme/colors';

export default function BackButton({ onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.button} hitSlop={8}>
      <Ionicons name="chevron-back" size={16} color={colors.white} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.card,
    alignItems: 'center',
    justifyContent: 'center',
  },
});