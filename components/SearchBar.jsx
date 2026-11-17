import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { C } from './theme/appColors';

export default function SearchBar({ value, onChangeText, placeholder = 'Search', showClear = true }) {
  return (
    <View style={s.box}>
      <Ionicons name="search-outline" size={16} color={C.muted} />
      <TextInput
        style={s.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={C.muted}
        selectionColor={C.blue}
        autoCorrect={false}
      />
      {showClear && value ? (
        <TouchableOpacity onPress={() => onChangeText('')} hitSlop={10}>
          <Ionicons name="close" size={18} color={C.muted} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const s = StyleSheet.create({
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: C.card,
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 44,
    marginBottom: 14,
  },
  input: { flex: 1, color: C.text, fontSize: 13, marginLeft: 10, paddingVertical: 0 },
});
