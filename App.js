/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */

import * as React from 'react';
// import { Button, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/screens/Home';
import DetailsScreen from './components/screens/DetailsScreen.js';
import FocusedStatusBar from './components/FocusedStatusBar';
import { COLORS, SHADOWS, SIZES, FONTS } from "./constants/theme";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#EAECEE',
  },
};

const Tab = createNativeStackNavigator();


const App = () => {


  return (
    <NavigationContainer theme={theme}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
