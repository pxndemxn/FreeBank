import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../BackButton';
import InputField from '../InputField';
import PrimaryButton from '../PrimaryButton';
import { colors } from '../theme/colors';

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // TODO: авторизация логикасы (API сұрауы)
    console.log('Sign In:', { email, password });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <BackButton onPress={() => navigation.goBack()} />

        <Text style={styles.title}>Sign In</Text>

        <InputField
          label="Email Address"
          icon="mail-outline"
          value={email}
          onChangeText={setEmail}
          placeholder="tanyamyroniuk@gmail.com"
          keyboardType="email-address"
        />
        <InputField
          label="Password"
          icon="lock-closed-outline"
          value={password}
          onChangeText={setPassword}
          placeholder="••••••••"
          isPassword
        />

        <PrimaryButton title="Sign In" onPress={handleSignIn} style={{ marginTop: 14 }} />

        <View style={styles.bottomRow}>
          <Text style={styles.bottomText}>I'm a new user. </Text>
          <Pressable onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.link}>Sign Up</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
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
    marginBottom: 28,
  },
  bottomRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 22 },
  bottomText: { color: colors.gray, fontSize: 10 },
  link: { color: colors.primary, fontSize: 10 },
});