import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, G } from 'react-native-svg';
import TxRow from '../TxRow';
import { CATEGORIES, DONUT, TRANSACTIONS } from '../data/designTransactions';
import { C } from '../theme/appColors';

const SIZE = 190;
const STROKE = 14;

function Donut({ data }) {
  const r = (SIZE - STROKE) / 2;
  const c = 2 * Math.PI * r;
  const GAP = 10;
  let offset = 0;

  return (
    <Svg width={SIZE} height={SIZE}>
      <G rotation="-90" origin={`${SIZE / 2}, ${SIZE / 2}`}>
        {data.map((d, i) => {
          const len = (d.value / 100) * c;
          const el = (
            <Circle
              key={i}
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={r}
              fill="none"
              stroke={d.color}
              strokeWidth={STROKE}
              strokeLinecap="round"
              strokeDasharray={`${Math.max(len - GAP, 1)} ${c}`}
              strokeDashoffset={-offset}
            />
          );
          offset += len;
          return el;
        })}
      </G>
    </Svg>
  );
}

// Экран-«шит» поверх Home: диаграмма по категориям + история транзакций
export default function CategoryHistoryScreen({ onBack, go }) {
  return (
    <SafeAreaView style={s.container} edges={['bottom']}>
      <View style={s.sheet}>
        <TouchableOpacity onPress={onBack} style={s.grabberWrap} hitSlop={12}>
          <View style={s.grabber} />
        </TouchableOpacity>

        <ScrollView contentContainerStyle={s.content} showsVerticalScrollIndicator={false}>
          <Text style={s.title}>Category Chart</Text>

          <View style={s.chart}>
            <Donut data={DONUT} />
            <View style={s.center} pointerEvents="none">
              <Text style={s.percent}>55%</Text>
              <Text style={s.percentLabel}>Transaction</Text>
            </View>
          </View>

          <View style={s.legend}>
            {CATEGORIES.map((c) => (
              <View key={c.id} style={s.legendItem}>
                <View style={[s.dot, { backgroundColor: c.color }]} />
                <Text style={s.legendText}>{c.label}</Text>
              </View>
            ))}
          </View>

          <View style={s.sectionRow}>
            <Text style={s.title}>Transaction History</Text>
            <TouchableOpacity onPress={() => go('TransactionHistory')}>
              <Text style={s.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>

          <Text style={s.group}>Today</Text>
          {TRANSACTIONS.slice(0, 2).map((t) => (
            <TxRow key={t.id} tx={t} />
          ))}

          <Text style={s.group}>Last 7 Day</Text>
          {TRANSACTIONS.slice(1, 3).map((t) => (
            <TxRow key={`w-${t.id}`} tx={t} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'rgba(0,0,0,0.55)', justifyContent: 'flex-end' },
  sheet: {
    flex: 1,
    marginTop: 120,
    backgroundColor: C.surface,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
  },
  grabberWrap: { alignItems: 'center', paddingTop: 12, paddingBottom: 6 },
  grabber: { width: 40, height: 4, borderRadius: 2, backgroundColor: C.border },
  content: { paddingHorizontal: 20, paddingBottom: 30 },
  title: { color: C.text, fontSize: 18, fontWeight: '600', marginTop: 14 },
  chart: { alignItems: 'center', justifyContent: 'center', marginVertical: 18 },
  center: { position: 'absolute', alignItems: 'center' },
  percent: { color: C.text, fontSize: 34, fontWeight: '700' },
  percentLabel: { color: C.muted, fontSize: 12, marginTop: 2 },
  legend: { flexDirection: 'row', flexWrap: 'wrap', rowGap: 14, marginBottom: 20 },
  legendItem: { width: '33.33%', flexDirection: 'row', alignItems: 'center', gap: 8 },
  dot: { width: 14, height: 14, borderRadius: 4 },
  legendText: { color: C.text, fontSize: 12 },
  sectionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' },
  seeAll: { color: C.blue, fontSize: 13 },
  group: { color: C.muted, fontSize: 13, marginTop: 14, marginBottom: 4 },
});
