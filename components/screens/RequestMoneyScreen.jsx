import React, { useState } from 'react';
import { Alert } from 'react-native';
import ScreenShell from '../ScreenShell';
import InputField from '../InputField';
import DateRow from '../DateRow';
import AmountBox from '../AmountBox';
import PrimaryButton from '../PrimaryButton';

const CURRENCIES = ['USD', 'EUR', 'KZT'];

export default function RequestMoneyScreen({ onBack }) {
  const [payer, setPayer] = useState('Tanya Myroniuk');
  const [email, setEmail] = useState('tanya.myroniuk@gmail.com');
  const [description, setDescription] = useState('Tanya Myroniuk');
  const [due, setDue] = useState({ d: '28', m: '09', y: '2000' });
  const [amount, setAmount] = useState('26.00');
  const [currencyIdx, setCurrencyIdx] = useState(0);
  const currency = CURRENCIES[currencyIdx];

  const handleSend = () => {
    // TODO: сұраным жіберу (API сұрауы)
    Alert.alert('Request sent', `${currency} ${amount} → ${payer}`, [{ text: 'OK', onPress: onBack }]);
  };

  return (
    <ScreenShell
      title="Request Money"
      onBack={onBack}
      footer={<PrimaryButton title="Send Money" onPress={handleSend} />}
    >
      <InputField label="Payer Name" icon="person-circle-outline" value={payer} onChangeText={setPayer} autoCapitalize="words" />
      <InputField label="Email Address" icon="mail-outline" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <InputField label="Description" icon="person-circle-outline" value={description} onChangeText={setDescription} autoCapitalize="sentences" />

      <DateRow label="Monthly Due By" value={due} onChange={setDue} />

      <AmountBox
        currency={currency}
        value={amount}
        onChangeText={setAmount}
        onChangeCurrency={() => setCurrencyIdx((i) => (i + 1) % CURRENCIES.length)}
      />
    </ScreenShell>
  );
}
