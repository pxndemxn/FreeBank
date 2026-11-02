import React from 'react';
import OnboardingTemplate from '../components/OnboardingTemplate';

// Иллюстрацияны Figma-дан экспорттап, assets папкасына салыңыз да, жолды ашыңыз:
// const illustration = require('../../assets/onboarding1.png');
const illustration = null;

export default function OnboardingScreen1({ navigation }) {
  return (
    <OnboardingTemplate
      image={illustration}
      icon="stats-chart-outline"
      step={0}
      title={'Fastest Payment in\nthe world'}
      description={'Integrate multiple payment methods\nto help you up the process quickly'}
      onNext={() => navigation.navigate('Onboarding2')}
    />
  );
}