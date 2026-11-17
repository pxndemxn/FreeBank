import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ScreenShell from '../ScreenShell';
import InputField from '../InputField';
import DateRow from '../DateRow';
import PrimaryButton from '../PrimaryButton';
import { C } from '../theme/appColors';

export default function EditProfileScreen({ onBack }) {
  const [name, setName] = useState('Tanya Myroniuk');
  const [email, setEmail] = useState('tanya.myroniuk@gmail.com');
  const [phone, setPhone] = useState('+8801712663389');
  const [birth, setBirth] = useState({ d: '28', m: 'September', y: '2000' });

  const handleSave = () => {
    // TODO: профильді сақтау (API сұрауы)
    Alert.alert('Saved', 'Profile updated', [{ text: 'OK', onPress: onBack }]);
  };

  return (
    <ScreenShell
      title="Edit Profile"
      onBack={onBack}
      footer={<PrimaryButton title="Save" onPress={handleSave} />}
    >
      <View style={s.avatarWrap}>
        <View style={s.avatar}>
          <Ionicons name="person" size={54} color={C.muted} />
        </View>
        <Text style={s.name}>{name}</Text>
        <Text style={s.role}>Senior Designer</Text>
      </View>

      <InputField label="Full Name" icon="person-circle-outline" value={name} onChangeText={setName} autoCapitalize="words" />
      <InputField label="Email Address" icon="mail-outline" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <InputField label="Phone Number" icon="call-outline" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />

      <DateRow label="Birth Date" value={birth} onChange={setBirth} monthIsText />

      <Text style={s.joined}>
        Joined <Text style={{ color: C.text }}>28 Jan 2021</Text>
      </Text>
    </ScreenShell>
  );
}

const s = StyleSheet.create({
  avatarWrap: { alignItems: 'center', marginBottom: 24 },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: C.card,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: { color: C.text, fontSize: 16, fontWeight: '600', marginTop: 14 },
  role: { color: C.muted, fontSize: 11, marginTop: 4 },
  joined: { color: C.muted, fontSize: 11, textAlign: 'center', marginTop: 40 },
});
