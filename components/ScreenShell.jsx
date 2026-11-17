import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { C } from './theme/appColors';

// Общая оболочка экрана: круглая кнопка назад + заголовок по центру + (необязательно) правая кнопка.
// footer — блок внизу (например, главная кнопка), scroll={false} — без прокрутки.
export default function ScreenShell({ title, onBack, right, footer, scroll = true, children }) {
  return (
    <SafeAreaView style={s.container}>
      <View style={s.header}>
        {onBack ? (
          <TouchableOpacity style={s.roundBtn} onPress={onBack} hitSlop={8}>
            <Ionicons name="chevron-back" size={18} color={C.text} />
          </TouchableOpacity>
        ) : (
          <View style={s.slot} />
        )}
        <Text style={s.title}>{title}</Text>
        {right || <View style={s.slot} />}
      </View>

      {scroll ? (
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={s.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      ) : (
        <View style={[{ flex: 1 }, s.content]}>{children}</View>
      )}

      {footer ? <View style={s.footer}>{footer}</View> : null}
    </SafeAreaView>
  );
}

export function HeaderIconButton({ name, onPress }) {
  return (
    <TouchableOpacity style={s.roundBtn} onPress={onPress} hitSlop={8}>
      <Ionicons name={name} size={18} color={C.text} />
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: C.bg },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 8,
  },
  slot: { width: 40, height: 40 },
  roundBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: C.card,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { color: C.text, fontSize: 16, fontWeight: '600' },
  content: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 24 },
  footer: { paddingHorizontal: 20, paddingBottom: 16, paddingTop: 8 },
});
