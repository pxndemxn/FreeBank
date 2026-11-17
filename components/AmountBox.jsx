import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { C } from './theme/appColors';

export default function AmountBox({ currency = 'USD', value, onChangeText, onChangeCurrency }) {
  return (
    <View style={s.box}>
      <View style={s.top}>
        <Text style={s.label}>Enter Your Amount</Text>
        <TouchableOpacity onPress={onChangeCurrency} hitSlop={8}>
          <Text style={s.change}>Change Currency?</Text>
        </TouchableOpacity>
      </View>
      <View style={s.row}>
        <Text style={s.currency}>{currency}</Text>
        <TextInput
          style={s.amount}
          value={value}
          onChangeText={onChangeText}
          keyboardType="decimal-pad"
          placeholder="0.00"
          placeholderTextColor={C.muted}
          selectionColor={C.blue}
        />
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  box: { backgroundColor: C.card, borderRadius: 14, padding: 16 },
  top: { flexDirection: 'row', justifyContent: 'space-between' },
  label: { color: C.muted, fontSize: 10 },
  change: { color: C.red, fontSize: 10 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 14, marginTop: 14 },
  currency: { color: '#8FA3C8', fontSize: 20, fontWeight: '700' },
  amount: { flex: 1, color: C.text, fontSize: 20, fontWeight: '600', paddingVertical: 0 },
});
