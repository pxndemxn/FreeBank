import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ScreenShell from '../ScreenShell';
import CardView from '../CardView';
import AmountBox from '../AmountBox';
import PrimaryButton from '../PrimaryButton';
import { CONTACTS } from '../data/designTransactions';
import { C } from '../theme/appColors';

const CURRENCIES = ['USD', 'EUR', 'KZT'];

export default function SendMoneyScreen({ onBack }) {
  const [contact, setContact] = useState('c1');
  const [amount, setAmount] = useState('36.00');
  const [currencyIdx, setCurrencyIdx] = useState(0);
  const currency = CURRENCIES[currencyIdx];

  const handleSend = () => {
    const who = CONTACTS.find((c) => c.id === contact)?.name ?? '';
    // TODO: аударым жасау (API сұрауы)
    Alert.alert('Sent', `${currency} ${amount} → ${who}`, [{ text: 'OK', onPress: onBack }]);
  };

  return (
    <ScreenShell
      title="Send Money"
      onBack={onBack}
      footer={<PrimaryButton title="Send Money" onPress={handleSend} />}
    >
      <CardView brand="mastercard" number="4562 1122 4595 7852" name="AR Jonson" expiry="24/2000" cvv="6986" />

      <View style={s.sendTo}>
        <Text style={s.sendToTitle}>Send to</Text>
        <View style={s.contacts}>
          <TouchableOpacity style={s.contact}>
            <View style={s.addCircle}>
              <Ionicons name="add" size={26} color={C.blue} />
            </View>
            <Text style={s.contactName}>Add</Text>
          </TouchableOpacity>

          {CONTACTS.map((c) => {
            const on = c.id === contact;
            return (
              <TouchableOpacity key={c.id} style={s.contact} onPress={() => setContact(c.id)}>
                <View style={[s.avatar, { backgroundColor: c.color }, on && s.avatarOn]}>
                  <Text style={s.initial}>{c.name[0]}</Text>
                </View>
                <Text style={[s.contactName, on && { color: C.text }]}>{c.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <AmountBox
        currency={currency}
        value={amount}
        onChangeText={setAmount}
        onChangeCurrency={() => setCurrencyIdx((i) => (i + 1) % CURRENCIES.length)}
      />
    </ScreenShell>
  );
}

const s = StyleSheet.create({
  sendTo: { backgroundColor: C.surface, borderRadius: 14, padding: 14, marginVertical: 18 },
  sendToTitle: { color: C.text, fontSize: 13, marginBottom: 12 },
  contacts: { flexDirection: 'row', justifyContent: 'space-between' },
  contact: { alignItems: 'center', gap: 6 },
  addCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: C.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: { width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' },
  avatarOn: { borderWidth: 2, borderColor: C.blue },
  initial: { color: C.text, fontSize: 18, fontWeight: '600' },
  contactName: { color: C.muted, fontSize: 11 },
});
