import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ScreenShell from '../ScreenShell';
import CardView from '../CardView';
import InputField from '../InputField';
import PrimaryButton from '../PrimaryButton';
import { C } from '../theme/appColors';

const formatNumber = (text) =>
  text.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();

export default function AddCardScreen({ onBack }) {
  const [holder, setHolder] = useState('Tanya Myroniuk');
  const [expiry, setExpiry] = useState('09/06/2024');
  const [cvv, setCvv] = useState('6986');
  const [number, setNumber] = useState('4562 1122 4595 7852');

  const brand = number.startsWith('4') ? 'visa' : 'mastercard';

  const handleAdd = () => {
    // TODO: картаны сақтау (API сұрауы)
    Alert.alert('Card added', `${holder} • ${number}`, [{ text: 'OK', onPress: onBack }]);
  };

  return (
    <ScreenShell
      title="Add New Card"
      onBack={onBack}
      footer={<PrimaryButton title="Add Card" onPress={handleAdd} />}
    >
      <CardView
        brand={brand}
        number={number || '0000 0000 0000 0000'}
        name={holder || 'Cardholder'}
        expiry={expiry}
        cvv={cvv}
        style={{ marginBottom: 26 }}
      />

      <InputField
        label="Cardholder Name"
        icon="person-circle-outline"
        value={holder}
        onChangeText={setHolder}
        autoCapitalize="words"
      />

      <View style={{ flexDirection: 'row', gap: 20 }}>
        <View style={{ flex: 1 }}>
          <Text style={s.label}>Expiry Date</Text>
          <TextInput
            style={s.input}
            value={expiry}
            onChangeText={setExpiry}
            keyboardType="numbers-and-punctuation"
            maxLength={10}
            selectionColor={C.blue}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={s.label}>4-digit CVV</Text>
          <TextInput
            style={s.input}
            value={cvv}
            onChangeText={(t) => setCvv(t.replace(/\D/g, '').slice(0, 4))}
            keyboardType="number-pad"
            secureTextEntry={false}
            selectionColor={C.blue}
          />
        </View>
      </View>

      <View style={{ marginTop: 18 }}>
        <Text style={s.label}>Card Number</Text>
        <View style={s.numberRow}>
          <Ionicons name="card-outline" size={16} color={C.muted} />
          <TextInput
            style={[s.input, { flex: 1, borderBottomWidth: 0, marginLeft: 10, paddingVertical: 0 }]}
            value={number}
            onChangeText={(t) => setNumber(formatNumber(t))}
            keyboardType="number-pad"
            selectionColor={C.blue}
          />
          <View style={{ flexDirection: 'row' }}>
            <View style={[s.circle, { backgroundColor: '#EB001B' }]} />
            <View style={[s.circle, { backgroundColor: '#F79E1B', marginLeft: -8 }]} />
          </View>
        </View>
      </View>
    </ScreenShell>
  );
}

const s = StyleSheet.create({
  label: { color: C.muted, fontSize: 11, marginBottom: 6 },
  input: {
    color: C.text,
    fontSize: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  numberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: C.border,
    paddingBottom: 8,
  },
  circle: { width: 22, height: 22, borderRadius: 11 },
});
