import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { C } from '../theme/appColors';

function Row({ label, value, onPress }) {
  return (
    <TouchableOpacity style={s.row} onPress={onPress}>
      <Text style={s.rowText}>{label}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        {value ? <Text style={s.value}>{value}</Text> : null}
        <Ionicons name="chevron-forward" size={16} color={C.muted} />
      </View>
    </TouchableOpacity>
  );
}

export default function SettingsScreen({ navigate }) {
  const [biometric, setBiometric] = useState(false);

  return (
    <ScrollView style={s.container} contentContainerStyle={{ padding: 20, paddingTop: 56 }}>
      <View style={s.header}>
        <TouchableOpacity style={s.roundBtn} onPress={() => navigate('home')}>
          <Ionicons name="chevron-back" size={18} color={C.text} />
        </TouchableOpacity>
        <Text style={s.title}>Settings</Text>
        <TouchableOpacity style={s.roundBtn}>
          <Ionicons name="grid-outline" size={16} color={C.text} />
        </TouchableOpacity>
      </View>

      <Text style={s.group}>General</Text>
      <Row label="Language" value="English" />
      <Row label="My Profile" onPress={() => navigate('profile')} />
      <Row label="Contact Us" />

      <Text style={[s.group, { marginTop: 24 }]}>Security</Text>
      <Row label="Change Password" />
      <Row label="Privacy Policy" />
      <Text style={s.hint}>Choose what data you share with us</Text>

      <View style={s.row}>
        <Text style={s.rowText}>Biometric</Text>
        <Switch
          value={biometric}
          onValueChange={setBiometric}
          trackColor={{ false: C.border, true: C.blue }}
          thumbColor="#fff"
        />
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: C.bg },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  title: { color: C.text, fontSize: 16, fontWeight: '600' },
  roundBtn: {
    width: 36, height: 36, borderRadius: 18, backgroundColor: C.card,
    alignItems: 'center', justifyContent: 'center',
  },
  group: { color: C.muted, fontSize: 12, marginBottom: 6 },
  row: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: C.border,
  },
  rowText: { color: C.text, fontSize: 13, fontWeight: '600' },
  value: { color: C.muted, fontSize: 11 },
  hint: { color: C.muted, fontSize: 10, marginTop: 10 },
});