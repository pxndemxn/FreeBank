import React from 'react';
import OnboardingTemplate from '../components/OnboardingTemplate';

// const illustration = require('../../assets/onboarding3.png');
const illustration = null;

export default function OnboardingScreen3({ navigation }) {
  return (
    <OnboardingTemplate
      image={illustration}
      icon="trophy-outline"
      step={2}
      title={'Paying for Everything is\nEasy and Convenient'}
      description={'Built-in Fingerprint, face\nrecognition and more, keeping you\ncompletely safe'}
      onNext={() => navigation.navigate('SignIn')}
    />
  );
}