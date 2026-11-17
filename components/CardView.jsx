import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { C } from './theme/appColors';

// Банковская карта с параметрами. brand: 'mastercard' | 'visa'
export default function CardView({
  brand = 'mastercard',
  number = '4562 1122 4595 7852',
  name = 'AR Jonson',
  expiry = '24/2000',
  cvv = '6986',
  style,
}) {
  const isVisa = brand === 'visa';
  const groups = number.split(' ');

  return (
    <View style={[s.card, isVisa && s.cardVisa, style]}>
      {!isVisa && <View style={s.glow} />}

      <View style={s.top}>
        <Ionicons name={isVisa ? 'card-outline' : 'hardware-chip-outline'} size={26} color={C.muted} />
        {!isVisa && (
          <Ionicons name="wifi-outline" size={20} color={C.muted} style={{ transform: [{ rotate: '90deg' }] }} />
        )}
      </View>

      {isVisa ? (
        <Text style={s.numberLine}>{number}</Text>
      ) : (
        <View style={s.numberRow}>
          {groups.map((g, i) => (
            <Text key={i} style={s.number}>{g}</Text>
          ))}
        </View>
      )}

      <Text style={s.name}>{name}</Text>

      <View style={s.bottom}>
        <View style={{ flexDirection: 'row', gap: 20 }}>
          <View>
            <Text style={s.label}>Expiry Date</Text>
            <Text style={s.value}>{expiry}</Text>
          </View>
          {!isVisa && (
            <View>
              <Text style={s.label}>CVV</Text>
              <Text style={s.value}>{cvv}</Text>
            </View>
          )}
        </View>

        {isVisa ? (
          <Text style={s.visa}>VISA</Text>
        ) : (
          <View style={{ alignItems: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={[s.circle, { backgroundColor: '#EB001B' }]} />
              <View style={[s.circle, { backgroundColor: '#F79E1B', marginLeft: -8 }]} />
            </View>
            <Text style={s.brandText}>Mastercard</Text>
          </View>
        )}
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
  cardVisa: { backgroundColor: '#25222F' },
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
  numberLine: { color: C.text, fontSize: 20, fontWeight: '600', letterSpacing: 1, marginTop: 22 },
  name: { color: C.text, fontSize: 12, marginTop: 8 },
  bottom: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 14 },
  label: { color: C.muted, fontSize: 9 },
  brandText: { color: C.text, fontSize: 11, marginTop: 2 },
  value: { color: C.text, fontSize: 12, marginTop: 2 },
  visa: { color: C.text, fontSize: 18, fontWeight: '800', fontStyle: 'italic' },
  circle: { width: 22, height: 22, borderRadius: 11 },
});
