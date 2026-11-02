import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import PageIndicator from './PageIndicator';
import PrimaryButton from './PrimaryButton';
import { colors } from '../theme/colors';

/**
 * Үш onboarding беті үшін ортақ шаблон.
 * image  — require('...') арқылы берілетін иллюстрация (міндетті емес)
 * icon   — image жоқ болса, көрсетілетін уақытша белгі
 */
export default function OnboardingTemplate({
  image,
  icon = 'cash-outline',
  step,
  title,
  description,
  onNext,
}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.illustrationBox}>
        {image ? (
          <Image source={image} style={styles.image} resizeMode="contain" />
        ) : (
          <View style={styles.placeholder}>
            <Ionicons name={icon} size={90} color={colors.primary} />
          </View>
        )}
      </View>

      <PageIndicator total={3} active={step} />

      <View style={styles.textBox}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      <View style={styles.footer}>
        <PrimaryButton title="Next" onPress={onNext} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, paddingHorizontal: 20 },
  illustrationBox: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  image: { width: '100%', height: '85%' },
  placeholder: {
    width: 200,
    height: 200,
    borderRadius: 24,
    backgroundColor: colors.card,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox: { alignItems: 'center', marginTop: 40, paddingHorizontal: 20 },
  title: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 28,
  },
  description: {
    color: colors.gray,
    fontSize: 11,
    textAlign: 'center',
    lineHeight: 17,
    marginTop: 10,
  },
  footer: { marginTop: 40, marginBottom: 24 },
});