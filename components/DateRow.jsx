import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { C } from './theme/appColors';

// Три поля: день / месяц / год. value = { d, m, y }
export default function DateRow({ label, value, onChange, monthIsText = false }) {
  const set = (key) => (text) => onChange({ ...value, [key]: text });

  return (
    <View style={{ marginBottom: 18 }}>
      <Text style={s.label}>{label}</Text>
      <View style={s.row}>
        <TextInput
          style={s.input}
          value={value.d}
          onChangeText={set('d')}
          keyboardType="number-pad"
          maxLength={2}
          textAlign="center"
        />
        <TextInput
          style={s.input}
          value={value.m}
          onChangeText={set('m')}
          keyboardType={monthIsText ? 'default' : 'number-pad'}
          maxLength={monthIsText ? 12 : 2}
          textAlign="center"
        />
        <TextInput
          style={s.input}
          value={value.y}
          onChangeText={set('y')}
          keyboardType="number-pad"
          maxLength={4}
          textAlign="center"
        />
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  label: { color: C.muted, fontSize: 11, marginBottom: 6 },
  row: { flexDirection: 'row', gap: 14 },
  input: {
    flex: 1,
    color: C.text,
    fontSize: 12,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
});
