import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { C } from './theme/appColors';

export default function CreditCard() {
  return (
    <View style={s.card}>
      <View style={s.glow} />
      <View style={s.top}>
        <Ionicons name="hardware-chip-outline" size={26} color={C.muted} />
        <Ionicons name="wifi-outline" size={20} color={C.muted} style={{ transform: [{ rotate: '90deg' }] }} />
      </View>

      <View style={s.numberRow}>
        {['4562', '1122', '4595', '7852'].map((n) => (
          <Text key={n} style={s.number}>{n}</Text>
        ))}
      </View>

      <Text style={s.name}>AR Jonson</Text>

      <View style={s.bottom}>
        <View style={{ flexDirection: 'row', gap: 20 }}>
          <View>
            <Text style={s.label}>Expiry Date</Text>
            <Text style={s.value}>24/2000</Text>
          </View>
          <View>
            <Text style={s.label}>CVV</Text>
            <Text style={s.value}>6986</Text>
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={[s.circle, { backgroundColor: '#EB001B' }]} />
            <View style={[s.circle, { backgroundColor: '#F79E1B', marginLeft: -8 }]} />
          </View>
          <Text style={s.label}>Mastercard</Text>
        </View>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  card: {
    backgroundColor: '#23283F',
    borderRadius: 18,
    padding: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: C.border,
  },
  glow: {
    position: 'absolute',
    right: -60,
    bottom: -70,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(31,107,255,0.25)',
  },
  top: { flexDirection: 'row', justifyContent: 'space-between' },
  numberRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 22 },
  number: { color: C.text, fontSize: 20, fontWeight: '600', letterSpacing: 1 },
  name: { color: C.text, fontSize: 12, marginTop: 8 },
  bottom: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 14 },
  label: { color: C.muted, fontSize: 9 },
  value: { color: C.text, fontSize: 12, marginTop: 2 },
  circle: { width: 22, height: 22, borderRadius: 11 },
});