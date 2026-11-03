import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { C } from '../theme/appColors';
import CreditCard from '../CreditCard';
import TransactionItem from '../TransactionItem';

const ACTIONS = [
  { icon: 'arrow-up', label: 'Sent' },
  { icon: 'arrow-down', label: 'Receive' },
  { icon: 'cash-outline', label: 'Loan' },
  { icon: 'cloud-upload-outline', label: 'Topup' },
];

export default function HomeScreen({ navigate }) {
  return (
    <ScrollView style={s.container} contentContainerStyle={{ padding: 20, paddingTop: 56 }}>
      <View style={s.header}>
        <TouchableOpacity style={s.userRow} onPress={() => navigate('profile')}>
          <View style={s.avatar}>
            <Ionicons name="person" size={22} color={C.muted} />
          </View>
          <View>
            <Text style={s.welcome}>Welcome back,</Text>
            <Text style={s.name}>Tanya Myroniuk</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={s.roundBtn}>
          <Ionicons name="search-outline" size={18} color={C.text} />
        </TouchableOpacity>
      </View>

      <CreditCard />

      <View style={s.actions}>
        {ACTIONS.map((a) => (
          <TouchableOpacity key={a.label} style={{ alignItems: 'center' }}>
            <View style={s.actionCircle}>
              <Ionicons name={a.icon} size={20} color={C.text} />
            </View>
            <Text style={s.actionLabel}>{a.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={s.sectionRow}>
        <Text style={s.section}>Transaction</Text>
        <Text style={s.seeAll}>See All</Text>
      </View>

      <TransactionItem icon="logo-apple" title="Apple Store" subtitle="Entertainment" amount="- $5,99" />
      <TransactionItem icon="musical-notes" iconColor={C.green} title="Spotify" subtitle="Music" amount="- $12,99" />
      <TransactionItem icon="download-outline" title="Money Transfer" subtitle="Transaction" amount="$300" positive />
      <TransactionItem icon="cart-outline" iconColor={C.red} title="Grocery" subtitle="Shopping" amount="- $ 88" />
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: C.bg },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  userRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  avatar: {
    width: 40, height: 40, borderRadius: 20, backgroundColor: C.card,
    alignItems: 'center', justifyContent: 'center',
  },
  welcome: { color: C.muted, fontSize: 10 },
  name: { color: C.text, fontSize: 15, fontWeight: '600' },
  roundBtn: {
    width: 36, height: 36, borderRadius: 18, backgroundColor: C.card,
    alignItems: 'center', justifyContent: 'center',
  },
  actions: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 24, paddingHorizontal: 6 },
  actionCircle: {
    width: 48, height: 48, borderRadius: 24, backgroundColor: C.card,
    alignItems: 'center', justifyContent: 'center',
  },
  actionLabel: { color: C.muted, fontSize: 11, marginTop: 6 },
  sectionRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  section: { color: C.text, fontSize: 16, fontWeight: '700' },
  seeAll: { color: C.blue, fontSize: 12 },
});