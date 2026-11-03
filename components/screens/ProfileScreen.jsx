import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { C } from '../theme/appColors';

const ITEMS = [
  { icon: 'person-outline', label: 'Personal Information' },
  { icon: 'card-outline', label: 'Payment Preferences' },
  { icon: 'business-outline', label: 'Banks and Cards' },
  { icon: 'notifications-outline', label: 'Notifications', badge: 2 },
  { icon: 'chatbox-outline', label: 'Message Center' },
  { icon: 'location-outline', label: 'Address' },
  { icon: 'settings-outline', label: 'Settings', goto: 'settings' },
];

export default function ProfileScreen({ navigate }) {
  return (
    <ScrollView style={s.container} contentContainerStyle={{ padding: 20, paddingTop: 56 }}>
      <View style={s.header}>
        <TouchableOpacity style={s.roundBtn} onPress={() => navigate('home')}>
          <Ionicons name="chevron-back" size={18} color={C.text} />
        </TouchableOpacity>
        <Text style={s.title}>Profile</Text>
        <TouchableOpacity style={s.roundBtn}>
          <Ionicons name="person-add-outline" size={16} color={C.text} />
        </TouchableOpacity>
      </View>

      <View style={s.userRow}>
        <View style={s.avatar}>
          <Ionicons name="person" size={34} color={C.muted} />
        </View>
        <View>
          <Text style={s.name}>Tanya Myroniuk</Text>
          <Text style={s.role}>Senior Designer</Text>
        </View>
      </View>

      {ITEMS.map((it) => (
        <TouchableOpacity key={it.label} style={s.row} onPress={() => it.goto && navigate(it.goto)}>
          <Ionicons name={it.icon} size={18} color={C.muted} style={{ marginRight: 14 }} />
          <Text style={s.label}>{it.label}</Text>
          {it.badge ? (
            <View style={s.badge}>
              <Text style={s.badgeText}>{it.badge}</Text>
            </View>
          ) : null}
          <Ionicons name="chevron-forward" size={16} color={C.muted} />
        </TouchableOpacity>
      ))}
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
  userRow: { flexDirection: 'row', alignItems: 'center', gap: 14, marginVertical: 26 },
  avatar: {
    width: 64, height: 64, borderRadius: 32, backgroundColor: C.card,
    alignItems: 'center', justifyContent: 'center',
  },
  name: { color: C.text, fontSize: 16, fontWeight: '600' },
  role: { color: C.muted, fontSize: 11, marginTop: 2 },
  row: {
    flexDirection: 'row', alignItems: 'center', paddingVertical: 15,
    borderBottomWidth: 1, borderBottomColor: C.border,
  },
  label: { flex: 1, color: C.text, fontSize: 13 },
  badge: {
    minWidth: 16, height: 16, borderRadius: 8, backgroundColor: C.red,
    alignItems: 'center', justifyContent: 'center', marginRight: 8,
  },
  badgeText: { color: '#fff', fontSize: 9, fontWeight: '700' },
});