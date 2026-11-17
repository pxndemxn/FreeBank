import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import SplashScreen from './components/screens/SplashScreen';
import OnboardingScreen1 from './components/screens/OnboardingScreen1';
import OnboardingScreen2 from './components/screens/OnboardingScreen2';
import OnboardingScreen3 from './components/screens/OnboardingScreen3';
import SignInScreen from './components/screens/SignInScreen';
import SignUpScreen from './components/screens/SignUpScreen';
import MainApp from './components/screens/MainApp';
import {
  DesignMenuScreen,
  EditProfileRoute,
  AddCardRoute,
  AllCardsRoute,
  TransactionHistoryRoute,
  SearchRoute,
  ChangePasswordRoute,
  SendMoneyRoute,
  RequestMoneyRoute,
  LanguageRoute,
  TermsRoute,
  CategoryHistoryRoute,
} from './components/screens/NavScreens';
import { colors } from './components/theme/colors';

export type RootStackParamList = {
  Splash: undefined;
  Onboarding1: undefined;
  Onboarding2: undefined;
  Onboarding3: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Main: undefined;
  DesignMenu: undefined;
  EditProfile: undefined;
  AddCard: undefined;
  AllCards: undefined;
  TransactionHistory: undefined;
  Search: undefined;
  ChangePassword: undefined;
  SendMoney: undefined;
  RequestMoney: undefined;
  Language: undefined;
  Terms: undefined;
  CategoryHistory: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const navTheme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: colors.background },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navTheme}>
        <StatusBar style="light" />
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{ headerShown: false, animation: 'fade' }}
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Onboarding1" component={OnboardingScreen1} />
          <Stack.Screen name="Onboarding2" component={OnboardingScreen2} />
          <Stack.Screen name="Onboarding3" component={OnboardingScreen3} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen
            name="Main"
            component={MainApp}
            options={{ gestureEnabled: false }}
          />

          <Stack.Screen name="DesignMenu" component={DesignMenuScreen} />
          <Stack.Screen name="EditProfile" component={EditProfileRoute} />
          <Stack.Screen name="AddCard" component={AddCardRoute} />
          <Stack.Screen name="AllCards" component={AllCardsRoute} />
          <Stack.Screen name="TransactionHistory" component={TransactionHistoryRoute} />
          <Stack.Screen name="Search" component={SearchRoute} />
          <Stack.Screen name="ChangePassword" component={ChangePasswordRoute} />
          <Stack.Screen name="SendMoney" component={SendMoneyRoute} />
          <Stack.Screen name="RequestMoney" component={RequestMoneyRoute} />
          <Stack.Screen name="Language" component={LanguageRoute} />
          <Stack.Screen name="Terms" component={TermsRoute} />
          <Stack.Screen
            name="CategoryHistory"
            component={CategoryHistoryRoute}
            options={{ presentation: 'transparentModal', animation: 'slide_from_bottom' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}