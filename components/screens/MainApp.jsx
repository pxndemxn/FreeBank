import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { C } from '../theme/appColors';
import BottomTabBar from '../BottomTabBar';
import HomeScreen from './HomeScreen';
import StatisticsScreen from './StatisticsScreen';
import MyCardsScreen from './MyCardsScreen';
import SettingsScreen from './SettingsScreen';
import ProfileScreen from './ProfileScreen';

export default function MainApp() {
  const [screen, setScreen] = useState('home');

  const props = { navigate: setScreen };
  const showTabs = screen !== 'profile';

  return (
    <View style={{ flex: 1, backgroundColor: C.bg }}>
      <View style={{ flex: 1 }}>
        {screen === 'home' && <HomeScreen {...props} />}
        {screen === 'cards' && <MyCardsScreen {...props} />}
        {screen === 'stats' && <StatisticsScreen {...props} />}
        {screen === 'settings' && <SettingsScreen {...props} />}
        {screen === 'profile' && <ProfileScreen {...props} />}
      </View>
      {showTabs && <BottomTabBar active={screen} onChange={setScreen} />}
    </View>
  );
}