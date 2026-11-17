import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ScreenShell from '../ScreenShell';
import { C } from '../theme/appColors';

import EditProfileScreen from './EditProfileScreen';
import AddCardScreen from './AddCardScreen';
import AllCardsScreen from './AllCardsScreen';
import TransactionHistoryScreen from './TransactionHistoryScreen';
import SearchScreen from './SearchScreen';
import ChangePasswordScreen from './ChangePasswordScreen';
import SendMoneyScreen from './SendMoneyScreen';
import RequestMoneyScreen from './RequestMoneyScreen';
import LanguageScreen from './LanguageScreen';
import TermsScreen from './TermsScreen';
import CategoryHistoryScreen from './CategoryHistoryScreen';

// Экраны не знают про react-navigation: им передаются onBack и go(routeName).
// Здесь — тонкие обёртки, которые подключают их к Stack.Navigator из App.tsx.
const withNav = (Screen) =>
  function Route({ navigation }) {
    return (
      <Screen
        onBack={() => navigation.goBack()}
        go={(name) => navigation.navigate(name)}
      />
    );
  };

export const EditProfileRoute = withNav(EditProfileScreen);
export const AddCardRoute = withNav(AddCardScreen);
export const AllCardsRoute = withNav(AllCardsScreen);
export const TransactionHistoryRoute = withNav(TransactionHistoryScreen);
export const SearchRoute = withNav(SearchScreen);
export const ChangePasswordRoute = withNav(ChangePasswordScreen);
export const SendMoneyRoute = withNav(SendMoneyScreen);
export const RequestMoneyRoute = withNav(RequestMoneyScreen);
export const LanguageRoute = withNav(LanguageScreen);
export const TermsRoute = withNav(TermsScreen);
export const CategoryHistoryRoute = withNav(CategoryHistoryScreen);

const MENU = [
  { route: 'Main', label: 'Main (Home / My Cards / Statistics / Settings)', icon: 'home-outline' },
  { route: 'EditProfile', label: 'Edit Profile', icon: 'create-outline' },
  { route: 'AllCards', label: 'All Cards', icon: 'albums-outline' },
  { route: 'AddCard', label: 'Add New Card', icon: 'add-circle-outline' },
  { route: 'SendMoney', label: 'Send Money', icon: 'arrow-up-circle-outline' },
  { route: 'RequestMoney', label: 'Request Money', icon: 'arrow-down-circle-outline' },
  { route: 'TransactionHistory', label: 'Transaction History', icon: 'receipt-outline' },
  { route: 'CategoryHistory', label: 'Category Chart / History', icon: 'pie-chart-outline' },
  { route: 'Search', label: 'Search', icon: 'search-outline' },
  { route: 'Language', label: 'Language', icon: 'language-outline' },
  { route: 'ChangePassword', label: 'Change Password', icon: 'lock-closed-outline' },
  { route: 'Terms', label: 'Terms & Condition', icon: 'document-text-outline' },
];

// Меню для быстрого перехода ко всем экранам (удобно при показе проекта)
export function DesignMenuScreen({ navigation }) {
  return (
    <ScreenShell title="All Screens" onBack={() => navigation.goBack()}>
      {MENU.map((m) => (
        <TouchableOpacity key={m.route} style={s.row} onPress={() => navigation.navigate(m.route)}>
          <Ionicons name={m.icon} size={18} color={C.muted} style={{ marginRight: 14 }} />
          <Text style={s.label}>{m.label}</Text>
          <Ionicons name="chevron-forward" size={16} color={C.muted} />
        </TouchableOpacity>
      ))}
    </ScreenShell>
  );
}

const s = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  label: { flex: 1, color: C.text, fontSize: 13 },
});
