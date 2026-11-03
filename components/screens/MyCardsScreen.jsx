import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { C } from '../theme/appColors';
import CreditCard from '../CreditCard';
import TransactionItem from '../TransactionItem';

const MAX = 10000;

export default function MyCardsScreen({ navigate }) {
  const [value, setValue] = useState(4600);
  const [trackW, setTrackW] = useState(1);

  const update = (e) => {
    const x = Math.min(Math.max(e.nativeEvent.locationX, 0), trackW);
    setValue(Math.round((x / trackW) * MAX));
  };

  const pct = (value / MAX) * 100;

  return (
    <ScrollView style={s.container} contentContainerStyle={{ padding: 20, paddingTop: 56 }}>
      <View style={s.header}>
        <TouchableOpacity style={s.roundBtn} onPress={() => navigate('home')}>
          <Ionicons name="chevron-back" size={18} color={C.text} />
        </TouchableOpacity>
        <Text style={s.title}>My Cards</Text>
        <TouchableOpacity style={s.roundBtn}>
          <Ionicons name="add" size={20} color={C.text} />
        </TouchableOpacity>
      </View>

      <CreditCard />

      <View style={{ marginTop: 14 }}>
        <TransactionItem icon="logo-apple" title="Apple Store" subtitle="Entertainment" amount="- $5,99" />
        <TransactionItem icon="musical-notes" iconColor={C.green} title="Spotify" subtitle="Music" amount="- $12,99" />
        <TransactionItem icon="cart-outline" iconColor={C.red} title="Grocery" subtitle="Shopping" amount="- $ 88" />
      </View>

      <Text style={s.section}>Monthly spending limit</Text>

      <View style={s.limitBox}>
        <Text style={s.amount}>Amount: ${value.toLocaleString()}.00</Text>

        <View
          style={s.trackWrap}
          onLayout={(e) => setTrackW(e.nativeEvent.layout.width)}
          onStartShouldSetResponder={() => true}
          onResponderGrant={update}
          onResponderMove={update}
        >
          <View style={s.track} pointerEvents="none" />
          <View style={[s.fill, { width: `${pct}%` }]} pointerEvents="none" />
          <View style={[s.thumb, { left: `${pct}%` }]} pointerEvents="none" />
        </View>

        <View style={s.scale}>
          <Text style={s.scaleText}>$0</Text>
          <Text style={s.scaleText}>${value.toLocaleString()}</Text>
          <Text style={s.scaleText}>$10,000</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: C.bg },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  title: { color: C.text, fontSize: 16, fontWeight: '600' },
  roundBtn: {
    width: 36, height: 36, borderRadius: 18, backgroundColor: C.card,
    alignItems: 'center', justifyContent: 'center',
  },
  section: { color: C.text, fontSize: 16, fontWeight: '700', marginTop: 18, marginBottom: 12 },
  limitBox: { backgroundColor: C.surface, borderRadius: 14, padding: 16 },
  amount: { color: C.text, fontSize: 12, marginBottom: 14 },
  trackWrap: { height: 30, justifyContent: 'center' },
  track: { height: 4, borderRadius: 2, backgroundColor: C.border },
  fill: { position: 'absolute', height: 4, borderRadius: 2, backgroundColor: '#fff' },
  thumb: {
    position: 'absolute', width: 16, height: 16, borderRadius: 8, marginLeft: -8,
    backgroundColor: C.blue, borderWidth: 3, borderColor: '#fff',
  },
  scale: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 },
  scaleText: { color: C.muted, fontSize: 10 },
});