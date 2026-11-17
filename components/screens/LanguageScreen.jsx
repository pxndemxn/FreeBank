import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ScreenShell from '../ScreenShell';
import SearchBar from '../SearchBar';
import { LANGUAGES } from '../data/designTransactions';
import { C } from '../theme/appColors';

export default function LanguageScreen({ onBack }) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState('en');

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? LANGUAGES.filter((l) => l.label.toLowerCase().includes(q)) : LANGUAGES;
  }, [query]);

  return (
    <ScreenShell title="Language" onBack={onBack}>
      <SearchBar value={query} onChangeText={setQuery} placeholder="Search Language" showClear={false} />

      {items.map((l) => (
        <TouchableOpacity key={l.id} style={s.row} onPress={() => setSelected(l.id)}>
          <View style={s.flag}>
            <Text style={s.flagText}>{l.flag}</Text>
          </View>
          <Text style={s.label}>{l.label}</Text>
          {selected === l.id ? <Ionicons name="checkmark-circle" size={20} color={C.blue} /> : null}
        </TouchableOpacity>
      ))}
    </ScreenShell>
  );
}

const s = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  flag: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: C.card,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    overflow: 'hidden',
  },
  flagText: { fontSize: 26 },
  label: { flex: 1, color: C.text, fontSize: 15, fontWeight: '500' },
});
