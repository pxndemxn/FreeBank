import React, { useMemo, useState } from 'react';
import ScreenShell, { HeaderIconButton } from '../ScreenShell';
import SearchBar from '../SearchBar';
import TxRow from '../TxRow';
import { TRANSACTIONS } from '../data/designTransactions';

export default function SearchScreen({ onBack }) {
  const [query, setQuery] = useState('');

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return TRANSACTIONS;
    return TRANSACTIONS.filter(
      (t) => t.title.toLowerCase().includes(q) || t.subtitle.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <ScreenShell
      title="Search"
      onBack={onBack}
      right={<HeaderIconButton name="close" onPress={onBack} />}
    >
      <SearchBar value={query} onChangeText={setQuery} />
      {items.map((t) => (
        <TxRow key={t.id} tx={t} />
      ))}
    </ScreenShell>
  );
}
