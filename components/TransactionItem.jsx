import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { C } from './theme/appColors';

export default function TransactionItem({ icon, iconColor = C.text, title, subtitle, amount, positive }) {
  return (
    <View style={s.row}>
      <View style={s.iconBox}>
        <Ionicons name={icon} size={18} color={iconColor} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={s.title}>{title}</Text>
        <Text style={s.sub}>{subtitle}</Text>
      </View>
      <Text style={[s.amount, positive && { color: C.blue }]}>{amount}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10 },
  iconBox: {
    width: 36, height: 36, borderRadius: 18, backgroundColor: C.card,
    alignItems: 'center', justifyContent: 'center', marginRight: 12,
  },
  title: { color: C.text, fontSize: 14, fontWeight: '600' },
  sub: { color: C.muted, fontSize: 10, marginTop: 2 },
  amount: { color: C.text, fontSize: 14, fontWeight: '600' },
});