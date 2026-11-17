import React from 'react';
import { View } from 'react-native';
import ScreenShell from '../ScreenShell';
import CardView from '../CardView';
import PrimaryButton from '../PrimaryButton';

export default function AllCardsScreen({ onBack, go }) {
  return (
    <ScreenShell
      title="All Cards"
      onBack={onBack}
      footer={<PrimaryButton title="Add Card  +" onPress={() => go('AddCard')} />}
    >
      <View style={{ gap: 18 }}>
        <CardView brand="mastercard" number="4562 1122 4595 7852" name="AR Jonson" expiry="24/2000" cvv="6986" />
        <CardView brand="visa" number="4562 1122 4595 7852" name="Smith Jonson" expiry="24/2000" />
      </View>
    </ScreenShell>
  );
}
