import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { C } from './theme/appColors';

const TABS = [
  { key: 'home', label: 'Home', icon: 'home-outline' },
  { key: 'cards', label: 'My Cards', icon: 'wallet-outline' },
  { key: 'stats', label: 'Statistics', icon: 'pie-chart-outline' },
  { key: 'settings', label: 'Settings', icon: 'settings-outline' },
];

export default function BottomTabBar({ active, onChange }) {
  return (
    <View style={s.bar}>
      {TABS.map((t) => {
        const on = active === t.key;
        return (
          <TouchableOpacity key={t.key} style={s.tab} onPress={() => onChange(t.key)}>
            <Ionicons name={t.icon} size={20} color={on ? C.blue : C.muted} />
            <Text style={[s.label, { color: on ? C.blue : C.muted }]}>{t.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const s = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    backgroundColor: C.surface,
    paddingTop: 10,
    paddingBottom: 22,
    borderTopWidth: 1,
    borderTopColor: C.border,
  },
  tab: { flex: 1, alignItems: 'center', gap: 4 },
  label: { fontSize: 10 },
});