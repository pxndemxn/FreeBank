import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ScreenShell, { HeaderIconButton } from '../ScreenShell';
import TxRow from '../TxRow';
import { TRANSACTIONS } from '../data/designTransactions';
import { C } from '../theme/appColors';

export default function TransactionHistoryScreen({ onBack, go }) {
  return (
    <ScreenShell
      title="Transaction History"
      onBack={onBack}
      right={<HeaderIconButton name="time-outline" onPress={() => go('CategoryHistory')} />}
    >
      <View style={s.sectionRow}>
        <Text style={s.section}>Today</Text>
        <TouchableOpacity onPress={() => go('Search')}>
          <Text style={s.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      {TRANSACTIONS.map((t) => (
        <TxRow key={t.id} tx={t} />
      ))}
    </ScreenShell>
  );
}

const s = StyleSheet.create({
  sectionRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8, marginTop: 4 },
  section: { color: C.text, fontSize: 16, fontWeight: '600' },
  seeAll: { color: C.blue, fontSize: 13 },
});
