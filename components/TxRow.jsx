import React from 'react';
import { C } from './theme/appColors';
import TransactionItem from './TransactionItem';

const TONES = { green: C.green, red: C.red };

// Строка транзакции из объекта данных (см. data/designTransactions.js)
export default function TxRow({ tx }) {
  return (
    <TransactionItem
      icon={tx.icon}
      iconColor={TONES[tx.tone] || C.text}
      title={tx.title}
      subtitle={tx.subtitle}
      amount={tx.amount}
      positive={tx.positive}
    />
  );
}
