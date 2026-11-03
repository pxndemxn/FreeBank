import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Path, Circle } from 'react-native-svg';
import { C } from '../theme/appColors';
import TransactionItem from '../TransactionItem';

const MONTHS = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
const W = 340;
const H = 190;
const POINTS = [
  [0, 150], [30, 140], [70, 105], [105, 120], [140, 80],
  [175, 35], [205, 85], [240, 100], [275, 30], [310, 25], [340, 50],
];

// тегіс сызық жасау
const buildPath = (pts) => {
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) {
    const [x0, y0] = pts[i - 1];
    const [x1, y1] = pts[i];
    const mx = (x0 + x1) / 2;
    d += ` C ${mx} ${y0}, ${mx} ${y1}, ${x1} ${y1}`;
  }
  return d;
};

export default function StatisticsScreen({ navigate }) {
  const [month, setMonth] = useState('Jan');
  const marker = POINTS[5];

  return (
    <ScrollView style={s.container} contentContainerStyle={{ padding: 20, paddingTop: 56 }}>
      <View style={s.header}>
        <TouchableOpacity style={s.roundBtn} onPress={() => navigate('home')}>
          <Ionicons name="chevron-back" size={18} color={C.text} />
        </TouchableOpacity>
        <Text style={s.title}>Statistics</Text>
        <TouchableOpacity style={s.roundBtn}>
          <Ionicons name="notifications-outline" size={18} color={C.text} />
        </TouchableOpacity>
      </View>

      <Text style={s.balanceLabel}>Current Balance</Text>
      <Text style={s.balance}>$8,545.00</Text>

      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Svg width={W} height={H}>
          <Path d={buildPath(POINTS)} stroke={C.blue} strokeWidth={4} fill="none" strokeLinecap="round" />
          <Circle cx={marker[0]} cy={marker[1]} r={9} fill={C.blue} opacity={0.35} />
          <Circle cx={marker[0]} cy={marker[1]} r={5} fill="#fff" />
        </Svg>
      </View>

      <View style={s.months}>
        {MONTHS.map((m) => (
          <TouchableOpacity
            key={m}
            onPress={() => setMonth(m)}
            style={[s.monthBtn, month === m && { backgroundColor: C.blue }]}
          >
            <Text style={{ color: month === m ? '#fff' : C.muted, fontSize: 12 }}>{m}</Text>
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
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: C.bg },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { color: C.text, fontSize: 16, fontWeight: '600' },
  roundBtn: {
    width: 36, height: 36, borderRadius: 18, backgroundColor: C.card,
    alignItems: 'center', justifyContent: 'center',
  },
  balanceLabel: { color: C.muted, textAlign: 'center', marginTop: 24, fontSize: 13 },
  balance: { color: C.text, textAlign: 'center', fontSize: 26, fontWeight: '700', marginTop: 4 },
  months: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 18 },
  monthBtn: { paddingVertical: 5, paddingHorizontal: 12, borderRadius: 6 },
  sectionRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  section: { color: C.text, fontSize: 16, fontWeight: '700' },
  seeAll: { color: C.blue, fontSize: 12 },
});