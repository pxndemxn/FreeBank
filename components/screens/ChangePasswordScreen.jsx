import React, { useState } from 'react';
import { Text, Alert, StyleSheet } from 'react-native';
import ScreenShell from '../ScreenShell';
import InputField from '../InputField';
import PrimaryButton from '../PrimaryButton';
import { C } from '../theme/appColors';

export default function ChangePasswordScreen({ onBack }) {
  const [current, setCurrent] = useState('');
  const [next, setNext] = useState('');
  const [confirm, setConfirm] = useState('');

  const mismatch = confirm.length > 0 && next !== confirm;

  const handleChange = () => {
    if (!current || !next || next !== confirm) {
      Alert.alert('Check the fields', 'Fill in all fields. Both passwords must match.');
      return;
    }
    // TODO: құпиясөзді өзгерту (API сұрауы)
    Alert.alert('Done', 'Password changed', [{ text: 'OK', onPress: onBack }]);
  };

  return (
    <ScreenShell title="Change Password" onBack={onBack}>
      <InputField label="Current Password" icon="lock-closed-outline" value={current} onChangeText={setCurrent} placeholder="••••••••" isPassword />
      <InputField label="New Password" icon="lock-closed-outline" value={next} onChangeText={setNext} placeholder="••••••••" isPassword />
      <InputField label="Confirm New Password" icon="lock-closed-outline" value={confirm} onChangeText={setConfirm} placeholder="••••••••" isPassword />

      <Text style={[s.hint, mismatch && { color: C.red }]}>Both Passwords Must Match</Text>

      <PrimaryButton title="Change Password" onPress={handleChange} style={{ marginTop: 26 }} />
    </ScreenShell>
  );
}

const s = StyleSheet.create({
  hint: { color: C.muted, fontSize: 10, marginTop: -8 },
});
