import React from 'react';
import { Text, StyleSheet } from 'react-native';
import ScreenShell from '../ScreenShell';
import { TERMS } from '../data/designTransactions';
import { C } from '../theme/appColors';

export default function TermsScreen({ onBack }) {
  return (
    <ScreenShell title="Terms & Condition" onBack={onBack}>
      {TERMS.map((p, i) => (
        <Text key={i} style={s.paragraph}>{p}</Text>
      ))}
    </ScreenShell>
  );
}

const s = StyleSheet.create({
  paragraph: { color: C.muted, fontSize: 14, lineHeight: 24, marginBottom: 22 },
});
