import React from 'react';
import OnboardingTemplate from '../../components/OnboardingTemplate';

// const illustration = require('../../assets/onboarding2.png');
const illustration = null;

export default function OnboardingScreen2({ navigation }) {
  return (
    <OnboardingTemplate
      image={illustration}
      icon="shield-checkmark-outline"
      step={1}
      title={'The most Secoure\nPlatfrom for Customer'}
      description={'Built-in Fingerprint, face\nrecognition and more, keeping you\ncompletely safe'}
      onNext={() => navigation.navigate('Onboarding3')}
    />
  );
}