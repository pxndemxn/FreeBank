import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../BackButton';
import InputField from '../InputField';
import PrimaryButton from '../PrimaryButton';
import { colors } from '../../theme/colors';

export default function SignUpScreen({ navigation }) {
  const [form, setForm] = useState({ fullName: '', phone: '', email: '', password: '' });

  const update = (key) => (value) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSignUp = () => {
    // TODO: тіркеу логикасы (API сұрауы)
    console.log('Sign Up:', form);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        <BackButton onPress={() => navigation.goBack()} />

        <Text style={styles.title}>Sign Up</Text>

        <InputField
          label="Full Name"
          icon="mail-outline"
          value={form.fullName}
          onChangeText={update('fullName')}
          placeholder="Tanya Myroniuk"
          autoCapitalize="words"
        />
        <InputField
          label="Phone Number"
          icon="call-outline"
          value={form.phone}
          onChangeText={update('phone')}
          placeholder="+8801712663389"
          keyboardType="phone-pad"
        />
        <InputField
          label="Email Address"
          icon="mail-outline"
          value={form.email}
          onChangeText={update('email')}
          placeholder="tanya.myroniuk@gmail.com"
          keyboardType="email-address"
        />
        <InputField
          label="Password"
          icon="lock-closed-outline"
          value={form.password}
          onChangeText={update('password')}
          placeholder="••••••••"
          isPassword
        />

        <PrimaryButton title="Sign Up" onPress={handleSignUp} style={{ marginTop: 14 }} />

        <View style={styles.bottomRow}>
          <Text style={styles.bottomText}>Already have an account. </Text>
          <Pressable onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.link}>Sign In</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, paddingHorizontal: 20, paddingTop: 12 },
  title: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '600',
    marginTop: 28,
    marginBottom: 24,
  },
  bottomRow: { flexDirection: 'row', justifyContent: 'center', marginVertical: 22 },
  bottomText: { color: colors.gray, fontSize: 10 },
  link: { color: colors.primary, fontSize: 10 },
});